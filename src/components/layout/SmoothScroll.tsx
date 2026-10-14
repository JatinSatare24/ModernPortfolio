"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

// Inertial smooth scrolling. Switched to instant scrolling for people who
// have "reduce motion" turned on in their system settings.
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: reduce ? 1 : 0.1,
        smoothWheel: !reduce,
        anchors: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
