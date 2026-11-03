import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site, theme } from "@content/index";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated automatically from content/site.ts and content/theme.ts
export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([
    readFile(
      join(
        process.cwd(),
        "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff",
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
          background: `radial-gradient(70% 90% at 15% 0%, ${theme.accent}22, #f6f8fc 60%)`,
          color: "#121826",
          fontFamily: "Inter",
          border: "1px solid #e1e7f0",
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
              letterSpacing: 4,
              textTransform: "uppercase",
              color: theme.accent,
              fontWeight: 600,
            }}
          >
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1,
              letterSpacing: -4,
              fontWeight: 600,
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 36, lineHeight: 1.35, color: "#475569", maxWidth: 900 }}>
            {site.hero.shareLine}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#5a6a82",
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
        { name: "Inter", data: bold, style: "normal", weight: 600 },
        { name: "Inter", data: regular, style: "normal", weight: 400 },
      ],
    },
  );
}
