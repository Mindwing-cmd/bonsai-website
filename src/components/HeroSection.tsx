"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShinyLink } from "@/components/ui/shiny-button";
import { VioletAuroraBackground } from "@/components/ui/violet-aurora-gradient-hero-background";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const HeroRobot = dynamic(
  () => import("@/components/HeroRobot").then((mod) => ({ default: mod.HeroRobot })),
  { ssr: false }
);

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Ein Hintergrund für die gesamte Hero-Fläche */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <VioletAuroraBackground className="h-full w-full" />
      </div>

      {/* Roboter: pointer-events aktiv, damit Spline auf Maus reagiert */}
      <div className="absolute inset-0 z-10 md:left-[24%]">
        <HeroRobot />
      </div>

      {/* Text-Overlay */}
      <motion.div
        style={reduceMotion ? { y: 0, opacity: 1, scale: 1 } : { y, opacity, scale }}
        className="relative z-20 flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col justify-center px-6 py-16 text-center md:w-[42%] md:max-w-none md:items-start md:px-12 md:pl-12 md:text-left lg:pl-20 xl:pl-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
          className="font-primary text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(11,8,18,0.55)] md:text-6xl lg:text-7xl"
        >
          <span>BonS-</span>
          <span className="text-brand-ai">AI</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.12 }}
          className="mt-5 brand-divider max-w-sm justify-center md:justify-start"
        >
          <span className="shrink-0 font-secondary text-[11px] font-medium uppercase tracking-[0.28em] text-white/90">
            Webdesign und digitale Innovation
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.28 }}
          className="mt-6 max-w-md text-[var(--muted-foreground)] drop-shadow-[0_1px_12px_rgba(11,8,18,0.45)]"
        >
          BonS-AI ist das Digital Studio von Bastian Schwinger in Stadtilm, Thüringen. Wir gestalten Websites, KI-Systeme, Apps und Paid Ads – präzise, technisch und messbar.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.5, delay: reduceMotion ? 0 : 0.42 }}
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

      {/* Glows ohne pointer-events, damit Maus den Roboter erreicht */}
      <div className="pointer-events-none absolute inset-0 z-[15] overflow-hidden">
        <motion.div
          style={reduceMotion ? undefined : { y: bgY1 }}
          className="absolute -bottom-32 -left-24 h-[24rem] w-[24rem] rounded-full bg-[var(--brand-accent)]/15 blur-3xl"
        />
        <motion.div
          style={reduceMotion ? undefined : { y: bgY2 }}
          className="absolute right-[10%] top-1/3 h-80 w-80 rounded-full bg-[var(--brand-dark)]/10 blur-3xl"
        />
      </div>
    </section>
  );
}
