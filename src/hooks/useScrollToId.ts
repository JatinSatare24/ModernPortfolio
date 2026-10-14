"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";

// Smoothly scrolls to a section by its id (works with or without Lenis).
export function useScrollToId() {
  const lenis = useLenis();

  return useCallback(
    (id: string) => {
      const el = id === "top" ? null : document.getElementById(id);
      if (id !== "top" && !el) return;

      if (lenis) {
        if (el) lenis.scrollTo(el, { offset: -72 });
        else lenis.scrollTo(0);
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      history.replaceState(null, "", id === "top" ? "#" : `#${id}`);
    },
    [lenis],
  );
}
