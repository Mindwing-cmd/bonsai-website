"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { AuroraBackground } from "@/components/backgrounds/AuroraBackground";
import { HeroGeometricBackground } from "@/components/ui/shape-landing-hero";
import { ShinyLink } from "@/components/ui/shiny-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Building2,
  Layout,
  Calendar,
  Monitor,
  Shield,
  Search,
  Accessibility,
  Zap,
  MapPin,
  ChevronDown,
} from "lucide-react";

const OVERVIEW_CARDS = [
  { label: "Branche", value: "Medizin / Zahnarztpraxis", icon: Building2 },
  { label: "Leistung", value: "Webdesign, Content-Struktur, Kontaktformular", icon: Layout },
  { label: "Timeline", value: "4–8 Wochen (Konzept bis Go-Live)", icon: Calendar },
  { label: "Plattform", value: "Web (responsive, mobiloptimiert)", icon: Monitor },
];

const PROCESS_STEPS = [
  { title: "Briefing & Konzept", desc: "Anforderungen und Ziele geklärt: zwei Standorte, Leistungskatalog, Kontakt, Vertrauen, regionale Suchbegriffe. Informationsarchitektur und URL-Struktur festgelegt." },
  { title: "Struktur & Inhalte", desc: "Zentrale Konstanten: Standorte, Öffnungszeiten, Navigation, Leistungsliste, Praxisbilder, Team. Einheitliche Benennung von Bildern für einfache Pflege." },
  { title: "Design & Abnahme", desc: "Ruhige, medizinisch vertrauensvolle Gestaltung: klare Typografie, Kontrast, Farbakzent. Hero mit Video oder Bild, Carousel, Leistungs-Panels. Desktop und Mobile abgenommen." },
  { title: "Umsetzung (Technik)", desc: "Next.js 16 mit App Router, TypeScript, Tailwind CSS 4. Seiten für Start, Praxis, Leistungen, Kontakt, Karriere, Impressum, Datenschutz. Komponenten wie HeroWithVideo, PracticeCarousel, ContactForm." },
  { title: "Content & Bilder", desc: "Texte und Bildlisten eingepflegt. Praxis-, Behandlungs- und Teambilder in public/images/. OG-Bild und Favicon. README für spätere Foto-/Video-Erweiterung." },
  { title: "SEO & strukturierte Daten", desc: "Pro Seite Metadaten (Titel, Description, Keywords). JSON-LD: Schema Dentist mit beiden Standorten, LocalBusiness. Sitemap, Canonical-URL. Regionale Suchbegriffe." },
  { title: "Kontaktformular & E-Mail", desc: "Server Action mit Resend: Formulardaten an Praxis-E-Mail. Datenschutz-Hinweis unter dem Formular. Umgebungsvariablen in Vercel." },
  { title: "Launch & Einweisung", desc: "Deployment auf Vercel, Domain und DNS. Sitemap in Search Console eingereicht, Kontaktformular getestet. Kundenseitige Pflege dokumentiert." },
];

const BESONDERES = [
  { title: "Vertrauen und Seriosität", desc: "Ruhige Farben, klare Hierarchie, professionelle Bilder. Werte wie Patientenorientierung, Qualität und Transparenz auf der Über-uns-Seite.", icon: Shield },
  { title: "DSGVO und Datenschutz", desc: "Vollständige Datenschutzerklärung, zentral gepflegt. Kontaktformular mit Hinweis und Link zur Datenschutzerklärung. Keine unnötigen Cookies.", icon: Shield },
  { title: "SEO und regionale Auffindbarkeit", desc: "Pro Seite Titel, Descriptions und Keywords. JSON-LD für Dentist und LocalBusiness. Sitemap und Canonical-URL für saubere Indizierung.", icon: Search },
  { title: "Barrierefreiheit und Usability", desc: "Semantisches HTML, aria-label wo nötig. Kontaktformular mit sichtbaren Labels, Touch-Ziele min. 44px. Klare Kontraste und lesbare Schriftgrößen.", icon: Accessibility },
  { title: "Performance und Wartbarkeit", desc: "Next.js Image-Optimierung, statische Generierung. Zentrale Konstanten und Content-Dateien für einfache Pflege. README für Deployment und Fotos/Videos.", icon: Zap },
  { title: "Zwei Standorte konsistent", desc: "Einheitliche Navigation mit Team Mühldorf und Team Töging, jeweils eigenes Kontaktformular. Öffnungszeiten und Adressen pro Standort klar getrennt.", icon: MapPin },
];

const UI_SHOWCASE_ITEMS = [
  {
    src: "/images/referenzen/zai_hero.png",
    title: "Hero / Startseite",
    alt: "Startseite mit Hero-Bereich, Titel und Standort-Karten (Mühldorf, Töging)",
    optimiert: "Hero mit klarem Slogan („Ihre Gesundheit – unser Anspruch“), zwei direkte Kontakt-CTAs (Mühldorf / Töging), Team-Vorstellung und Qualitätsmerkmale (01–04) in kompakten Karten. Ruhige Typografie, hoher Kontrast.",
    sinnvoll: "Erster Eindruck zählt: Nutzer sehen sofort den Anspruch der Praxis und können den gewünschten Standort wählen. Werte wie Patientenorientierung und Qualität werden ohne Textflut vermittelt – wichtig für Vertrauen und mobile Nutzung.",
  },
  {
    src: "/images/referenzen/zai_hero2.png",
    title: "Hero / Praxis-Eindrücke",
    alt: "Weiterer Hero- oder Praxisbereich",
    optimiert: "Großer Hero mit Luftbild, klare Navigation (Start, Praxis, Leistungen, Kontakt, Karriere), prominenter Titel zu Implantologie, Ästhetik & Orale Chirurgie. Zwei Standortkarten (Mühldorf / Töging) mit Adresse, Telefon und „Mehr erfahren“.",
    sinnvoll: "Beide Standorte gleichwertig sichtbar; Nutzer finden sofort Kontakt und können gezielt vertiefen. Praxis-Eindrücke stärken das Vertrauen vor dem ersten Besuch.",
  },
  {
    src: "/images/referenzen/zai_leistungsuebersicht.png",
    title: "Leistungsübersicht",
    alt: "Übersicht der Leistungen",
    optimiert: "Einleitungssatz zur modernen Zahnmedizin, Leistungen als bildbasierte Kacheln (z. B. Implantologie, Oralchirurgie, Ganzheitliche Zahnerhaltung). Klare Zuordnung, einheitliche Kartenhöhe, Hover für Fokus.",
    sinnvoll: "Übersicht ohne Überladung: Nutzer wählen gezielt eine Leistung zur Vertiefung. Besonders auf Mobilgeräten reduziert die Kachelstruktur Scrollen und verbessert die Orientierung.",
  },
  {
    src: "/images/referenzen/zai_leistung.png",
    title: "Leistungsseite / Behandlungsschwerpunkte",
    alt: "Detailseite einer Leistung (z. B. Implantologie oder Prophylaxe)",
    optimiert: "Überschrift mit Untertitel („Moderne Verfahren und Ihr Wohlbefinden im Fokus“). Zwei Schwerpunkt-Karten mit Text und Bild (z. B. Sicherheit & Komplikationsmanagement, Biologisches Potenzial & Heilungsverlauf). Klare Leseführung, vertrauensvolle Bildsprache.",
    sinnvoll: "Detailtiefe ohne Abschrecken: Interessierte finden fachliche Infos, andere können schnell scannen. Einheitliches Layout über alle Leistungsseiten erleichtert Pflege und wirkt professionell.",
  },
  {
    src: "/images/referenzen/zai_kontakt.png",
    title: "Kontakt",
    alt: "Kontaktformular und Öffnungszeiten beider Standorte",
    optimiert: "Kontaktformular und Öffnungszeiten für beide Standorte klar getrennt. Termin-CTA, Adresse, Telefon, „Mehr erfahren“. Formular mit sichtbaren Labels und Datenschutz-Hinweis.",
    sinnvoll: "Zwei Standorte erfordern klare Zuordnung; Nutzer sollen nicht raten, wo sie sich melden. DSGVO-konformer Hinweis und einfaches Formular erhöhen Absendequote und Rechtssicherheit.",
  },
  {
    src: "/images/referenzen/zai_old.png",
    title: "Vorher",
    alt: "Alte Webpräsenz vor dem Relaunch",
    optimiert: "Vorher-Zustand dokumentiert: veraltete Struktur, weniger klare Hierarchie, kein einheitliches Standort-Konzept. Dient als Referenz für den Relaunch.",
    sinnvoll: "Zeigt den Mehrwert des Projekts: von veraltetem Auftritt zu moderner, vertrauenswürdiger Praxis-Website mit klarer UX und zwei Standorten.",
  },
];

const RESULTS = [
  { label: "Go-Live", value: "Live" },
  { label: "Technik", value: "Schnell" },
  { label: "SEO", value: "Optimiert" },
  { label: "Wartbarkeit", value: "Zentral" },
];

export function ZahnaerzteAmInnCaseStudy() {
  const articleRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [expandedShowcaseIndex, setExpandedShowcaseIndex] = useState<number | null>(0);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroImageRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScrollProgress, [0, 0.6], [0, 48]);
  const heroContentOpacity = useTransform(heroScrollProgress, [0, 0.3], [1, 0.85]);
  const heroContentScale = useTransform(heroScrollProgress, [0, 0.3], [1, 0.99]);

  return (
    <>
      <ScrollProgressBar containerRef={articleRef} />
    <article ref={articleRef} className="min-h-screen text-[var(--foreground)] bg-gradient-to-b from-[var(--hero-bg-end)] via-[var(--hero-bg-start)] to-[var(--hero-bg-end)]">
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-28 md:pb-28">
        <HeroGeometricBackground className="z-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <Link
              href="/referenzen"
              className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]"
            >
              ← Alle Referenzen
            </Link>
          </RevealOnScroll>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div className="space-y-6" style={{ opacity: heroContentOpacity, scale: heroContentScale }}>
              <RevealOnScroll direction="up" className="space-y-6">
                <h1 className="font-primary text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  <span className="border-b-2 border-[var(--brand-accent)]">Zahnärzte am Inn</span>
                  <br />
                  Petri & Kollegen
                </h1>
                <p className="text-lg text-[var(--steel-graphite)]">
                  Kompetenz und Vertrauen – Implantologie · Ästhetische Zahnmedizin · Orale Chirurgie · Prophylaxe
                </p>
                <p className="max-w-xl text-[var(--steel-graphite)]">
                  Moderne Praxis-Website für zwei Standorte (Mühldorf und Töging am Inn). Fokus auf Vertrauen, klare Information zu Leistungen und Terminkontakt. Responsiv, suchmaschinenoptimiert und DSGVO-konform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <ShinyLink href="/kontakt" className="rounded-xl px-6 py-3 text-sm">
                    Projekt starten
                  </ShinyLink>
                  <Link
                    href="/referenzen"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--steel-graphite)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                  >
                    Alle Referenzen
                  </Link>
                </div>
              </RevealOnScroll>
            </motion.div>
            <RevealOnScroll direction="up" delay={0.1} className="relative flex justify-center">
              <motion.div
                ref={heroImageRef}
                style={{ y: heroImageY }}
                className="group relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow"
              >
                <Image
                  src="/images/referenzen/zai_hero.png"
                  alt="Zahnärzte am Inn – Startseite mit Hero-Bereich, Titel und zwei Standort-Karten (Mühldorf / Töging)"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 672px"
                  priority
                />
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section 2 — Projektübersicht: Akzent linker Rand + leicht getönt */}
      <section className="relative border-t border-[var(--light-industrial)]/30 border-l-4 border-l-[var(--brand-accent)]/50 bg-[var(--background-alt)]/25 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Projekt</span> Übersicht
            </h2>
          </RevealOnScroll>
          <StaggeredReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" childDelay={0.06}>
            {OVERVIEW_CARDS.map((item) => (
              <StaggeredRevealItem key={item.label} className="flex">
                <Card variant="glass" className="group w-full border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/10 transition-colors group-hover:bg-[var(--brand-accent)]/20">
                      <item.icon className="h-5 w-5 text-[var(--brand-accent)]" />
                    </div>
                    <CardTitle className="font-primary text-sm font-semibold text-[var(--steel-graphite)]">
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-[var(--foreground)]">{item.value}</p>
                  </CardContent>
                </Card>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
          <RevealOnScroll className="mt-10">
            <p className="max-w-3xl text-[var(--steel-graphite)]">
              <strong className="text-[var(--foreground)]">Rolle:</strong> Konzeption, Design, Umsetzung (Next.js/React), SEO, Hosting/Vercel-Setup.
              <br />
              <strong className="text-[var(--foreground)]">Technologien:</strong> Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, Resend (Kontaktformular), Leaflet/Mapbox (Standortkarten), strukturierte Daten (JSON-LD).
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3 — Problem: Verlauf oben rechts */}
      <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_0%,rgba(3,105,161,0.08)_0%,transparent_55%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <RevealOnScroll direction="left" className="space-y-6">
              <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Ausgangslage</span> / Problem
              </h2>
              <p className="text-[var(--steel-graphite)]">
                Die Praxis benötigte eine moderne, vertrauenswürdige Webpräsenz für zwei Standorte (Mühldorf am Inn, Töging am Inn).
              </p>
              <ul className="space-y-3 text-[var(--steel-graphite)]">
                <li className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-2 pl-4">
                  <strong className="text-[var(--foreground)]">Ziele:</strong> Klare Darstellung der Leistungen (Implantologie, Ästhetik, Orale Chirurgie, Prophylaxe usw.), einfacher Kontakt/Terminanfrage, gute Auffindbarkeit in der Region (z. B. „Zahnarzt Mühldorf am Inn“, „Zahnarzt Töging“).
                </li>
                <li className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-2 pl-4">
                  <strong className="text-[var(--foreground)]">Anforderungen:</strong> Responsives Design, semantisches HTML, SEO-Metadaten pro Seite, DSGVO-konforme Datenschutzerklärung und Kontaktformular, optional Karten und Öffnungszeiten pro Standort.
                </li>
              </ul>
            </RevealOnScroll>
            <RevealOnScroll direction="right" className="flex justify-center">
              <div className="group relative aspect-video w-full max-w-md overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                <Image
                  src="/images/referenzen/zai_old.png"
                  alt="Vorher: Alte Webpräsenz oder Ausgangslage"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section 4 — Lösung: dezentes Raster */}
      <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Lösung</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Eine einheitliche Praxis-Website mit App Router, zentraler Inhaltssteuerung und klarer Informationsarchitektur.
            </p>
          </RevealOnScroll>
          <ul className="mt-8 space-y-2 text-[var(--steel-graphite)]">
            <li><strong className="text-[var(--foreground)]">Startseite:</strong> Hero mit Video oder Bild, Praxis-Eindrücke (Carousel), Kontaktformular + Öffnungszeiten, Leistungs-Panels mit Hover-Ausklapp.</li>
            <li><strong className="text-[var(--foreground)]">Praxis:</strong> Über uns, Werte (Patientenorientierung, Qualität, Vertrauen, Einfühlungsvermögen), Team-Seiten pro Standort.</li>
            <li><strong className="text-[var(--foreground)]">Leistungen:</strong> Dynamische Unterseiten (Implantologie, Prothetik, Schienentherapie, Prophylaxe usw.) mit einheitlichem Layout, optional FAQ.</li>
            <li><strong className="text-[var(--foreground)]">Kontakt:</strong> Zwei Kontaktformulare (Mühldorf / Töging), Versand per Resend an die Praxis-E-Mail.</li>
            <li><strong className="text-[var(--foreground)]">Rechtliches:</strong> Impressum, Datenschutz (HTML-Inhalt zentral gepflegt).</li>
            <li><strong className="text-[var(--foreground)]">Karriere:</strong> Stellenangebote / Bewerbungshinweise.</li>
          </ul>
          <RevealOnScroll className="mt-6">
            <p className="text-sm text-[var(--steel-graphite)]">
              Technisch: Next.js 16 (App Router), TypeScript, Tailwind 4, Framer Motion, Resend, Leaflet/Mapbox, JSON-LD für Dentist/LocalBusiness (SEO).
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 5 — Prozess: Aurora-Hintergrund (Bibliothek) */}
      <section className="relative overflow-hidden border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
        <AuroraBackground blend={0.22} speed={0.35} className="z-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Prozess</span> – Schritt für Schritt
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Wie die Webseite erstellt wurde: von Briefing bis Launch.
            </p>
          </RevealOnScroll>
          <StaggeredReveal className="mt-12 space-y-6" childDelay={0.05}>
            {PROCESS_STEPS.map((step, i) => (
              <StaggeredRevealItem key={i}>
                <Card variant="glass" className="border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/40 hover:shadow-glow">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/10 font-primary text-lg font-bold text-[var(--brand-accent)]">
                      {i + 1}
                    </span>
                    <div>
                      <CardTitle className="font-primary text-lg text-[var(--foreground)]">
                        {step.title}
                      </CardTitle>
                      <p className="mt-2 text-sm text-[var(--steel-graphite)]">{step.desc}</p>
                    </div>
                  </CardHeader>
                </Card>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Section 6 — Worauf besonders geachtet: mittiger Streifen */}
      <section className="relative border-t border-[var(--light-industrial)]/30 bg-gradient-to-r from-transparent via-[var(--background-alt)]/30 to-transparent py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Worauf besonders</span> geachtet wurde
            </h2>
          </RevealOnScroll>
          <StaggeredReveal className="mt-12 grid gap-6 sm:grid-cols-2" childDelay={0.05}>
            {BESONDERES.map((item) => (
              <StaggeredRevealItem key={item.title} className="flex">
                <Card variant="glass" className="w-full border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/10">
                      <item.icon className="h-5 w-5 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <CardTitle className="font-primary text-base text-[var(--foreground)]">
                        {item.title}
                      </CardTitle>
                      <p className="mt-2 text-sm text-[var(--steel-graphite)]">{item.desc}</p>
                    </div>
                  </CardHeader>
                </Card>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Section 7 — Design / UI-Showcase: dunklere Band, rundes Design, 2 Spalten, Hover-Dropdown */}
      <section className="relative border-t border-b border-[var(--light-industrial)]/40 bg-[var(--background)]/70 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Design</span> / UI-Showcase
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Screenshots der umgesetzten Website: Hero, Leistungsübersicht, Kontakt und Vorher-Vergleich. Karten beim Darüberfahren für Optimierungen und Begründung ausklappen.
            </p>
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {UI_SHOWCASE_ITEMS.map((item, idx) => {
              const isExpanded = expandedShowcaseIndex === idx;
              return (
                <RevealOnScroll key={item.title} delay={idx * 0.04}>
                  <div
                    onMouseEnter={() => setExpandedShowcaseIndex(idx)}
                    onMouseLeave={() => setExpandedShowcaseIndex(null)}
                    className={[
                      "overflow-hidden border-2 border-[var(--light-industrial)] transition-all duration-300 rounded-xl",
                      isExpanded && "border-[var(--brand-accent)]/50 shadow-glow",
                    ].filter(Boolean).join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedShowcaseIndex(isExpanded ? null : idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 border-b border-[var(--light-industrial)]/50 bg-white/[0.03] px-4 py-3 text-left transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                      aria-expanded={isExpanded}
                      aria-controls={`showcase-content-${idx}`}
                      id={`showcase-trigger-${idx}`}
                    >
                      <span className="font-medium text-[var(--foreground)]">{item.title}</span>
                      <ChevronDown
                        className={[
                          "h-5 w-5 shrink-0 text-[var(--steel-graphite)] transition-transform duration-200",
                          isExpanded && "rotate-180",
                        ].filter(Boolean).join(" ")}
                        aria-hidden
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`showcase-content-${idx}`}
                          role="region"
                          aria-labelledby={`showcase-trigger-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[var(--light-industrial)]/30 bg-white/[0.02]">
                            <div className="relative aspect-video w-full max-w-3xl overflow-hidden">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 896px"
                              />
                            </div>
                            <div className="space-y-4 px-4 py-4 md:px-6 md:py-5">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)]">Was optimiert</p>
                                <p className="mt-1 text-sm text-[var(--steel-graphite)]">{item.optimiert}</p>
                              </div>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)]">Warum sinnvoll</p>
                                <p className="mt-1 text-sm text-[var(--steel-graphite)]">{item.sinnvoll}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8 — Ergebnisse: leicht getönt + unterer Verlauf */}
      <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-[var(--background-alt)]/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--hero-bg-end)]/30 to-transparent" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Ergebnisse</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Go-Live unter Produktionsdomain, zwei Standorte und alle geplanten Seiten umgesetzt. Schnelle Ladezeiten, Kontaktformular per Resend. Pro Seite SEO-Metadaten und strukturierte Daten. Zentrale Pflege über Konstanten und README.
            </p>
          </RevealOnScroll>
          <StaggeredReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" childDelay={0.06}>
            {RESULTS.map((item) => (
              <StaggeredRevealItem key={item.label} className="flex">
                <Card variant="glass" className="w-full border-2 border-[var(--light-industrial)] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                  <CardContent className="pt-8 pb-8">
                    <p className="font-primary text-2xl font-bold text-[var(--brand-accent)] md:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[var(--steel-graphite)]">{item.label}</p>
                  </CardContent>
                </Card>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Section 9 — CTA */}
      <section className="border-t border-[var(--light-industrial)]/30 bg-gradient-to-b from-[var(--background-alt)]/40 to-[var(--hero-bg-end)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              Ähnliches Projekt für Ihre Praxis oder Ihr Unternehmen?
            </h2>
            <p className="mt-4 text-[var(--steel-graphite)]">
              Moderne, vertrauenswürdige Webseiten mit klarer Struktur, Kontaktformular und SEO – von der Konzeption bis zum Launch. Wir setzen auf bewährte Technik und überschaubare Pflege.
            </p>
            <div className="mt-10">
              <ShinyLink href="/kontakt" className="rounded-xl px-8 py-4 text-base">
                Projekt starten
              </ShinyLink>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </article>
    </>
  );
}
