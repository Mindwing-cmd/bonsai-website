"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = () => setPrefersReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReduced;
}

const containerVariants = (staggerDelay: number, childDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: childDelay,
      delayChildren: staggerDelay,
    },
  },
});

const itemVariants = (reduceMotion: boolean) => ({
  hidden: {
    opacity: 0,
    y: reduceMotion ? 0 : 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduceMotion ? 0.2 : 0.5, ease: "easeOut" },
  },
});

export function StaggeredReveal({
  children,
  className = "",
  staggerDelay = 0,
  childDelay = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants(staggerDelay, childDelay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredRevealItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <motion.div variants={itemVariants(reduceMotion)} className={className}>
      {children}
    </motion.div>
  );
}
