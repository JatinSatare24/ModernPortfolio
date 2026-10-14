import { sections, skills } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-rule py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow={sections.skills.eyebrow}
          heading={sections.skills.heading}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-line bg-surface">
                <div className="flex h-full flex-col p-6">
                  <p className="font-mono text-xs text-subtle">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-fg">
                    {group.title}
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line-strong px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
