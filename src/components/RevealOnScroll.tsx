"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const OFFSET = 24;

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

export function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const reduceMotion = usePrefersReducedMotion();

  const xMap = { up: 0, left: -OFFSET, right: OFFSET };
  const yMap = { up: OFFSET, left: 0, right: 0 };
  const initialX = reduceMotion ? 0 : xMap[direction];
  const initialY = reduceMotion ? 0 : yMap[direction];
  const initialScale = reduceMotion ? 1 : 0.98;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      transition={{
        duration: reduceMotion ? 0.2 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
