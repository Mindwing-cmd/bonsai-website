"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export interface TimelineProps {
  data: TimelineEntry[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

/**
 * Timeline – Orientierung an Aceternity TimelineDemo.
 * Sticky Titel (top-40), vertikale Linie mit Scroll-Fortschritt, BonS-AI Design-Tokens.
 */
export function Timeline({ data, title, subtitle }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const updateHeight = () => setHeight(el.getBoundingClientRect().height);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    requestAnimationFrame(updateHeight);
    const t = setTimeout(updateHeight, 100);
    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans bg-[var(--background)] md:px-10"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        {title != null && (
          <h2 className="mb-4 max-w-4xl text-lg text-[var(--foreground)] md:text-4xl">
            {title}
          </h2>
        )}
        {subtitle != null && (
          <p className="max-w-sm text-sm text-[var(--steel-graphite)] md:max-w-2xl md:text-base">
            {subtitle}
          </p>
        )}
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky top-40 z-40 flex min-w-0 max-w-xs flex-col self-start md:w-full md:max-w-sm md:flex-row md:items-center lg:max-w-sm">
              <div className="absolute left-3 h-10 w-10 md:left-3 flex items-center justify-center rounded-full bg-[var(--background)]">
                <div className="h-4 w-4 rounded-full border border-[var(--light-industrial)] bg-[var(--card)] p-2" />
              </div>
              <h3 className="hidden md:block break-words text-xl md:pl-20 md:text-5xl font-bold text-[var(--steel-graphite)] whitespace-pre-line">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block break-words text-2xl mb-4 text-left font-bold text-[var(--steel-graphite)] whitespace-pre-line">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[var(--light-industrial)] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--brand-accent)] via-[var(--brand-accent-soft)]/70 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
