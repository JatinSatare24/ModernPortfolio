"use client";

import { useScrollToId } from "@/hooks/useScrollToId";

export default function BackToTop() {
  const scrollTo = useScrollToId();
  return (
    <button
      type="button"
      onClick={() => scrollTo("top")}
      className="text-sm text-muted transition-colors hover:text-accent"
    >
      Back to top ↑
    </button>
  );
}
