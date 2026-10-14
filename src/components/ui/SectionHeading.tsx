import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  heading,
  children,
}: {
  index: string;
  eyebrow: string;
  heading?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-8 max-w-3xl sm:mb-12 lg:mb-16">
      <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="text-subtle">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        {eyebrow}
      </p>
      {heading && (
        <h2 className="font-display text-balance text-[2rem] leading-[1.15] tracking-[-0.01em] text-fg sm:text-[2.5rem] lg:text-[2.9rem]">
          {heading}
        </h2>
      )}
      {children}
    </Reveal>
  );
}
