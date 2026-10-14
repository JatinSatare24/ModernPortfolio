"use client";

import { useEffect, useId, useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-line-strong bg-bg/60 px-4 py-3 text-[0.95rem] text-fg placeholder:text-subtle transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/30";

export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [startedAt, setStartedAt] = useState(0);

  // Used to spot bots that submit instantly
  useEffect(() => setStartedAt(Date.now()), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
          startedAt,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[22rem] flex-col items-start justify-center gap-3 rounded-3xl border border-accent/30 bg-accent-soft p-8"
      >
        <p className="font-display text-3xl text-fg">Message sent.</p>
        <p className="text-muted">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-line bg-surface p-6 sm:p-8"
      noValidate={false}
    >
      <div>
        <label htmlFor={`${id}-name`} className="mb-2 block text-sm text-muted">
          Name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          placeholder="Your name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="mb-2 block text-sm text-muted">
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="you@company.com"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="Tell me about the role or project…"
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-4px_var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowRight />
        </button>
        <p role="alert" aria-live="polite" className="text-sm text-red-400">
          {status === "error" && (
            <>
              {error}{" "}
              <a href={`mailto:${fallbackEmail}`} className="underline">
                Email me directly
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
