// -----------------------------------------------------------------------------
// PROJECTS. Each project is one block between { and }.
//
// - The project marked  featured: true  appears as the large card.
// - Every project WITHOUT  featured: true  appears automatically in a
//   "More projects" grid. (The grid stays hidden until you add one.)
//
// See CONTENT_GUIDE.md, "Adding a new project", for a copy-paste template.
// -----------------------------------------------------------------------------

import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "resin-kalaakari",
    title: "Resin Kalaakari",
    kind: "Full-Stack E-Commerce Platform",
    summary:
      "A live e-commerce platform I designed, built and shipped on my own, owning the whole stack from data modeling to the deployed UI.",
    featured: true,
    highlights: [
      "31 reusable components across 14 routes (Next.js, TypeScript, Supabase), owned end to end.",
      "Normalized schema: 6 tables, 5 foreign keys, 12 Row-Level Security policies and a Postgres trigger for automatic profile creation.",
      "Auth with email/password and Google OAuth, SSR-safe session cookies, middleware-protected checkout and role-based admin access.",
      "Admin panel for orders, products and multi-photo galleries. A Supabase Edge Function, triggered by Postgres, emails invoices when a payment is submitted.",
      "AI shop assistant: tool-calling RAG with OpenAI + pgvector, validated model output, Postgres rate limiting and a feature flag.",
      "Performance: Next.js Image optimization, lazy loading, 400ms debounced search and server components.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Row-Level Security",
      "Edge Functions",
      "OAuth 2.0",
      "OpenAI",
      "pgvector",
    ],
    images: [
      {
        src: "/projects/resin-kalaakari/home.png",
        alt: "Resin Kalaakari home page on mobile with the hero banner and featured products",
      },
      {
        src: "/projects/resin-kalaakari/products.png",
        alt: "Resin Kalaakari product listing on mobile with category filters and search",
      },
      {
        src: "/projects/resin-kalaakari/product-detail.png",
        alt: "Resin Kalaakari product detail page on mobile",
      },
    ],
    links: [{ label: "Visit live site", href: "https://resinkalaakaari.in" }],
  },
];
