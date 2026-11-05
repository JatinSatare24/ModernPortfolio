import { sections, site, socials } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "@/components/ui/Icons";
import ContactForm from "./ContactForm";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
  Instagram: <Instagram />,
};

function Method({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-colors sm:-mx-3 hover:border-line hover:bg-surface"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-accent">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-xs uppercase tracking-[0.1em] text-subtle">
            {label}
          </span>
          <span className="block truncate text-[0.95rem] text-fg">{value}</span>
        </span>
        <ArrowUpRight className="ml-auto size-4 shrink-0 text-subtle transition-colors group-hover:text-accent" />
      </a>
    </li>
  );
}

export default function Contact() {
  const { contact } = site;
  return (
    <section id="contact" className="section-rule relative py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(60%_60%_at_50%_100%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent)]"
      />
      <Container className="relative">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-accent">
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              {sections.contact.eyebrow}
            </p>
            <h2 className="font-display text-balance text-[1.75rem] leading-[1.2] text-fg sm:text-[2.25rem] lg:text-[2.5rem]">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {contact.intro}
            </p>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              {contact.rolesLine}
            </p>

            <ul className="mt-10 space-y-1">
              <Method
                icon={<Mail />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              {socials.map((s) => (
                <Method
                  key={s.label}
                  icon={socialIcons[s.label] ?? <ArrowUpRight />}
                  label={s.label}
                  value={s.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  href={s.href}
                  external
                />
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm fallbackEmail={contact.email} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
