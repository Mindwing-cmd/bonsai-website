"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineEntry } from "@/components/ui/timeline";

const STEP_IMAGES: (string[] | null)[] = [
  ["/images/webdesignprozess/step1.png", "/images/webdesignprozess/step1_2.png"],
  ["/images/webdesignprozess/step2.webp", "/images/webdesignprozess/step2_2.avif"],
  ["/images/webdesignprozess/step3_1.png", "/images/webdesignprozess/step3_2.png"],
  ["/images/webdesignprozess/step4.webp", "/images/webdesignprozess/step4_1.webp"],
  ["/images/webdesignprozess/step5_1.webp", "/images/webdesignprozess/step5_2.webp"],
  ["/images/webdesignprozess/step6.jpg", "/images/webdesignprozess/step6_1.jpg"],
  null,
  ["/images/webdesignprozess/step8.png", "/images/webdesignprozess/step8_1.jpg"],
  ["/images/webdesignprozess/step9.png", "/images/webdesignprozess/step9_1.png"],
  null,
];

function StepImages({ srcs, stepLabel }: { srcs: string[]; stepLabel?: string }) {
  const alt = stepLabel ? `Webdesignprozess: ${stepLabel}` : "";
  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {srcs.map((src, i) => (
        <div key={src} className="relative aspect-video w-full overflow-hidden border-2 border-[var(--light-industrial)]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}

const PROCESS_DATA: TimelineEntry[] = [
  {
    title: "Analyse & Strategie",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[0]!} stepLabel="Analyse & Strategie" />
        <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
          Technisch: Business-Ziel (Leads, Buchungen, Verkäufe), KPI-Definition (Conversion Rate, CTR, Core Web Vitals), Tracking-Anforderungen (GA4, Server-Side Tracking). Design: Markenidentität, Tonalität, Wettbewerbsanalyse, Differenzierungsstrategie.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Projektbrief, Technische Architektur-Skizze, Content-Strategie, Struktur-Blueprint.
        </p>
      </>
    ),
  },
  {
    title: "Architektur & UX",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[1]!} stepLabel="Informationsarchitektur & UX" />
        <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
          Technisch: Sitemap, URL-Struktur (SEO-optimiert), Routing-Logik, Content-Hierarchie. Design: User-Flows, Navigationsstruktur, Conversion-Pfade, Wireframes (Low Fidelity).
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Navigationskonzept, Wireframe-System, CTA-Strategie.
        </p>
      </>
    ),
  },
  {
    title: "Designsystem & UI",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[2]!} stepLabel="Designsystem & UI" />
        <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
          Technisch: Design Tokens (Farben, Spacing, Typografie), Responsives Grid, Komponentenstruktur, Accessibility (WCAG). Design: Farbpalette, Typografiesystem, Button-States, Karten- und Section-System, Motion-Prinzipien.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: High-Fidelity Mockups, UI-Kit, Komponentenbibliothek.
        </p>
      </>
    ),
  },
  {
    title: "Technische Architektur",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[3]!} stepLabel="Technische Architektur" />
        <p className="mb-2 text-sm text-[var(--steel-graphite)] md:text-base">
          Stack (z. B. Frontend: Next.js/React, CMS: Headless/WordPress, Hosting: Vercel, CDN, ggf. Supabase). Performance: Image Optimization (WebP/AVIF), Lazy Loading, Code Splitting, Critical CSS, SSR/SSG. Sicherheit: HTTPS/SSL, CSP Header, Backup, Bot-Protection.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Architektur-Dokumentation, Dev/Staging/Prod-Setup.
        </p>
      </>
    ),
  },
  {
    title: "Frontend-Entwicklung",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[4]!} stepLabel="Frontend-Entwicklung" />
        <p className="text-sm text-[var(--steel-graphite)] md:text-base">
          Komponentenbasierte Umsetzung, sauberes HTML5, semantische Struktur, modularer CSS-Aufbau (Tailwind/SCSS), State-Management, Animationssystem. Responsives Design (Mobile First, Breakpoints, Fluid Layout). Accessibility: ARIA, Kontrast, Keyboard Navigation, Screenreader-Test.
        </p>
      </>
    ),
  },
  {
    title: "Backend & Integrationen",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[5]!} stepLabel="Backend & Integrationen" />
        <p className="text-sm text-[var(--steel-graphite)] md:text-base">
          Je nach Projekt: CMS-Anbindung, APIs, Zahlungsanbieter, Terminbuchung, CRM, Newsletter, Tracking & Analytics.
        </p>
      </>
    ),
  },
  {
    title: "SEO & Struktur-Optimierung",
    content: (
      <p className="text-sm text-[var(--steel-graphite)] md:text-base">
        Technisch: Meta-Tags, Open Graph, Structured Data (Schema.org), Core Web Vitals, Sitemap.xml, Robots.txt. Inhaltlich: Keyword-Architektur, interne Verlinkung, Content-Hierarchie, Conversion-Texte.
      </p>
    ),
  },
  {
    title: "Testing & QS",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[7]!} stepLabel="Testing & QS" />
        <p className="text-sm text-[var(--steel-graphite)] md:text-base">
          Lighthouse, Performance-Test, Cross-Browser, Mobile Testing, 404-Handling, Formulare testen, Tracking prüfen.
        </p>
      </>
    ),
  },
  {
    title: "Deployment",
    content: (
      <>
        <StepImages srcs={STEP_IMAGES[8]!} stepLabel="Deployment" />
        <p className="text-sm text-[var(--steel-graphite)] md:text-base">
          Produktions-Deployment, Domain-Setup, DNS, Monitoring, Backup-Routine.
        </p>
      </>
    ),
  },
  {
    title: "Wartung & Skalierung",
    content: (
      <p className="text-sm text-[var(--steel-graphite)] md:text-base">
        Sicherheitsupdates, Content-Erweiterung, Performance-Monitoring, A/B Testing, Conversion-Optimierung, Feature-Erweiterungen.
      </p>
    ),
  },
];

export function WebdesignProcessSection() {
  return (
    <>
      <Timeline
        data={PROCESS_DATA}
        subtitle="Unser Weg zur digitalen Exzellenz: von der Analyse über Design und Entwicklung bis zu Launch und Skalierung."
      />
      <div className="mx-auto max-w-3xl px-6 pb-16 text-center md:px-12">
        <p className="mb-8 text-center text-sm font-medium text-[var(--steel-graphite)] md:text-base">
          Wir entwickeln performante, technisch saubere und strategisch durchdachte digitale Systeme.
        </p>
        <Link
          href="/kontakt"
          className="inline-block rounded-xl bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] transition-colors hover:opacity-95 hover:shadow-md"
        >
          Gespräch vereinbaren
        </Link>
      </div>
    </>
  );
}
