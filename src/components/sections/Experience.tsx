import { experience, experienceIntro, sections } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-rule py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-2 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="02"
              eyebrow={sections.experience.eyebrow}
              heading={experienceIntro.heading}
            >
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                {experienceIntro.text}
              </p>
            </SectionHeading>
          </div>

          <ol className="relative space-y-8 border-l border-line-strong pl-7 sm:space-y-10 sm:pl-10">
            {experience.map((job, i) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-[2.45rem] top-2 size-3 rounded-full border-2 sm:-left-[3.05rem] ${
                    i === 0
                      ? "border-accent bg-accent shadow-[0_0_16px_var(--accent)]"
                      : "border-line-strong bg-bg"
                  }`}
                />
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-fg sm:text-[1.9rem]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-lg text-accent">
                    {job.company}
                    {job.location ? (
                      <span className="text-muted"> · {job.location}</span>
                    ) : null}
                  </p>
                  {job.summary && (
                    <p className="mt-3 text-muted">{job.summary}</p>
                  )}
                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-[0.95rem] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.65rem] h-px w-3 shrink-0 bg-accent"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
