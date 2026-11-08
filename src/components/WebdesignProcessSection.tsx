"use client";

import React from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineEntry } from "@/components/ui/timeline";

const PROCESS_DATA: TimelineEntry[] = [
  {
    title: "Analyse & Strategie",
    content: (
      <>
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
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
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
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
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
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
        <p className="mb-2 text-sm text-[var(--muted-foreground)] md:text-base">
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
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
          Technisch: komponentenbasierte Umsetzung (React/Next.js), semantisches HTML5, modulares Styling (Tailwind), State- und Animationssystem, Code Splitting und Lazy Loading. Design: Mobile First, Fluid Layouts, konsistente Breakpoints, Micro-Interactions gemäß Designsystem. Accessibility: ARIA, Kontrast, Tastaturbedienung, Screenreader-Checks.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Produktivfähiges Frontend, wiederverwendbare Komponenten, responsive und barrierearme UI.
        </p>
      </>
    ),
  },
  {
    title: "Backend & Integrationen",
    content: (
      <>
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
          Technisch: CMS- oder Headless-Anbindung, serverseitige APIs und Validierung, Formular- und E-Mail-Flows, Authentifizierung wo nötig. Integrationen: Zahlungsanbieter, Terminbuchung, CRM, Newsletter, Analytics und Tracking – abgestimmt auf Datenschutz und DSGVO. Design der Datenflüsse: klare Schnittstellen, Fehlerbehandlung und Logging.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Stabile Backend-Anbindung, dokumentierte Integrationen, getestete End-to-End-Prozesse.
        </p>
      </>
    ),
  },
  {
    title: "SEO & Struktur-Optimierung",
    content: (
      <>
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
          Technisch: Meta-Tags, Canonicals, Open Graph, Structured Data (Schema.org), Sitemap.xml, Robots.txt, Core Web Vitals und saubere URL-Struktur. Inhaltlich: Keyword-Architektur, Überschriften-Hierarchie, interne Verlinkung, Conversion-Texte und Alt-Texte. Ziel: Auffindbarkeit und klare Leseführung für Nutzer und Suchmaschinen.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: SEO-Grundsetup, strukturierte Inhaltsarchitektur, messbare technische Basis.
        </p>
      </>
    ),
  },
  {
    title: "Testing & QS",
    content: (
      <>
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
          Technisch: Lighthouse und Performance-Checks, Cross-Browser- und Device-Tests, Formular- und Tracking-Validierung, 404- und Redirect-Handling, Security-Header-Review. Inhaltlich: Konsistenz von Copy, CTAs und Komponenten gegen das Designsystem. Fehler werden vor dem Launch priorisiert und behoben.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Freigabefähige Qualität, dokumentierte Testergebnisse, klare Go-Live-Checkliste.
        </p>
      </>
    ),
  },
  {
    title: "Deployment",
    content: (
      <>
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
          Technisch: Produktions-Deployment (z. B. Vercel), Domain- und DNS-Setup, SSL, Environment-Variablen, Preview- und Staging-Workflows. Betrieb: Monitoring, Error-Tracking, Backup-Routine und Rollback-Pfad. Ziel: ein reproduzierbarer, sicherer Launch ohne Überraschungen.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Live-System, konfigurierte Domains, Monitoring und dokumentierter Release-Prozess.
        </p>
      </>
    ),
  },
  {
    title: "Wartung & Skalierung",
    content: (
      <>
        <p className="mb-4 text-sm text-[var(--muted-foreground)] md:text-base">
          Technisch: Sicherheits- und Dependency-Updates, Performance-Monitoring, Content- und Feature-Erweiterungen, A/B-Tests und Conversion-Optimierung. Strategisch: Auswertung der KPIs aus der Analysephase, iterative Verbesserungen und Skalierung neuer Module – ohne die bestehende Architektur zu destabilisieren.
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
          Ergebnis: Continuously improved System, klare Wartungsroutine, planbare Weiterentwicklung.
        </p>
      </>
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
        <p className="mb-8 text-center text-sm font-medium text-[var(--muted-foreground)] md:text-base">
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
