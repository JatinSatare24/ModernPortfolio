"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

// A soft accent glow that trails the mouse. Desktop only, off for reduced motion.
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 110, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 110, damping: 22, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--accent) 9%, transparent), transparent 65%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[1] size-[600px] rounded-full"
    />
  );
}
