"use client";

import React from "react";
import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { WebdesignProcessSection } from "@/components/WebdesignProcessSection";

type WebdesignData = {
  title: string;
  outcome: string;
  inhalt: string[];
  zeitrahmen: string;
  faq?: { q: string; a: string }[];
};

export function WebdesignPageWithTabs({ data }: { data: WebdesignData }) {
  return (
    <>
      {/* Kompakter Header – nur Back-Link und Titel */}
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

      {/* Nur Ablaufplan – full-bleed mit seitlichem Abstand, nichts abgeschnitten */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 w-screen px-6 md:px-10 lg:px-16">
        <WebdesignProcessSection />
      </div>
    </>
  );
}
