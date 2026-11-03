import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { theme } from "@content/index";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const bold = await readFile(
    join(
      process.cwd(),
      "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff",
    ),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.accent,
          color: "#ffffff",
          fontSize: 110,
          fontFamily: "Inter",
          fontWeight: 600,
        }}
      >
        J
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: bold, style: "normal", weight: 600 }],
    },
  );
}
