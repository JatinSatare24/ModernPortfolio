import { site, socials } from "@content/index";
import Container from "@/components/layout/Container";
import AnchorLink from "@/components/motion/AnchorLink";
import { primaryClass, secondaryClass } from "@/components/ui/Buttons";
import { ArrowDown, Download, Github, Linkedin } from "@/components/ui/Icons";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
};

export default function Hero() {
  const { hero } = site;
  return (
    <section
      id="top"
      className="bg-glow relative flex items-start overflow-hidden pb-14 pt-28 sm:min-h-[100svh] sm:items-center sm:pb-20 sm:pt-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative">
        <div
          className="hero-rise mb-6 flex flex-wrap items-center gap-4 sm:mb-8"
          style={{ "--d": 0 } as React.CSSProperties}
        >
          <p className="inline-flex items-center gap-3 rounded-full border border-line-strong bg-surface/70 py-1.5 pl-3 pr-4 text-xs text-muted backdrop-blur">
            <span className="ping relative inline-block size-2 rounded-full bg-accent" />
            {hero.availability}
          </p>
        </div>

        <h1
          className="hero-slide font-display text-[2.7rem] font-light leading-[1.06] tracking-[-0.02em] text-fg sm:text-6xl lg:text-[5.4rem]"
        >
          {hero.greeting}
          <br />
          <span className="italic text-accent">{hero.headline}</span>
        </h1>

        <p
          className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:mt-8 sm:text-xl"
          style={{ "--d": 0.25 } as React.CSSProperties}
        >
          {hero.subline}
        </p>

        <div
          className="hero-rise mt-8 flex flex-wrap sm:mt-10 items-center gap-3"
          style={{ "--d": 0.4 } as React.CSSProperties}
        >
          <AnchorLink to="work" className={primaryClass}>
            {hero.primaryCta}
            <ArrowDown />
          </AnchorLink>
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className={secondaryClass}
          >
            {hero.secondaryCta}
            <Download />
          </a>

          <ul className="ml-2 flex items-center gap-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:text-accent"
                >
                  {socialIcons[s.label] ?? s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
