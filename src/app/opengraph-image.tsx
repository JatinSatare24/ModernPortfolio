import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site, theme } from "@content/index";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated automatically from content/site.ts and content/theme.ts
export default async function OpengraphImage() {
  const [serif, sans] = await Promise.all([
    readFile(
      join(
        process.cwd(),
        "node_modules/@fontsource/newsreader/files/newsreader-latin-300-normal.woff",
      ),
    ),
    readFile(
      join(
        process.cwd(),
        "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff",
      ),
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `radial-gradient(70% 90% at 15% 0%, ${theme.accent}33, #08090b 60%)`,
          color: "#e9ebee",
          fontFamily: "Inter",
          border: "1px solid #1e2228",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: theme.accent,
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: theme.accent,
            }}
          >
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontFamily: "Newsreader",
              fontSize: 156,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 300,
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 36, lineHeight: 1.35, color: "#9097a3", maxWidth: 900 }}>
            {site.hero.subline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#7b828e",
          }}
        >
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
          <div>{site.hero.availability}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, style: "normal", weight: 300 },
        { name: "Inter", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}
