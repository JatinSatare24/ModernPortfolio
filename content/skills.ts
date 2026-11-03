// -----------------------------------------------------------------------------
// SKILLS. Add a skill by adding  "Name",  to the right list.
// Add a whole new group by copying one block between { and }.
// Tools with a known logo (React, Docker, ...) get a small colored icon
// automatically. See src/components/ui/techIcons.ts to add more.
// -----------------------------------------------------------------------------

import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML/CSS",
      "Responsive & Accessible UI",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Neon",
      "Drizzle",
      "Prisma",
      "Zod",
      "SQL",
      "REST APIs",
      "Row-Level Security",
      "Clerk",
      "OAuth 2.0",
    ],
  },
  {
    title: "AI",
    items: ["RAG", "LLM tool calling", "pgvector", "Agents"],
  },
  {
    title: "Engineering & DevOps",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Azure DevOps",
      "Vercel",
      "Linux",
      "Automated Testing",
    ],
  },
];
