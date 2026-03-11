"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion, useInView, useMotionValueEvent } from "framer-motion";

export type ProcessStep = { title: string; content: React.ReactNode };

export type ProcessRoadmapSectionProps = {
  introText: string;
  steps: ProcessStep[];
  ctaSubtext?: string;
};

function StepContent({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );
}

export function ProcessRoadmapSection({ introText, steps, ctaSubtext }: ProcessRoadmapSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [sectionOpacities, setSectionOpacities] = useState<number[]>(() => steps.map(() => 1));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    const opacities = steps.map((_, i) => {
      const el = sectionRefs.current[i];
      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const startFadeAt = -60;
      const fadeRange = 280;
      if (rect.top > startFadeAt) return 1;
      if (rect.top < startFadeAt - fadeRange) return 0;
      return 1 + (rect.top - startFadeAt) / fadeRange;
    });
    setSectionOpacities(opacities);
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.85], [0, 100]);
  const lineHeightPercent = useTransform(lineHeight, (v) => `${v}%`);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl bg-gradient-to-b from-[var(--background)] via-[#152d4a] to-[#243547] py-8 md:py-12"
    >
      {/* Intro – zentriert */}
      <div className="mx-auto max-w-3xl px-6 pb-12 pt-2 text-center md:pb-16 md:px-12">
        <p className="text-[var(--steel-graphite)] md:text-lg">
          {introText}
        </p>
      </div>

      {/* Steps + Linie: Reihenfolge Zahl (von Linie durchstrichen) → Titel → Beschreibung, Linie 2px */}
      <div className="relative mx-auto max-w-5xl overflow-visible px-6 md:px-12" style={{ zIndex: 1 }}>
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-[2.75rem] w-[2px] md:left-[4.25rem]"
          style={{ zIndex: 0 }}
          aria-hidden
        >
          <div className="absolute inset-0 w-[2px] bg-[var(--light-industrial)]/50" />
          <motion.div
            style={{ height: lineHeightPercent }}
            className="absolute left-0 top-0 w-[2px] origin-top bg-gradient-to-b from-[var(--brand-accent)] via-[var(--brand-accent-soft)]/80 to-transparent"
          />
        </div>

        {steps.map((item, index) => (
          <motion.section
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            key={index}
            style={{ opacity: sectionOpacities[index] ?? 1 }}
            className="relative grid min-h-0 grid-cols-1 grid-rows-auto gap-4 pt-16 md:pt-36 md:grid-cols-[2.5rem_1fr_minmax(0,2fr)] md:grid-rows-1 md:gap-6 lg:gap-8"
          >
            <div className="flex items-center gap-4 md:order-1 md:items-start md:justify-center md:gap-0 sticky top-28 z-10 self-start md:top-32">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-accent-soft)] bg-[var(--background)]">
                <span className="text-sm font-bold text-[var(--brand-accent)]">{index + 1}</span>
              </div>
            </div>

            <div className="sticky top-28 z-10 flex flex-col md:order-2 md:top-32 md:items-start md:justify-start self-start">
              <h2 className="font-primary text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl lg:text-3xl">
                {item.title}
              </h2>
            </div>

            <div className="min-w-0 pr-4 md:order-3 md:flex md:items-start md:pl-0 md:pr-8 lg:pr-12">
              <div className="max-w-2xl pb-20 md:pb-24">
                <StepContent>{item.content}</StepContent>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 text-center md:px-12 md:py-16">
        {ctaSubtext && (
          <p className="mb-8 text-center text-sm font-medium text-[var(--steel-graphite)] md:text-base">
            {ctaSubtext}
          </p>
        )}
        <div className={`flex justify-center ${ctaSubtext ? "" : "mt-8"}`}>
          <Link
            href="/kontakt"
            className="rounded-xl bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] transition-colors hover:opacity-95 hover:shadow-md"
          >
            Gespräch vereinbaren
          </Link>
        </div>
      </div>
    </div>
  );
}
