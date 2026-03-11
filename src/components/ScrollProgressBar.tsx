"use client";

import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgressBar({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-[var(--brand-accent)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
