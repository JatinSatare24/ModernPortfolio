import Image from "next/image";
import { site, socials } from "@content/index";
import Container from "@/components/layout/Container";
import AnchorLink from "@/components/motion/AnchorLink";
import { primaryClass, secondaryClass } from "@/components/ui/Buttons";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "@/components/ui/Icons";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
  Instagram: <Instagram />,
};

export default function Hero() {
  const { hero } = site;
  return (
    <section
      id="top"
      className="bg-glow relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-24"
    >
      <Container className="relative w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <div
              className="hero-rise mb-6 sm:mb-8"
              style={{ "--d": 0 } as React.CSSProperties}
            >
              <p className="inline-flex items-center gap-3 rounded-full border border-line-strong bg-surface py-1.5 pl-3 pr-4 text-xs text-muted shadow-card">
                <span className="ping relative inline-block size-2 rounded-full bg-accent" />
                {hero.availability}
              </p>
            </div>

            <h1 className="hero-slide font-display text-4xl leading-[1.1] text-fg sm:text-[3.25rem] lg:text-5xl xl:text-[3.5rem]">
              {hero.greeting}
              <br />
              <span className="text-accent">{hero.headline}</span>
            </h1>

            <p
              className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-muted sm:mt-8 sm:text-xl"
              style={{ "--d": 0.25 } as React.CSSProperties}
            >
              {hero.subline}
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
              style={{ "--d": 0.4 } as React.CSSProperties}
            >
              <AnchorLink to="contact" className={primaryClass}>
                {hero.primaryCta}
                <ArrowDown />
              </AnchorLink>
              <AnchorLink to="work" className={secondaryClass}>
                {hero.secondaryCta}
              </AnchorLink>
              <ul className="-ml-3 flex items-center gap-1 sm:ml-2">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    aria-label="Email"
                    className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent-strong"
                  >
                    <Mail />
                  </a>
                </li>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent-strong"
                    >
                      {socialIcons[s.label] ?? s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="hero-rise relative mx-auto w-full max-w-[18rem] sm:max-w-sm lg:max-w-md"
            style={{ "--d": 0.3 } as React.CSSProperties}
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-full bg-accent/10 sm:translate-x-4 sm:translate-y-4"
            />
            <Image
              src={site.avatar.src}
              alt={site.avatar.alt}
              width={1000}
              height={1094}
              priority
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 320px"
              className="aspect-square w-full rounded-full border-4 border-surface bg-surface object-cover object-[50%_20%] shadow-card"
            />
            {/* Photo badge (hidden on purpose). To bring it back, uncomment:
            <div className="absolute -bottom-3 left-0 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card sm:left-2">
              <p className="font-display text-2xl leading-none text-accent">
                {hero.photoBadge.value}
              </p>
              <p className="mt-1.5 text-xs text-muted">
                {hero.photoBadge.label}
              </p>
            </div>
            */}
          </div>
        </div>
      </Container>
    </section>
  );
}
