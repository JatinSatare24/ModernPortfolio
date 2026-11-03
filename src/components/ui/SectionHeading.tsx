import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">
      <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-accent">
        <span aria-hidden className="h-px w-8 bg-accent/50" />
        {eyebrow}
      </p>
      {heading && (
        <h2 className="font-display text-balance text-[1.75rem] leading-[1.2] text-fg sm:text-[2.25rem] lg:text-[2.5rem]">
          {heading}
        </h2>
      )}
      {children}
    </Reveal>
  );
}
