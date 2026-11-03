import { about } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {about.facts.map((f) => (
                <li
                  key={f.label}
                  className="rounded-2xl border border-line bg-surface p-5 shadow-card"
                >
                  <p className="font-display text-3xl text-accent">{f.value}</p>
                  <p className="mt-1.5 text-sm leading-snug text-muted">
                    {f.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
