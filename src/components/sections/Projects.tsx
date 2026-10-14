import { moreOnGithub, projects, sections } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "@/components/ui/Icons";
import { ExternalLink, secondaryClass } from "@/components/ui/Buttons";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="01"
          eyebrow={sections.work.eyebrow}
          heading={sections.work.heading}
        />

        <div className="space-y-8">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} variant="featured" />
            </Reveal>
          ))}
        </div>

        {/* Appears automatically once a project without "featured: true" is added */}
        {others.length > 0 && (
          <div className="mt-14 sm:mt-20">
            <Reveal>
              <h3 className="mb-8 font-display text-2xl text-fg sm:text-3xl">
                {sections.work.moreHeading}
              </h3>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <ProjectCard project={p} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal className="mt-8 flex justify-center sm:mt-12">
          <ExternalLink href={moreOnGithub.href} className={secondaryClass}>
            {moreOnGithub.label}
            <ArrowUpRight />
          </ExternalLink>
        </Reveal>
      </Container>
    </section>
  );
}
