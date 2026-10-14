import type { Metadata, Viewport } from "next";
import { display, sans } from "@/lib/fonts";
import { site, socials, theme } from "@content/index";
import MotionProvider from "@/components/motion/MotionProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SkipLink from "@/components/layout/SkipLink";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/motion/CursorGlow";
import PageIntro from "@/components/motion/PageIntro";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  keywords: [
    "Full-Stack Engineer",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Frontend Developer",
    "Freelance Web Developer",
    "India",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}${site.avatar.src}`,
  description: site.description,
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
      style={
        {
          "--accent": theme.accent,
          "--content-max": theme.contentWidth,
        } as React.CSSProperties
      }
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
        <SmoothScroll>
          <PageIntro />
          <CursorGlow />
          <SkipLink />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
