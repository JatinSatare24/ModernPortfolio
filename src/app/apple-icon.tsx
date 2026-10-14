import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { theme } from "@content/index";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const serif = await readFile(
    join(
      process.cwd(),
      "node_modules/@fontsource/newsreader/files/newsreader-latin-400-italic.woff",
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
          background: "#08090b",
          color: theme.accent,
          fontSize: 130,
          fontFamily: "Newsreader",
          fontStyle: "italic",
        }}
      >
        J
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Newsreader", data: serif, style: "italic", weight: 400 }],
    },
  );
}
