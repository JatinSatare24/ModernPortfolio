// -----------------------------------------------------------------------------
// Shapes of the data used across the site. You normally never need to edit
// this file. It exists so the editor warns you if a field is missing/misspelled.
// -----------------------------------------------------------------------------

export type ProjectImage = {
  src: string; // path inside /public, e.g. "/projects/my-app/home.png"
  alt: string; // short description for screen readers
};

export type ProjectLink = {
  label: string; // e.g. "Live site", "GitHub"
  href: string;
};

export type Project = {
  slug: string; // unique, lowercase, no spaces (used internally)
  title: string;
  kind: string; // short label, e.g. "Full-Stack E-Commerce Platform"
  summary: string; // one or two sentences
  featured?: boolean; // true = shown as the big featured card
  highlights: string[]; // the key bullet points
  tech: string[]; // technology tags
  images: ProjectImage[]; // screenshots (can be empty)
  links: ProjectLink[]; // buttons on the card
};

export type Job = {
  role: string;
  company: string;
  period: string; // text shown on the page, e.g. "Mar 2021 – Apr 2025"
  location?: string;
  summary?: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Credential = {
  title: string; // e.g. "Full-Stack Developer Path"
  issuer: string; // e.g. "Scrimba"
  detail: string; // e.g. "108.4 hours"
  year?: string;
  href?: string; // link to the certificate (optional)
};

export type SocialLink = {
  label: string;
  href: string;
};
