import { certifications, education, sections } from "@content/index";
import type { Credential } from "@content/index";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

function Item({ c }: { c: Credential }) {
  const meta = [c.issuer, c.detail, c.year].filter(Boolean).join(" · ");
  const inner = (
    <>
      <span className="flex items-start justify-between gap-3">
        <span className="text-[0.95rem] text-fg">{c.title}</span>
        {c.href && (
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-subtle transition-colors group-hover:text-accent" />
        )}
      </span>
      <span className="mt-1 block text-sm text-muted">{meta}</span>
    </>
  );

  return c.href ? (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg p-4 transition-colors hover:bg-surface-2"
      aria-label={`${c.title}, ${meta} (opens certificate)`}
    >
      {inner}
    </a>
  ) : (
    <div className="p-4">{inner}</div>
  );
}

function Row({ label, items }: { label: string; items: Credential[] }) {
  return (
    <div className="grid gap-2 py-6 lg:grid-cols-[11rem_1fr] lg:items-start">
      <h3 className="px-4 pt-4 font-mono text-xs uppercase tracking-[0.18em] text-accent lg:px-0">
        {label}
      </h3>
      <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <li key={c.title}>
            <Item c={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Credentials() {
  return (
    <section id="education" className="section-rule py-14 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="text-subtle">04</span>
            <span className="h-px w-8 bg-line-strong" />
            {sections.education.eyebrow}
          </p>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface/50 px-2 sm:px-6">
            <Row label="Education" items={education} />
            <Row label="Certifications" items={certifications} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
