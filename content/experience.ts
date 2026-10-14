// -----------------------------------------------------------------------------
// EXPERIENCE TIMELINE. Newest job first. Each job is one block between { and }.
// -----------------------------------------------------------------------------

import type { Job } from "./types";

export const experienceIntro = {
  heading: "From keeping systems alive to building them end to end.",
  text: "I started in enterprise middleware, where reliability is the job. That habit of thinking about failure, monitoring and change control now shapes every full-stack product I build.",
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Capgemini",
    period: "Mar 2021 – Apr 2025",
    summary: "Enterprise middleware reliability engineering.",
    highlights: [
      "Owned delivery across 12+ production TIBCO middleware integrations through Azure DevOps CI/CD.",
      "Built automated alerting that cut time-to-detect for production issues.",
      "Administered and hardened Linux servers and Microsoft SQL Server, sustaining 99.9% uptime over 4 years.",
      "Led root-cause analysis of 100+ incidents using Splunk, reducing recurring failures by 25% and resolution time by 30%.",
    ],
  },
  {
    role: "Data Mining Analyst",
    company: "Datamatics",
    period: "Jun 2020 – Dec 2020",
    highlights: [
      "Structured and validated large customer datasets for the analytics team.",
    ],
  },
];
