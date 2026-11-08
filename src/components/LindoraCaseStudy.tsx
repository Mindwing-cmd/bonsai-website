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
  ShoppingBag,
  Layout,
  Calendar,
  Monitor,
  Shield,
  Search,
  Package,
  Zap,
  Database,
  ChevronDown,
} from "lucide-react";

const OVERVIEW_CARDS = [
  { label: "Branche", value: "Handwerk / Kerzen-Shop", icon: ShoppingBag },
  { label: "Leistung", value: "Onlineshop, CMS/Pflege, Checkout", icon: Layout },
  { label: "Timeline", value: "Shop inkl. Admin & Rechtstexte", icon: Calendar },
  { label: "Plattform", value: "Web (responsive, mobile first)", icon: Monitor },
];

const PROCESS_STEPS = [
  {
    title: "Briefing & Sortiment",
    desc: "Ziele geklärt: handgegossene Kerzen aus Magdeburg verkaufen, Wunschkerzen anbieten, rechtssicherer Shop. Produktkatalog, Varianten und Personalisierung definiert.",
  },
  {
    title: "Informationsarchitektur",
    desc: "Routen für Shop, Warenkorb, Bestellstatus, Auftrag, Über-uns und Rechtliches. Admin-Bereich unter /pflege für Katalogpflege ohne Developer.",
  },
  {
    title: "Design & Marke",
    desc: "Warme, handwerkliche Ästhetik: Produktfotos im Fokus, klare Typografie, ruhige Flächen. Story-Seite zu Linda Hübner und dem Label Lindora-Home.",
  },
  {
    title: "Shop-Umsetzung",
    desc: "Next.js App Router, Produktkatalog (Seed + Supabase), Warenkorb, Stripe-Checkout, Success/Cancel-Seiten. Bestand und Varianten berücksichtigt.",
  },
  {
    title: "CMS / Pflege-Bereich",
    desc: "Passwortgeschützte Admin-Oberfläche: Produkte anlegen/bearbeiten, Kategorien, Bild-Crop, Uploads über Supabase Storage – wartbar für die Betreiberin.",
  },
  {
    title: "Integrationen",
    desc: "Stripe (Checkout + Webhook), Resend für Wunschkerzen-Anfragen, Supabase für Katalog und Medien. Fallback auf lokalen Seed-Katalog ohne Backend-Keys.",
  },
  {
    title: "Recht & SEO",
    desc: "AGB, Widerruf, Versand, Datenschutz, Impressum. Metadaten, Sitemap und strukturierte Daten für Shop-Seiten.",
  },
  {
    title: "Launch & Einweisung",
    desc: "Deployment, Env-Variablen, Checkout-Test. Dokumentation für Pflege und Produktpflege im Admin.",
  },
];

const BESONDERES = [
  {
    title: "Echter Checkout-Flow",
    desc: "Stripe-Checkout mit Webhook, Erfolgs- und Abbruchseiten. Warenkorb persistent im Browser – verkaufsbereit statt nur Katalog-Showcase.",
    icon: ShoppingBag,
  },
  {
    title: "CMS ohne Agentur-Engpass",
    desc: "Pflege-Bereich für Produkte, Kategorien und Medien. Änderungen am Sortiment ohne Code-Deploy möglich.",
    icon: Database,
  },
  {
    title: "Handwerk & Vertrauen",
    desc: "Story, Produktfotos und klare Versand-/Widerrufsinfos. Kleinunternehmer-Hinweis und rechtliche Seiten vollständig.",
    icon: Package,
  },
  {
    title: "DSGVO & Shop-Recht",
    desc: "Impressum, Datenschutz, AGB, Widerruf, Versand. Formulare und Checkout mit nachvollziehbaren Prozessen.",
    icon: Shield,
  },
  {
    title: "SEO für Produktseiten",
    desc: "Dynamische Shop-Slugs, Sitemap, Metadaten. Produktseiten als Landingpages für Suchanfragen nutzbar.",
    icon: Search,
  },
  {
    title: "Performance & Wartbarkeit",
    desc: "Next.js Image-Optimierung, klarer Stack (Stripe, Supabase, Resend). Seed-Fallback für lokale Entwicklung und Demo.",
    icon: Zap,
  },
];

const UI_SHOWCASE_ITEMS = [
  {
    src: "/images/referenzen/lindora_hero.png",
    title: "Startseite / Hero",
    alt: "Lindora-Home Startseite mit Hero und Markenauftritt",
    optimiert: "Klarer Einstieg in Marke und Angebot: handgegossene Kerzen, CTA Richtung Shop und Story. Ruhige Bildsprache, Fokus auf Produktqualität.",
    sinnvoll: "Besucher verstehen sofort, was verkauft wird und können ohne Umwege in den Katalog oder zur Geschichte der Marke.",
  },
  {
    src: "/images/referenzen/lindora_shop.webp",
    title: "Shop / Katalog",
    alt: "Produktkatalog Lindora-Home",
    optimiert: "Produktkacheln mit Bild, Name und Einstieg in die Detailseite. Einheitliches Raster, mobile nutzbar.",
    sinnvoll: "Der Katalog ist der Umsatzkern: schnelles Scannen, klare Produktfotos, wenig Reibung bis zum Warenkorb.",
  },
  {
    src: "/images/referenzen/lindora_produkt.png",
    title: "Produktdetail",
    alt: "Produktdetailseite im Lindora-Shop",
    optimiert: "Detailansicht mit Varianten/Personalisierung und Kaufpfad. Inhaltliche Tiefe ohne Überladung.",
    sinnvoll: "Kaufentscheidung braucht Bild und Infos; die Detailseite führt gezielt zum Checkout.",
  },
  {
    src: "/images/referenzen/lindora_ueber.webp",
    title: "Über Lindora",
    alt: "Über-uns-Seite mit Story und Portrait",
    optimiert: "Persönliche Story und Markenvertrauen – warum handgegossen und lokal aus Magdeburg.",
    sinnvoll: "Bei Handwerksprodukten erhöht die Person hinter der Marke die Conversion und Wiedererkennung.",
  },
  {
    src: "/images/referenzen/lindora_auftrag.png",
    title: "Wunschkerze / Auftrag",
    alt: "Formular für individuelle Wunschkerzen",
    optimiert: "Separater Auftragsweg für Individualisierung neben dem Standard-Shop-Checkout.",
    sinnvoll: "Unikate und Sonderwünsche lassen sich so abfangen, ohne den Standard-Checkout zu verkomplizieren.",
  },
];

const RESULTS = [
  { label: "Shop", value: "Live-fähig" },
  { label: "CMS", value: "Pflege-Admin" },
  { label: "Payments", value: "Stripe" },
  { label: "Recht", value: "Vollständig" },
];

export function LindoraCaseStudy() {
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
                    <span className="border-b-2 border-[var(--brand-accent)]">Lindora-Home</span>
                    <br />
                    Onlineshop mit CMS
                  </h1>
                  <p className="text-lg text-[var(--muted-foreground)]">
                    Handgegossene Kerzen aus Magdeburg – Shop, Wunschkerzen und Pflege-Bereich
                  </p>
                  <p className="max-w-xl text-[var(--muted-foreground)]">
                    Vollständiger Onlineshop mit Stripe-Checkout, Produktkatalog und passwortgeschütztem CMS zur Sortimentspflege. Inklusive Rechtstexten, Story-Seite und Wunschkerzen-Auftrag.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ShinyLink href="/kontakt" className="rounded-xl px-6 py-3 text-sm">
                      Projekt starten
                    </ShinyLink>
                    <a
                      href={PROJEKT_WEBSITES["lindora-home"].href}
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
                    src="/images/referenzen/lindora_hero.png"
                    alt="Lindora-Home Startseite"
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
                      <CardTitle className="font-primary text-sm font-semibold text-[var(--muted-foreground)]">
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
              <p className="max-w-3xl text-[var(--muted-foreground)]">
                <strong className="text-[var(--foreground)]">Rolle:</strong> Konzeption, UI, Shop-Architektur, CMS/Admin, Stripe- und Mail-Integration, SEO/Recht.
                <br />
                <strong className="text-[var(--foreground)]">Technologien:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS 4, Stripe, Supabase, Resend.
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
                  Lindora-Home brauchte einen eigenen Onlineshop statt nur Social-/Etsy-Präsenz – inklusive wartbarem Katalog und rechtssicherem Verkauf.
                </p>
                <ul className="space-y-3 text-[var(--muted-foreground)]">
                  <li className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-2 pl-4">
                    <strong className="text-[var(--foreground)]">Ziele:</strong> Produkte verkaufen, Wunschkerzen anfragen, Sortiment selbst pflegen, Vertrauen durch Story und Rechtstexte.
                  </li>
                  <li className="border-l-2 border-[var(--brand-accent)]/50 bg-white/[0.03] py-2 pl-4">
                    <strong className="text-[var(--foreground)]">Anforderungen:</strong> Stripe-Checkout, CMS/Admin, Responsive Design, Shop-Recht (AGB, Widerruf), SEO.
                  </li>
                </ul>
              </RevealOnScroll>
              <RevealOnScroll direction="right" className="flex justify-center">
                <div className="group relative aspect-video w-full max-w-md overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow">
                  <Image
                    src="/images/referenzen/lindora_shop.webp"
                    alt="Lindora Shop-Katalog"
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
                Ein durchgängiger Shop mit Katalog, Checkout und Pflege-CMS – abgestimmt auf handwerkliche Produkte und Individualisierung.
              </p>
            </RevealOnScroll>
            <ul className="mt-8 space-y-2 text-[var(--muted-foreground)]">
              <li>
                <strong className="text-[var(--foreground)]">Shop:</strong> Katalog, Produktdetails, Warenkorb, Stripe-Checkout, Bestellstatus-Seiten.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">CMS:</strong> Admin unter /pflege für Produkte, Kategorien und Medien (Supabase).
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Wunschkerzen:</strong> Separates Auftragsformular mit E-Mail-Benachrichtigung (Resend).
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Marke:</strong> Über-uns/Story, Produktfotografie, konsistente Navigation.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Rechtliches:</strong> Impressum, Datenschutz, AGB, Widerruf, Versand.
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
                Screenshots aus dem Live-Projekt: Startseite, Shop, Produktdetail, Story und Wunschkerzen-Auftrag.
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
                Verkaufsbereiter Shop mit Stripe, wartbarem CMS und vollständigen Shop-Rechtstexten – abgestimmt auf handwerkliche Kerzen und Wunschanfertigungen.
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
                Onlineshop mit CMS für Ihr Angebot?
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Von Katalog und Checkout bis Pflege-Bereich und Rechtstexten – wir bauen Shops, die verkaufen und sich weiterpflegen lassen.
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
