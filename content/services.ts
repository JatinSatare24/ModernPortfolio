// -----------------------------------------------------------------------------
// SERVICES. The three cards shown between About and Work.
// Keep the wording in plain English (no technical terms) so clients understand it.
// "icon" must be one of: "website", "store", "app".
// -----------------------------------------------------------------------------

export const services = {
  eyebrow: "Services",
  heading: "What I can build for you",
  items: [
    {
      icon: "website",
      title: "Websites",
      text: "Fast, good-looking websites for individuals and businesses.",
    },
    {
      icon: "store",
      title: "Online stores",
      text: "Complete stores with payments, orders and an admin panel to manage them.",
    },
    {
      icon: "app",
      title: "Web apps & dashboards",
      text: "Custom tools with logins, data and admin screens, from idea to launch.",
    },
  ],
  cta: "Start a project",
} as const;
