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

  // Your photo, shown in the hero. To change it, replace public/images/jatin-portrait.jpg
  // (portrait or square, at least 800 px wide, ideally under 300 KB). If you use a new
  // file name, update "src" below to match.
  avatar: {
    src: "/images/jatin-portrait.jpg",
    alt: "Portrait of Jatin Satare",
  },

  // The public address of the website (used for SEO, sitemap and share previews).
  // Update this if you buy a custom domain.
  url: "https://jatinsatare.vercel.app",

  // Search-engine / share-preview text
  title: "Jatin Satare | Full-Stack Engineer",
  description:
    "Full-Stack Engineer who builds fast, reliable websites, online stores and web apps from idea to launch. Open to freelance projects and full-time roles.",

  // Resume file. To replace it, overwrite the PDF in public/resume/ (same name).
  resume: {
    href: "/resume/Jatin_Satare_Resume.pdf",
    downloadName: "Jatin_Satare_Resume.pdf",
  },

  hero: {
    greeting: "Hi, I am Jatin,",
    headline: "a Full-Stack Engineer.",
    subline:
      "I design, build and ship full-stack web apps with Next.js, TypeScript and Supabase, backed by four years of enterprise production reliability.",
    // Shorter version used in the link-preview image (LinkedIn, WhatsApp, Slack)
    shareLine:
      "I build fast, reliable, production-ready web apps, from database to UI.",
    // Small card on the corner of your photo in the hero
    photoBadge: { value: "4 years", label: "Production experience" },
    primaryCta: "Contact me",
    secondaryCta: "View my work",
    availability: "Open to full-time roles & freelance projects",
  },

  contact: {
    heading: "Need a website or app? Let's talk.",
    intro: "Tell me what you're building and I'll get back to you.",
    rolesLine:
      "Hiring for a Full-Stack or Frontend role? I'd love to hear about it.",
    email: "jatinsatare@gmail.com",
  },
};

// Section titles (small label + big heading) shown on the page.
export const sections = {
  // (The About section's own text lives in content/about.ts)
  work: {
    eyebrow: "Selected work",
    heading: "A selection of things I have built.",
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
  { label: "Instagram", href: "https://www.instagram.com/_jatin.exe/" },
];

export const moreOnGithub = {
  label: "More on GitHub",
  href: "https://github.com/JatinSatare24?tab=repositories",
};

// Navigation links (id must match the section id on the page).
export const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
