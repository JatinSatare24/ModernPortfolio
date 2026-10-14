import localFont from "next/font/local";

// Headings: Newsreader, a refined, sober serif (300 for the hero, 400 elsewhere).
export const display = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/newsreader/files/newsreader-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/newsreader/files/newsreader-latin-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/newsreader/files/newsreader-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display-face",
  display: "swap",
});

// Body and interface text: Inter.
export const sans = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sans-face",
  display: "swap",
});
