"use client";

import Link from "next/link";
import { PROJEKT_WEBSITES } from "@/data/projekt-websites";
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
  Leaf,
  Layout,
  Calendar,
  Monitor,
  Shield,
  Search,
  Heart,
  Zap,
  MapPin,
  ChevronDown,
} from "lucide-react";

const OVERVIEW_CARDS = [
  { label: "Branche", value: "Psychologie / Naturtherapie", icon: Leaf },
  { label: "Leistung", value: "Webdesign, Content, Local SEO", icon: Layout },
  { label: "Timeline", value: "Konzept bis Go-Live", icon: Calendar },
  { label: "Plattform", value: "Web (responsive)", icon: Monitor },
];

const PROCESS_STEPS = [
  {
    title: "Briefing & Positionierung",
    desc: "Angebot und Tonalität geklärt: naturnahe psychologisch-therapeutische Gespräche mit Dipl.-Psych. Grit Schwinger im Raum Jena. Selbstzahler, Kennenlerngespräch kostenfrei.",
  },
  {
    title: "Informationsarchitektur",
    desc: "Deutsche Slugs: Start, Begleitung (Ablauf & Kosten), Über mich, Kontakt, FAQ, Impressum, Datenschutz. Redirects von Alt-URLs.",
  },
  {
    title: "Design & Atmosphäre",
    desc: "Ruhige, naturverbundene Ästhetik: Aurora-Hintergründe, Nature-Bento, Portrait und Naturfotos. Serifenlose Lesbarkeit, klare Hierarchie.",
  },
  {
    title: "Content & Angebot",
    desc: "Seiten zu Begleitung, Preisen, Ablauf und Werdegang. FAQ zu Format, Kosten und Kennenlernen. Keine Heilversprechen – seriöse, klare Sprache.",
  },
  {
    title: "Umsetzung",
    desc: "Next.js App Router, TypeScript, Tailwind, Framer Motion. Content in zentralen Dateien – wartbar ohne CMS-Overhead.",
  },
  {
    title: "SEO & Vertrauen",
    desc: "Metadaten, JSON-LD/Local SEO für Jena, Sitemap, Cookie-Hinweis. Kontakt über Telefon und E-Mail klar sichtbar.",
  },
  {
    title: "Launch",
    desc: "Go-Live unter www.naturverbunden-jena.de, rechtliche Seiten vollständig, mobile geprüft.",
  },
];

const BESONDERES = [
  {
    title: "Vertrauenswürdige Tonalität",
    desc: "Ruhige Farben, Portrait und Naturmotive. Fachliche Klarheit ohne marktschreierische Versprechen – passend zum therapeutischen Kontext.",
    icon: Heart,
  },
  {
    title: "Local SEO Jena",
    desc: "Regionale Ausrichtung, strukturierte Daten und eindeutige Seitenziele für Suchanfragen rund um Jena und Umgebung.",
    icon: MapPin,
  },
  {
    title: "Klare Angebotsstruktur",
    desc: "Begleitung mit Ablauf und Invest/Preisen auf einer Seite. FAQ beantwortet typische Einstiegsfragen vor dem Kontakt.",
    icon: Layout,
  },
  {
    title: "DSGVO & Transparenz",
    desc: "Impressum und Datenschutz, Cookie-Banner wo nötig. Kontaktwege ohne unnötige Datensammlung.",
    icon: Shield,
  },
  {
    title: "Performance & Motion",
    desc: "Leichte Scroll-Animationen, optimierte Bilder, reduzierte Motion bei prefers-reduced-motion.",
    icon: Zap,
  },
  {
    title: "Wartbarer Content",
    desc: "Texte und Navigation in zentralen Content-Dateien – Änderungen ohne komplexes CMS.",
    icon: Search,
  },
];

const UI_SHOWCASE_ITEMS = [
  {
    src: "/images/referenzen/nj_hero.webp",
    title: "Startseite / Hero",
    alt: "Naturverbunden Jena Startseite",
    optimiert: "Markenname, ruhiger Hero und klarer Einstieg in Begleitung und Kennenlernen.",
    sinnvoll: "Erste Sekunden entscheiden über Vertrauen – Angebot und Ort Jena sind sofort lesbar.",
  },
  {
    src: "/images/referenzen/nj_begleitung.png",
    title: "Begleitung / Angebot",
    alt: "Seite Begleitung mit Ablauf und Kosten",
    optimiert: "Ablauf und Invest gebündelt, ohne die Seite zu überladen.",
    sinnvoll: "Interessierte finden Format und Preise, bevor sie Kontakt aufnehmen.",
  },
  {
    src: "/images/referenzen/nj_ueber.png",
    title: "Über mich",
    alt: "Über-mich-Seite mit Portrait und Werdegang",
    optimiert: "Persönliche Vorstellung von Grit Schwinger mit Portrait und Qualifikation.",
    sinnvoll: "Bei therapeutischen Angeboten ist die Person das zentrale Vertrauenssignal.",
  },
  {
    src: "/images/referenzen/nj_kontakt.png",
    title: "Kontakt",
    alt: "Kontaktseite Naturverbunden Jena",
    optimiert: "Direkte Kontaktwege (Telefon/Mail), ruhiges Layout ohne Ablenkung.",
    sinnvoll: "Niedrige Hürde zum Kennenlerngespräch – klar und mobil bedienbar.",
  },
  {
    src: "/images/referenzen/nj_faq.webp",
    title: "FAQ",
    alt: "FAQ-Seite",
    optimiert: "Häufige Fragen zu Ablauf, Kosten und Rahmenbedingungen.",
    sinnvoll: "Reduziert Unsicherheit vor dem Erstkontakt und entlastet die Beratung.",
  },
];

const RESULTS = [
  { label: "Go-Live", value: "Live" },
  { label: "Fokus", value: "Jena lokal" },
  { label: "Inhalt", value: "Klar" },
  { label: "Technik", value: "Next.js" },
];

export function NaturverbundenJenaCaseStudy() {
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
      <article
        ref={articleRef}
        className="min-h-screen bg-gradient-to-b from-[var(--hero-bg-end)] via-[var(--hero-bg-start)] to-[var(--hero-bg-end)] text-[var(--foreground)]"
      >
        <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-28">
          <HeroGeometricBackground className="z-0" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <Link href="/referenzen" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--brand-accent)]">
                ← Alle Referenzen
              </Link>
            </RevealOnScroll>
            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div className="space-y-6" style={{ opacity: heroContentOpacity, scale: heroContentScale }}>
                <RevealOnScroll direction="up" className="space-y-6">
                  <h1 className="font-primary text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    <span className="border-b-2 border-[var(--brand-accent)]">Naturverbunden</span>
                    <br />
                    Jena
                  </h1>
                  <p className="text-lg text-[var(--muted-foreground)]">
                    Naturnahe psychologisch-therapeutische Gespräche – Raum Jena
                  </p>
                  <p className="max-w-xl text-[var(--muted-foreground)]">
                    Ruhige, vertrauenswürdige Website für Dipl.-Psych. Grit Schwinger: Begleitung, Über mich, FAQ und Kontakt – mit Local SEO und klarer Angebotsstruktur.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ShinyLink href="/kontakt" className="rounded-xl px-6 py-3 text-sm">
                      Projekt starten
                    </ShinyLink>
                    <a
                      href={PROJEKT_WEBSITES["naturverbunden-jena"].href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[var(--light-industrial)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                    >
                      Website ansehen
                      <span className="sr-only"> (öffnet in neuem Tab)</span>
                    </a>
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
                    src="/images/referenzen/nj_hero.webp"
                    alt="Naturverbunden Jena Startseite"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 672px"
                    priority
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="relative border-l-4 border-l-[var(--brand-accent)]/50 border-t border-[var(--light-industrial)]/30 bg-[var(--background-alt)]/25 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Projekt</span> Übersicht
              </h2>
            </RevealOnScroll>
            <StaggeredReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" childDelay={0.06}>
              {OVERVIEW_CARDS.map((item) => (
                <StaggeredRevealItem key={item.label} className="flex">
                  <Card variant="glass" className="group w-full border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/10">
                        <item.icon className="h-5 w-5 text-[var(--brand-accent)]" />
                      </div>
                      <CardTitle className="font-primary text-sm font-semibold text-[var(--muted-foreground)]">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-[var(--foreground)]">{item.value}</p>
                    </CardContent>
                  </Card>
                </StaggeredRevealItem>
              ))}
            </StaggeredReveal>
            <RevealOnScroll className="mt-10">
              <p className="max-w-3xl text-[var(--muted-foreground)]">
                <strong className="text-[var(--foreground)]">Rolle:</strong> Konzeption, Design, Content-Struktur, Umsetzung, Local SEO, Launch.
                <br />
                <strong className="text-[var(--foreground)]">Technologien:</strong> Next.js 14, TypeScript, Tailwind CSS 3, Framer Motion, JSON-LD.
                <br />
                <strong className="text-[var(--foreground)]">Live:</strong>{" "}
                <a
                  href={PROJEKT_WEBSITES["naturverbunden-jena"].href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center text-[var(--brand-accent)] underline underline-offset-2"
                >
                  www.naturverbunden-jena.de
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_0%,rgba(163,136,238,0.12)_0%,transparent_55%)]" aria-hidden />
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <RevealOnScroll direction="left" className="space-y-6">
                <h2 className="font-primary text-2xl font-bold md:text-3xl">
                  <span className="border-b-2 border-[var(--brand-accent)]">Ausgangslage</span>
                </h2>
                <p className="text-[var(--muted-foreground)]">
                  Für das Angebot naturnaher Gespräche fehlte eine eigenständige, ruhige Webpräsenz mit klarer Positionierung in Jena.
                </p>
                <ul className="space-y-3 text-[var(--muted-foreground)]">
                  <li className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-2 pl-4">
                    <strong className="text-[var(--foreground)]">Ziele:</strong> Vertrauen aufbauen, Angebot und Preise erklären, Kontakt zum Kennenlerngespräch erleichtern.
                  </li>
                  <li className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-2 pl-4">
                    <strong className="text-[var(--foreground)]">Anforderungen:</strong> Responsive Design, DSGVO, Local SEO, klare FAQs, keine unnötige Technik-Komplexität.
                  </li>
                </ul>
              </RevealOnScroll>
              <RevealOnScroll direction="right" className="flex justify-center">
                <div className="group relative aspect-video w-full max-w-md overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                  <Image
                    src="/images/referenzen/nj_begleitung.png"
                    alt="Begleitungsseite Naturverbunden Jena"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section
          className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Lösung</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
                Eine ruhige Content-Website mit klaren Pfaden: Verstehen → Angebot → Person → Kontakt.
              </p>
            </RevealOnScroll>
            <ul className="mt-8 space-y-2 text-[var(--muted-foreground)]">
              <li>
                <strong className="text-[var(--foreground)]">Start:</strong> Marke und Einstieg in Begleitung.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Begleitung:</strong> Ablauf, Rahmen und Invest/Preise.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Über mich:</strong> Qualifikation und Haltung von Grit Schwinger.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">FAQ & Kontakt:</strong> Offene Fragen klären, Kennenlernen ermöglichen.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Rechtliches:</strong> Impressum und Datenschutz.
              </li>
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
          <AuroraBackground blend={0.22} speed={0.35} className="z-0" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Prozess</span> – Schritt für Schritt
              </h2>
            </RevealOnScroll>
            <StaggeredReveal className="mt-12 space-y-6" childDelay={0.05}>
              {PROCESS_STEPS.map((step, i) => (
                <StaggeredRevealItem key={step.title}>
                  <Card variant="glass" className="border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/40 hover:shadow-glow">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/10 font-primary text-lg font-bold text-[var(--brand-accent)]">
                        {i + 1}
                      </span>
                      <div>
                        <CardTitle className="font-primary text-lg text-[var(--foreground)]">{step.title}</CardTitle>
                        <p className="mt-2 text-sm text-[var(--muted-foreground)]">{step.desc}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </StaggeredRevealItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        <section className="relative border-t border-[var(--light-industrial)]/30 bg-gradient-to-r from-transparent via-[var(--background-alt)]/30 to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
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
                        <CardTitle className="font-primary text-base text-[var(--foreground)]">{item.title}</CardTitle>
                        <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.desc}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </StaggeredRevealItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        <section className="relative border-b border-t border-[var(--light-industrial)]/40 bg-[var(--background)]/70 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Design</span> / UI-Showcase
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
                Screenshots der Live-Website: Start, Begleitung, Über mich, Kontakt und FAQ.
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
                        "overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] transition-all duration-300",
                        isExpanded && "border-[var(--brand-accent)]/50 shadow-glow",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedShowcaseIndex(isExpanded ? null : idx)}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 border-b border-[var(--light-industrial)]/50 bg-white/[0.03] px-4 py-3 text-left transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-medium text-[var(--foreground)]">{item.title}</span>
                        <ChevronDown
                          className={["h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200", isExpanded && "rotate-180"]
                            .filter(Boolean)
                            .join(" ")}
                          aria-hidden
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[var(--light-industrial)]/30 bg-white/[0.02]">
                              <div className="relative aspect-video w-full overflow-hidden">
                                <Image src={item.src} alt={item.alt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 896px" />
                              </div>
                              <div className="space-y-4 px-4 py-4 md:px-6 md:py-5">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)]">Was optimiert</p>
                                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.optimiert}</p>
                                </div>
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)]">Warum sinnvoll</p>
                                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.sinnvoll}</p>
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

        <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
          <div className="absolute inset-0 bg-[var(--background-alt)]/20" aria-hidden />
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Ergebnisse</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
                Live unter{" "}
                <a
                  href={PROJEKT_WEBSITES["naturverbunden-jena"].href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center text-[var(--brand-accent)] underline underline-offset-2"
                >
                  www.naturverbunden-jena.de
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
                : ruhige Markenpräsenz, klare Angebots- und Kontaktwege, Local SEO für Jena.
              </p>
            </RevealOnScroll>
            <StaggeredReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" childDelay={0.06}>
              {RESULTS.map((item) => (
                <StaggeredRevealItem key={item.label} className="flex">
                  <Card variant="glass" className="w-full border-2 border-[var(--light-industrial)] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                    <CardContent className="pb-8 pt-8">
                      <p className="font-primary text-2xl font-bold text-[var(--brand-accent)] md:text-3xl">{item.value}</p>
                      <p className="mt-2 text-[var(--muted-foreground)]">{item.label}</p>
                    </CardContent>
                  </Card>
                </StaggeredRevealItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        <section className="border-t border-[var(--light-industrial)]/30 bg-gradient-to-b from-[var(--background-alt)]/40 to-[var(--hero-bg-end)] py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
            <RevealOnScroll>
              <h2 className="font-primary text-2xl font-bold md:text-3xl">
                Ähnliche Präsenz für Ihre Praxis oder Ihr Angebot?
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Vertrauenswürdige Websites mit klarer Struktur, Local SEO und ruhigem Design – von der Konzeption bis zum Launch.
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
