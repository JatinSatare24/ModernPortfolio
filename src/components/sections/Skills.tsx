import { sections, skills } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="section-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={sections.skills.eyebrow}
          heading={sections.skills.heading}
        />

        <Reveal>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface shadow-card">
            {skills.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 p-5 sm:p-7 lg:grid-cols-[13rem_1fr] lg:gap-10"
              >
                <h3 className="font-display text-xl text-fg lg:pt-1.5">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-bg px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent/50 hover:bg-accent-soft"
                    >
                      <TechIcon name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
