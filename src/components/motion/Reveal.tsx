"use client";

import { m } from "framer-motion";

// Fades and slides content up when it scrolls into view.
// Reduced-motion is handled globally by <MotionConfig reducedMotion="user">
// in MotionProvider (so server and browser always render identical HTML).
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
