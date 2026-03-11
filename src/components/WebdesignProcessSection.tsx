"use client";

import React from "react";
import { ProcessRoadmapSection } from "@/components/ProcessRoadmapSection";
import type { ProcessStep } from "@/components/ProcessRoadmapSection";

const PROCESS_DATA: ProcessStep[] = [
  {
    title: "Analyse & Strategie",
    content: (
      <>
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
    title: "Informationsarchitektur & UX",
    content: (
      <>
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
      <p className="text-sm text-[var(--steel-graphite)] md:text-base">
        Komponentenbasierte Umsetzung, sauberes HTML5, semantische Struktur, modularer CSS-Aufbau (Tailwind/SCSS), State-Management, Animationssystem. Responsives Design (Mobile First, Breakpoints, Fluid Layout). Accessibility: ARIA, Kontrast, Keyboard Navigation, Screenreader-Test.
      </p>
    ),
  },
  {
    title: "Backend & Integrationen",
    content: (
      <p className="text-sm text-[var(--steel-graphite)] md:text-base">
        Je nach Projekt: CMS-Anbindung, APIs, Zahlungsanbieter, Terminbuchung, CRM, Newsletter, Tracking & Analytics.
      </p>
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
      <p className="text-sm text-[var(--steel-graphite)] md:text-base">
        Lighthouse, Performance-Test, Cross-Browser, Mobile Testing, 404-Handling, Formulare testen, Tracking prüfen.
      </p>
    ),
  },
  {
    title: "Deployment",
    content: (
      <p className="text-sm text-[var(--steel-graphite)] md:text-base">
        Produktions-Deployment, Domain-Setup, DNS, Monitoring, Backup-Routine.
      </p>
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
    <ProcessRoadmapSection
      introText="Unser Weg zur digitalen Exzellenz: von der Analyse über Design und Entwicklung bis zu Launch und Skalierung."
      steps={PROCESS_DATA}
      ctaSubtext="Wir entwickeln performante, technisch saubere und strategisch durchdachte digitale Systeme."
    />
  );
}
