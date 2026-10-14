"use client";

import { LazyMotion, MotionConfig } from "framer-motion";

const loadFeatures = () => import("./features").then((mod) => mod.default);

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
