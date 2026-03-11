"use client";

import React from "react";
import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { ProcessRoadmapSection } from "@/components/ProcessRoadmapSection";
import type { RoadmapData } from "@/data/leistungen-roadmaps";

type LeistungDetailData = {
  title: string;
  outcome: string;
};

type LeistungDetailWithRoadmapProps = {
  data: LeistungDetailData;
  roadmap: RoadmapData;
};

export function LeistungDetailWithRoadmap({ data, roadmap }: LeistungDetailWithRoadmapProps) {
  return (
    <>
      {/* Kompakter Header – nur Back-Link und Titel (identisch zu WebdesignPageWithTabs) */}
      <div className="mx-auto max-w-6xl px-6 pt-4 md:px-12">
        <FadeInOnScroll>
          <Link href="/" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
            ← Zur Startseite
          </Link>
          <h1 className="mt-4 font-primary text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
            <span className="border-b-2 border-[var(--brand-accent)]">{data.title}</span>
          </h1>
          <p className="mt-3 text-[var(--steel-graphite)] md:text-lg">{data.outcome}</p>
        </FadeInOnScroll>
      </div>

      {/* Roadmap – full-bleed mit seitlichem Abstand (gleicher Wrapper wie Webdesign) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 w-screen px-6 md:px-10 lg:px-16">
        <ProcessRoadmapSection
          introText={roadmap.introText}
          steps={roadmap.steps}
          ctaSubtext={roadmap.ctaSubtext}
        />
      </div>
    </>
  );
}
