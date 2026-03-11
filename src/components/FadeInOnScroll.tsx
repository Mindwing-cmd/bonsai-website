"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FadeInOnScroll({
  children,
  className = "",
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.5"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
