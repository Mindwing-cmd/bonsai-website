"use client";

import dynamic from "next/dynamic";
import { useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShinyLink } from "@/components/ui/shiny-button";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const HeroRobot = dynamic(
  () => import("@/components/HeroRobot").then((mod) => ({ default: mod.HeroRobot })),
  { ssr: false }
);

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouseNorm, setMouseNorm] = useState({ x: 0, y: 0 });
  const reduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouseNorm({
        x: (x - 0.5) * 2,
        y: (y - 0.5) * 2,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setMouseNorm({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen flex-col overflow-hidden pt-20 md:flex-row md:items-center"
      style={{
        background:
          "linear-gradient(135deg, var(--hero-bg-start) 0%, var(--hero-bg-mid) 35%, var(--hero-bg-end) 100%)",
      }}
    >
      {/* Links: Text im goldenen Schnitt (kleinerer Teil) */}
      <motion.div
        style={reduceMotion ? { y: 0, opacity: 1, scale: 1 } : { y, opacity, scale }}
        className="relative z-10 flex w-full flex-col items-center px-6 py-12 text-center md:w-[var(--golden-minor)] md:min-w-0 md:flex-none md:items-start md:py-16 md:pl-12 md:pr-8 md:text-left lg:pl-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
          className="font-primary text-5xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-6xl lg:text-7xl"
        >
          BonS-AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.15 }}
          className="mt-4 font-primary text-xl font-medium text-[var(--steel-graphite)] md:text-2xl lg:text-3xl"
        >
          Webdesign, KI-Systeme, Apps & Paid Ads
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.3 }}
          className="mt-6 max-w-md text-[var(--steel-graphite)]"
        >
          Technologie-getriebenes Digital Studio. KI-Systeme & Automatisierung und präzises Design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.5, delay: reduceMotion ? 0 : 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-5 md:justify-start"
        >
          <ShinyLink
            href="/kontakt"
            className="min-h-[44px] rounded-xl px-6 py-3 text-sm uppercase tracking-wide"
          >
            Projekt starten
          </ShinyLink>
        </motion.div>
      </motion.div>

      {/* Rechts: Roboter im goldenen Schnitt (größerer Teil, 61.8 %) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:left-[var(--golden-minor)] md:w-[var(--golden-major)]"
        aria-hidden
      >
        <HeroRobot mouseNormX={mouseNorm.x} mouseNormY={mouseNorm.y} />
      </div>

      {/* Dezente Hintergrund-Ebenen – mehr Tiefe */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={reduceMotion ? undefined : { y: bgY1 }}
          className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-accent)]/20 blur-3xl"
        />
        <motion.div
          style={reduceMotion ? undefined : { y: bgY2 }}
          className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[var(--brand-accent)]/15 blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--hero-bg-end)]/30 to-transparent" />
      </div>
    </section>
  );
}
