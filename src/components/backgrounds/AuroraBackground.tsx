/**
 * Hintergrund: Aurora (Bibliothek, angepasst BonS-AI)
 * Deps: framer-motion
 */
"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type AuroraBackgroundProps = {
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
  className?: string;
};

const brandColors: [string, string, string] = [
  "rgba(3, 105, 161, 0.35)",
  "rgba(95, 103, 110, 0.2)",
  "rgba(3, 105, 161, 0.2)",
];

export function AuroraBackground({
  colorStops = brandColors,
  speed = 0.4,
  blend = 1,
  className = "",
}: AuroraBackgroundProps) {
  const [c1, c2, c3] = colorStops;
  const duration = 20 / speed;
  const reduceMotion = usePrefersReducedMotion();

  const animate1 = reduceMotion
    ? undefined
    : {
        x: ["0%", "15%", "-5%", "0%"],
        y: ["0%", "-10%", "5%", "0%"],
        scale: [1, 1.1, 0.95, 1],
      };
  const animate2 = reduceMotion
    ? undefined
    : {
        x: ["0%", "-12%", "8%", "0%"],
        y: ["0%", "8%", "-5%", "0%"],
        scale: [1.05, 0.95, 1.1, 1.05],
      };
  const animate3 = reduceMotion
    ? undefined
    : {
        x: ["-50%", "-45%", "-55%", "-50%"],
        y: ["0%", "5%", "-5%", "0%"],
        scale: [1, 1.15, 0.9, 1],
      };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="absolute -left-1/4 top-0 h-[80%] w-[80%] rounded-full"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${c1}, transparent 70%)`,
          filter: "blur(60px)",
          opacity: blend,
        }}
        animate={animate1}
        transition={animate1 ? { duration, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <motion.div
        className="absolute -right-1/4 top-1/4 h-[70%] w-[70%] rounded-full"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${c2}, transparent 65%)`,
          filter: "blur(50px)",
          opacity: blend * 0.9,
        }}
        animate={animate2}
        transition={animate2 ? { duration: duration * 1.1, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[50%] w-[60%] -translate-x-1/2 rounded-full"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${c3}, transparent 60%)`,
          filter: "blur(55px)",
          opacity: blend * 0.7,
        }}
        animate={animate3}
        transition={animate3 ? { duration: duration * 0.9, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
    </div>
  );
}
