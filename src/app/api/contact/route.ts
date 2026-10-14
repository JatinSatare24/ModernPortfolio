import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// ---- Basic spam protection ------------------------------------------------
// 1) Honeypot field   2) Minimum time on page   3) Per-IP rate limit
// 4) Same-origin check   5) Strict length / format validation
// (The rate limiter is in-memory, which is fine for a personal site.)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 4;
const MIN_FILL_MS = 2500;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body: Record<string, unknown>, status = 200) =>
  NextResponse.json(body, { status });

export async function POST(req: Request) {
  // Same-origin only
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ error: "Forbidden." }, 403);
    } catch {
      return json({ error: "Forbidden." }, 403);
    }
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Bots: honeypot filled or form submitted impossibly fast. Pretend success.
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;
  if (honeypot || (startedAt && Date.now() - startedAt < MIN_FILL_MS)) {
    return json({ ok: true });
  }

  const name = typeof body.name === "string" ? oneLine(body.name) : "";
  const email = typeof body.email === "string" ? oneLine(body.email) : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100)
    return json({ error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email) || email.length > 200)
    return json({ error: "Please enter a valid email address." }, 400);
  if (message.length < 10 || message.length > 4000)
    return json({ error: "Please write a message (10 to 4000 characters)." }, 400);

  const ip =
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  if (rateLimited(ip))
    return json({ error: "Too many messages. Please try again in a few minutes." }, 429);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return json({ error: "The contact form isn't available right now." }, 503);
  }

  // A real Resend key is plain ASCII like "re_abc123". Anything else (for example
  // masked bullets copied from a dashboard) can never work, so say so clearly.
  if (!/^re_[A-Za-z0-9_]+$/.test(apiKey)) {
    console.error(
      `Contact form: RESEND_API_KEY is invalid (length ${apiKey.length}, starts with "${apiKey.slice(0, 3)}"). ` +
        "It must look like re_xxxxxxxx. Re-copy it from the Resend 'Create API Key' dialog and redeploy.",
    );
    return json({ error: "The contact form isn't available right now." }, 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    if (error) {
      console.error("Resend error:", error);
      return json({ error: "Couldn't send your message. Please try again." }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return json({ error: "Couldn't send your message. Please try again." }, 502);
  }
}
