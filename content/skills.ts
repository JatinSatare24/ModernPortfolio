// -----------------------------------------------------------------------------
// SKILLS. Add a skill by adding  "Name",  to the right list.
// Add a whole new group by copying one block between { and }.
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
      "SQL",
      "REST APIs",
      "Row-Level Security",
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
    ],
  },
];
