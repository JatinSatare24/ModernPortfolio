import Image from "next/image";
import type { Project } from "@content/index";
import SpotlightCard from "@/components/motion/SpotlightCard";
import Tag from "@/components/ui/Tag";
import { ArrowUpRight } from "@/components/ui/Icons";
import { ExternalLink, primaryClass, secondaryClass } from "@/components/ui/Buttons";

// Screenshots are fanned out like phones. Works with 1, 2 or 3 images.
function PhoneStack({ images }: { images: Project["images"] }) {
  const shots = images.slice(0, 3);
  if (shots.length === 0) return null;

  const pose = (i: number, n: number) => {
    if (n === 1) return "";
    const mid = (n - 1) / 2;
    if (i === mid) return "z-10 lg:-translate-y-4";
    return i < mid
      ? "lg:-rotate-3 lg:translate-y-4 group-hover/stack:lg:-rotate-6 group-hover/stack:lg:-translate-x-2"
      : "lg:rotate-3 lg:translate-y-4 group-hover/stack:lg:rotate-6 group-hover/stack:lg:translate-x-2";
  };

  return (
    <div className="group/stack relative mx-auto w-full max-w-[26rem] lg:sticky lg:top-28 lg:max-w-none lg:origin-top lg:scale-110 lg:self-start">
      <div
        aria-hidden
        className="absolute inset-x-8 inset-y-10 -z-10 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        className={`grid items-center gap-2 sm:gap-3 ${
          shots.length === 1
            ? "mx-auto max-w-[14rem] grid-cols-1"
            : shots.length === 2
              ? "grid-cols-2"
              : "grid-cols-3"
        }`}
      >
        {shots.map((img, i) => (
          <div
            key={img.src}
            className={`overflow-hidden rounded-[1.1rem] border border-line-strong shadow-2xl shadow-black/60 transition-transform duration-500 ease-out sm:rounded-[1.4rem] ${pose(i, shots.length)}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={480}
              height={960}
              sizes="(min-width: 1024px) 180px, 30vw"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.links.map((l, i) => (
        <ExternalLink
          key={l.href}
          href={l.href}
          className={i === 0 ? primaryClass : secondaryClass}
        >
          {l.label}
          <ArrowUpRight />
        </ExternalLink>
      ))}
    </div>
  );
}

export default function ProjectCard({
  project,
  variant = "compact",
}: {
  project: Project;
  variant?: "featured" | "compact";
}) {
  if (variant === "featured") {
    const hasImages = project.images.length > 0;
    return (
      <SpotlightCard className="rounded-3xl border border-line bg-surface">
        <article
          className={`grid gap-8 p-5 sm:gap-10 sm:p-10 lg:gap-14 lg:p-12 ${
            hasImages ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
          }`}
        >
          <div className="flex flex-col">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Featured · {project.kind}
            </p>
            <h3 className="font-display text-[2rem] leading-tight tracking-[-0.01em] text-fg sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {project.summary}
            </p>

            <ul className="mt-8 space-y-3.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                  <span
                    aria-hidden
                    className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tech.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Links project={project} />
            </div>
          </div>

          {hasImages && <PhoneStack images={project.images} />}
        </article>
      </SpotlightCard>
    );
  }

  const cover = project.images[0];
  return (
    <SpotlightCard className="h-full rounded-2xl border border-line bg-surface">
      <article className="flex h-full flex-col">
        {cover && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl border-b border-line">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
            {project.kind}
          </p>
          <h3 className="font-display text-2xl text-fg">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tech.slice(0, 6).map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-4 pt-6">
            {project.links.map((l) => (
              <ExternalLink
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 text-sm text-fg transition-colors hover:text-accent"
              >
                {l.label}
                <ArrowUpRight className="size-4" />
              </ExternalLink>
            ))}
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
