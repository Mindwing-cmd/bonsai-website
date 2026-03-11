"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { AuroraBackground } from "@/components/backgrounds/AuroraBackground";
import { HeroGeometricBackground } from "@/components/ui/shape-landing-hero";
import { ShinyLink } from "@/components/ui/shiny-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Users,
  Trophy,
  Sparkles,
  Calendar,
  Smartphone,
  Target,
  Zap,
} from "lucide-react";

const OVERVIEW_CARDS = [
  { label: "Industry", value: "Fitness / Health Tech", icon: Target },
  { label: "Services", value: "UX Design, App Development, Product Strategy", icon: Zap },
  { label: "Timeline", value: "3–6 Monate", icon: Calendar },
  { label: "Platform", value: "Web / iOS / Android", icon: Smartphone },
];

const PROBLEM_ROWS = [
  { problem: "Tracking ohne soziale Kontrolle", konsequenz: "Motivation sinkt nach wenigen Wochen" },
  { problem: "Fehlende Zielmechaniken", konsequenz: "Inkonsistente Nutzung" },
  { problem: "Keine Verhaltensanalyse", konsequenz: "Daten bleiben ungenutzt" },
];

const SOLUTION_ITEMS = [
  {
    title: "Structured Tracking",
    desc: "Daily-Tracking für Kalorien, Protein, Wasser, Training, Cardio, Schritte – Eintrag unter 30 Sekunden.",
    icon: BarChart3,
  },
  {
    title: "Gamification",
    desc: "Badges, Tiers (Base ~80%, Advanced ~20%, Elite ~1%), Fortschritt & Wettbewerb.",
    icon: Trophy,
  },
  {
    title: "Social Accountability",
    desc: "Gruppen, Clans, Ranglisten, gemeinsame Challenges – kontinuierlicher sozialer Druck positiver Art.",
    icon: Users,
  },
  {
    title: "AI Advisor",
    desc: "Meal Planning, Trainingsanalyse, Kalorienbilanz – konkrete Handlungsempfehlungen & Zieloptimierung.",
    icon: Sparkles,
  },
];

const RESULTS = [
  { label: "User Retention", value: "+45%" },
  { label: "Tracking Consistency", value: "+60%" },
  { label: "Goal Completion", value: "+30%" },
];

const BADGES = [
  { badge: "Consistency", voraussetzung: "30 Tage Tracking" },
  { badge: "Cardio Machine", voraussetzung: "20 Cardio Sessions" },
  { badge: "Hydration Master", voraussetzung: "14 Tage Wasserziel" },
];

export function PushCaseStudy() {
  const articleRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
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
                  <span className="border-b-2 border-[var(--brand-accent)]">Push</span>
                  <br />
                  Designing a Fitness Accountability Platform
                </h1>
                <p className="max-w-xl text-lg text-[var(--steel-graphite)]">
                  Push wurde als nächste Generation von Fitness-Apps konzipiert: Nicht nur Daten sammeln,
                  sondern konsequentes Verhalten aktiv fördern – durch Accountability, Gamification und
                  AI-basierte Optimierung.
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
                  src="/images/referenzen/push-hero.png"
                  alt="Push App – Device Mockup"
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

      {/* Section 2 — Projektübersicht: Akzent linker Rand */}
      <section className="relative border-t border-[var(--light-industrial)]/30 border-l-4 border-l-[var(--brand-accent)]/50 bg-[var(--background-alt)]/25 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Project</span> Overview
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
              <strong className="text-[var(--foreground)]">Rolle:</strong> Produktstrategie, UX/UI Design, Full-Stack Entwicklung.
              <br />
              <strong className="text-[var(--foreground)]">Technologien:</strong> Vercel, Supabase, moderne Web-Frameworks, Health-API Integrationen.
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
                <span className="border-b-2 border-[var(--brand-accent)]">Problem</span>
              </h2>
              <p className="text-[var(--steel-graphite)]">
                Die Analyse bestehender Fitness-Apps zeigte ein konsistentes Muster. Viele Anwendungen
                fungieren als passive Datenspeicher, nicht als aktive Coaching-Systeme. Push wurde entwickelt,
                um diese strukturellen Schwächen zu lösen.
              </p>
              <div className="space-y-4">
                {PROBLEM_ROWS.map((row) => (
                  <div
                    key={row.problem}
                    className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-3 pl-4 pr-4"
                  >
                    <p className="font-medium text-[var(--foreground)]">{row.problem}</p>
                    <p className="mt-1 text-sm text-[var(--steel-graphite)]">{row.konsequenz}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" className="flex justify-center">
              <div className="group relative flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background-alt)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                <p className="px-6 text-center text-sm text-[var(--steel-graphite)]">
                  Tracking ohne soziale Kontrolle → Motivation sinkt. Fehlende Zielmechaniken → Inkonsistente Nutzung.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section 4 — Solution: dezentes Raster */}
      <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Solution</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Push kombiniert vier strategische Produktkomponenten.
            </p>
          </RevealOnScroll>
          <StaggeredReveal className="mt-12 grid gap-6 sm:grid-cols-2" childDelay={0.06}>
            {SOLUTION_ITEMS.map((item) => (
              <StaggeredRevealItem key={item.title} className="flex">
                <Card variant="glass" className="group w-full border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/40 hover:shadow-glow">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/10 transition-colors group-hover:bg-[var(--brand-accent)]/20">
                      <item.icon className="h-6 w-6 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <CardTitle className="font-primary text-lg text-[var(--foreground)]">
                        {item.title}
                      </CardTitle>
                      <p className="mt-2 text-sm text-[var(--steel-graphite)]">{item.desc}</p>
                    </div>
                  </CardHeader>
                </Card>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
          <RevealOnScroll className="mt-10">
            <h3 className="font-primary text-lg font-semibold text-[var(--foreground)]">Badge-Beispiele</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[320px] border-collapse border border-[var(--light-industrial)]">
                <thead>
                  <tr className="border-b border-[var(--light-industrial)] bg-white/[0.05]">
                    <th className="border-r border-[var(--light-industrial)] px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                      Badge
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                      Voraussetzung
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {BADGES.map((row) => (
                    <tr key={row.badge} className="border-b border-[var(--light-industrial)]/50">
                      <td className="border-r border-[var(--light-industrial)]/50 px-4 py-3 text-[var(--steel-graphite)]">
                        {row.badge}
                      </td>
                      <td className="px-4 py-3 text-[var(--steel-graphite)]">{row.voraussetzung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Technische Architektur: Aurora-Hintergrund (Bibliothek) */}
      <section className="relative overflow-hidden border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
        <AuroraBackground blend={0.22} speed={0.35} className="z-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Technische</span> Architektur
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Die Plattform wurde bewusst skalierbar und modular aufgebaut.
            </p>
          </RevealOnScroll>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse border border-[var(--light-industrial)]">
              <thead>
                <tr className="border-b border-[var(--light-industrial)] bg-white/[0.05]">
                  <th className="border-r border-[var(--light-industrial)] px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    Komponente
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    Technologie
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--light-industrial)]/50">
                  <td className="border-r border-[var(--light-industrial)]/50 px-4 py-3 text-[var(--steel-graphite)]">Hosting</td>
                  <td className="px-4 py-3 text-[var(--steel-graphite)]">Vercel</td>
                </tr>
                <tr className="border-b border-[var(--light-industrial)]/50">
                  <td className="border-r border-[var(--light-industrial)]/50 px-4 py-3 text-[var(--steel-graphite)]">Backend</td>
                  <td className="px-4 py-3 text-[var(--steel-graphite)]">Supabase</td>
                </tr>
                <tr className="border-b border-[var(--light-industrial)]/50">
                  <td className="border-r border-[var(--light-industrial)]/50 px-4 py-3 text-[var(--steel-graphite)]">Auth</td>
                  <td className="px-4 py-3 text-[var(--steel-graphite)]">Supabase Auth</td>
                </tr>
                <tr className="border-b border-[var(--light-industrial)]/50">
                  <td className="border-r border-[var(--light-industrial)]/50 px-4 py-3 text-[var(--steel-graphite)]">Database</td>
                  <td className="px-4 py-3 text-[var(--steel-graphite)]">PostgreSQL</td>
                </tr>
                <tr className="border-b border-[var(--light-industrial)]/50">
                  <td className="border-r border-[var(--light-industrial)]/50 px-4 py-3 text-[var(--steel-graphite)]">Deployment</td>
                  <td className="px-4 py-3 text-[var(--steel-graphite)]">Serverless</td>
                </tr>
              </tbody>
            </table>
          </div>
          <RevealOnScroll className="mt-6">
            <p className="text-sm text-[var(--steel-graphite)]">
              Schnelle Feature-Erweiterung, horizontale Skalierung, geringe Infrastrukturkosten.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 5 — UI Showcase: dunklere Band */}
      <section className="relative border-t border-b border-[var(--light-industrial)]/40 bg-[var(--background)]/70 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">UI</span> Showcase
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Große App-Screens: Home Dashboard, Achievements, Steps Detail, Challenges.
            </p>
          </RevealOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <RevealOnScroll className="flex">
              <div className="group w-full overflow-hidden rounded-sm border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/referenzen/push-ui-screens-1.png"
                    alt="Push App – Achievement, Home Dashboard, Steps Detail"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08} className="flex">
              <div className="group w-full overflow-hidden rounded-sm border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/referenzen/push-ui-challenges.png"
                    alt="Push App – Challenges (My challenges & Friends)"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section 6 — Results: getönt + unterer Verlauf */}
      <section className="relative border-t border-[var(--light-industrial)]/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-[var(--background-alt)]/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--hero-bg-end)]/30 to-transparent" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Results</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Erste Nutzertests zeigen messbare Verbesserungen.
            </p>
          </RevealOnScroll>
          <StaggeredReveal className="mt-12 grid gap-6 sm:grid-cols-3" childDelay={0.06}>
            {RESULTS.map((item) => (
              <StaggeredRevealItem key={item.label} className="flex">
                <Card variant="glass" className="w-full border-2 border-[var(--light-industrial)] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                  <CardContent className="pt-8 pb-8">
                    <p className="font-primary text-4xl font-bold text-[var(--brand-accent)] md:text-5xl">
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

      {/* Section 7 — CTA */}
      <section className="border-t border-[var(--light-industrial)]/30 bg-gradient-to-b from-[var(--background-alt)]/40 to-[var(--hero-bg-end)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <RevealOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              Interesse an einem Produkt wie Push?
            </h2>
            <p className="mt-4 text-[var(--steel-graphite)]">
              Von der Produktstrategie über UX/UI bis zum Full-Stack und Deployment – wir begleiten Ihr MVP.
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
