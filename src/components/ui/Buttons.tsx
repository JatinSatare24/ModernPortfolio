import type { ReactNode } from "react";

const common =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

export const primaryClass = `${common} bg-accent text-white shadow-sm hover:shadow-[0_10px_24px_-10px_var(--accent)] hover:-translate-y-0.5`;
export const secondaryClass = `${common} border border-line-strong bg-surface text-fg hover:border-accent/60 hover:text-accent hover:-translate-y-0.5`;

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
