// -----------------------------------------------------------------------------
// SITE-WIDE INFO: name, contact details, social links, resume, hero text.
// Edit the text between the quotes. Keep the quotes and the commas.
// -----------------------------------------------------------------------------

import type { SocialLink } from "./types";

export const site = {
  name: "Jatin Satare",
  shortName: "Jatin",
  role: "Full-Stack Engineer",
  location: "India",

  // Your photo. To change it, replace public/images/avatar.jpg (square, at least 200 x 200 px).
  avatar: {
    src: "/images/avatar.jpg",
    alt: "Portrait of Jatin Satare",
  },

  // The public address of the website (used for SEO, sitemap and share previews).
  // Update this if you buy a custom domain.
  url: "https://jatinsatareportfolio.netlify.app",

  // Search-engine / share-preview text
  title: "Jatin Satare | Full-Stack Engineer",
  description:
    "Full-Stack Engineer with 4 years of production experience. I build fast, reliable, production-ready web apps, from database to UI. Open to full-time roles and freelance projects.",

  // Resume file. To replace it, overwrite the PDF in public/resume/ (same name).
  resume: {
    href: "/resume/Jatin_Satare_Resume.pdf",
    downloadName: "Jatin_Satare_Resume.pdf",
  },

  hero: {
    greeting: "Hi, I'm Jatin,",
    headline: "a Full-Stack Engineer.",
    subline:
      "I build fast, reliable, production-ready web apps, from database to UI.",
    primaryCta: "View my work",
    secondaryCta: "Download resume",
    availability: "Open to full-time roles & freelance projects",
  },

  contact: {
    heading: "Let's build something reliable.",
    intro:
      "Hiring for a Full-Stack or Frontend role, or have a project that needs an engineer who owns it end to end? Send me a message and I'll get back to you.",
    email: "jatinsatare@gmail.com",
    phoneDisplay: "+91 93728 63335",
    phoneHref: "tel:+919372863335",
  },
};

// Section titles (small label + big heading) shown on the page.
export const sections = {
  work: {
    eyebrow: "Selected work",
    heading: "A selection of things I've built.",
    moreHeading: "More projects",
  },
  experience: {
    eyebrow: "Experience",
  },
  skills: {
    eyebrow: "Skills",
    heading: "The toolkit, from database to UI.",
  },
  education: {
    eyebrow: "Education & certifications",
  },
  contact: {
    eyebrow: "Contact",
  },
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/JatinSatare24" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jatin-satare/" },
];

export const moreOnGithub = {
  label: "More on GitHub",
  href: "https://github.com/JatinSatare24?tab=repositories",
};

// Navigation links (id must match the section id on the page).
export const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
