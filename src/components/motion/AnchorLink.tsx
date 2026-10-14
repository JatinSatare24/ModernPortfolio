"use client";

import { useScrollToId } from "@/hooks/useScrollToId";

// A link that smoothly scrolls to a section on the page.
export default function AnchorLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  const scrollTo = useScrollToId();
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollTo(to);
      }}
    >
      {children}
    </a>
  );
}
