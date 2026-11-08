import Link from "next/link";
import { Check } from "lucide-react";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { ShaderCanvas } from "@/components/ui/animated-glassy-pricing";
import { ShinyLink } from "@/components/ui/shiny-button";
import { KlappText } from "@/components/KlappText";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildPageMetadata, webPageJsonLd } from "@/data/seo";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata("preise");

type PaketGroesse = "compact" | "medium" | "large";

type Paket = {
  name: string;
  emphasis?: string;
  text: string;
  features: string[];
  priceLine: string;
  cta: string;
  size: PaketGroesse;
};

const WEBDESIGN: Paket[] = [
  {
    name: "Starter – Der professionelle Einstieg",
    text: "Ein überzeugender digitaler Auftritt beginnt mit Qualität. Wir entwickeln eine moderne, individuell gestaltete Website, die Ihr Unternehmen professionell präsentiert und auf jedem Endgerät überzeugt.",
    features: [
      "Professionelles, responsives Webdesign",
      "Klare Struktur und intuitive Nutzerführung",
      "Technisch saubere und performante Umsetzung",
      "Suchmaschinenfreundliche Grundlagen",
      "Bis zu 5 individuell gestaltete Seiten",
    ],
    priceLine: "Projektinvestition: ab 2.499 €",
    cta: "Projekt besprechen",
    size: "compact",
  },
  {
    name: "Business – Mehr Möglichkeiten für Ihr Wachstum",
    emphasis: "Unser Favorit für Unternehmen mit hohen Ansprüchen.",
    text: "Eine hochwertige Unternehmenswebsite muss mehr leisten als Informationen bereitzustellen. Sie soll Interessenten überzeugen, Vertrauen aufbauen und Ihre Geschäftsziele unterstützen. Mit einem individuellen Designsystem, erweiterten Funktionen und einer durchdachten technischen Architektur schaffen wir die Grundlage für Ihren langfristigen digitalen Erfolg.",
    features: [
      "Individuelles Webdesign mit hohem Qualitätsanspruch",
      "Erweiterte Suchmaschinenoptimierung",
      "Leistungsstarke, skalierbare Webtechnologie",
      "Flexible Inhaltsverwaltung über ein CMS",
      "Formulare und Anbindung externer Systeme",
      "Bis zu 15 individuell gestaltete Seiten",
    ],
    priceLine: "Projektinvestition: ab 4.999 €",
    cta: "Business-Projekt anfragen",
    size: "large",
  },
  {
    name: "Enterprise – Digitale Lösungen ohne Kompromisse",
    emphasis: "Für Unternehmen, die mehr als eine klassische Website benötigen.",
    text: "Komplexe Anforderungen brauchen individuelle Konzepte. Wir entwickeln maßgeschneiderte digitale Plattformen, die anspruchsvolles Design, leistungsfähige Architektur und intelligente Funktionen miteinander verbinden. Von individuellen Schnittstellen bis zur Integration KI-gestützter Prozesse entstehen Lösungen, die sich an Ihren geschäftlichen Anforderungen orientieren.",
    features: [
      "Individuelle Konzeption und technische Architektur",
      "Anspruchsvolles UX- und UI-Design",
      "Maßgeschneiderte Funktionen und Integrationen",
      "Skalierbare technische Infrastruktur",
      "Optional KI-Systeme und Automatisierungen",
      "Individuelle Projektbetreuung und Support",
    ],
    priceLine: "Individuelles Projektangebot",
    cta: "Individuelle Lösung anfragen",
    size: "medium",
  },
];

const WARTUNG: Paket[] = [
  {
    name: "Essential Care – Zuverlässigkeit als Grundlage",
    emphasis: "Hosting, Sicherheit und technischer Schutz.",
    text: "Für Unternehmen, die ihre Website zuverlässig betreiben möchten und Wert auf eine professionelle technische Grundlage legen.",
    features: [
      "Hosting und SSL-Verschlüsselung",
      "Regelmäßige Sicherheitsupdates",
      "Datensicherungen",
      "Technische Grundbetreuung",
      "E-Mail-Support",
    ],
    priceLine: "Ab 99 € monatlich",
    cta: "Service anfragen",
    size: "compact",
  },
  {
    name: "Business Care – Wir kümmern uns um Ihre Website",
    emphasis: "Persönliche Betreuung statt reiner technischer Verwaltung.",
    text: "Ihre Website entwickelt sich gemeinsam mit Ihrem Unternehmen weiter. Wir unterstützen Sie bei technischen Fragen, übernehmen vereinbarte Inhaltsanpassungen und sorgen dafür, dass Ihre digitale Präsenz professionell gepflegt bleibt.",
    features: [
      "Sämtliche Leistungen aus Essential Care",
      "Pflege und Aktualisierung von Inhalten",
      "Technischer Support",
      "Kleinere Anpassungen und Optimierungen",
      "Vereinbartes Stundenkontingent für laufende Aufgaben",
    ],
    priceLine: "Ab 399 € monatlich",
    cta: "Betreuung besprechen",
    size: "large",
  },
  {
    name: "Enterprise Care – Individueller Service für höchste Ansprüche",
    emphasis: "Eine langfristige technische Partnerschaft.",
    text: "Für umfangreiche digitale Plattformen und Unternehmen mit individuellen Anforderungen bieten wir eine auf Ihre Systeme abgestimmte Betreuung.",
    features: [
      "Individuelle Servicevereinbarungen",
      "Priorisierte Bearbeitung von Anfragen",
      "Fester Ansprechpartner",
      "Technische Weiterentwicklung",
      "Erweiterte Überwachung und Optimierung",
      "Langfristige Betreuung Ihrer digitalen Infrastruktur",
    ],
    priceLine: "Individuelles Serviceangebot",
    cta: "Servicekonzept anfragen",
    size: "medium",
  },
];

function PaketKarte({ name, emphasis, text, features, priceLine, cta, size }: Paket) {
  const large = size === "large";
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-xl border-2 bg-[var(--card)]",
        size === "compact" && "border-[var(--light-industrial)] px-5 py-5 lg:origin-center lg:scale-95",
        size === "medium" && "border-[var(--light-industrial)] px-6 py-7",
        large && "z-10 border-[var(--brand-accent)] px-7 py-8 shadow-glow lg:origin-center lg:scale-110"
      )}
    >
      {large && (
        <span className="absolute -top-3 right-5 rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-semibold text-[var(--brand-foreground)]">
          Beliebt
        </span>
      )}
      <h3
        className={cn(
          "font-primary font-semibold leading-tight text-[var(--foreground)]",
          size === "compact" && "text-xl",
          size === "medium" && "text-2xl",
          large && "text-3xl"
        )}
      >
        {name}
      </h3>
      {emphasis && <p className="mt-4 font-medium text-[var(--foreground)]">{emphasis}</p>}
      <KlappText>
        <p>{text}</p>
      </KlappText>
      <ul className={cn("flex flex-col", size === "compact" ? "mt-4 gap-2 text-sm" : "mt-6 gap-3")}>
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[var(--foreground)]">
            <Check className="mt-1 size-4 shrink-0 text-[var(--brand-accent)]" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <p className={cn("font-primary font-semibold text-[var(--foreground)]", large ? "mt-8 text-2xl" : "mt-6 text-xl")}>
        {priceLine}
      </p>
      <Link
        href="/kontakt"
        className={cn(
          "mt-6 inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-center font-secondary text-sm font-semibold",
          large
            ? "bg-[var(--brand-accent)] text-[var(--brand-foreground)] hover:opacity-95"
            : "border-2 border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent-muted)]"
        )}
      >
        {cta}
      </Link>
    </article>
  );
}

export default function PreisePage() {
  return (
    <main className="relative min-h-screen pt-24">
      <div className="fixed top-24 left-0 right-0 bottom-0 z-0" aria-hidden>
        <ShaderCanvas />
      </div>
      <JsonLd data={webPageJsonLd(SEO_PAGES.preise.title, SEO_PAGES.preise.description, "/preise")} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <p className="text-sm font-medium tracking-wide text-[var(--steel-graphite)]">Leistungen & Pakete</p>
          <h1 className="mt-3 max-w-3xl font-primary text-4xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-5xl">
            Digitale Lösungen mit <span className="border-b-2 border-[var(--brand-accent)]">Anspruch</span>.
          </h1>
          <h2 className="mt-8 max-w-3xl font-primary text-2xl font-semibold text-[var(--foreground)]">
            <span className="border-b-2 border-[var(--brand-accent)]">Qualität</span>, die überzeugt. Technologie, die funktioniert.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[var(--steel-graphite)]">
            <p>
              Eine professionelle Website ist mehr als ein ansprechendes Design. Sie repräsentiert Ihr Unternehmen,
              vermittelt Vertrauen und schafft die Grundlage für nachhaltiges digitales Wachstum.
            </p>
            <p>
              Bei BonS-AI verbinden wir individuelles Webdesign mit moderner Technologie, durchdachter Nutzerführung
              und einer technisch hochwertigen Umsetzung.
            </p>
            <p className="font-medium text-[var(--foreground)]">
              Unser Anspruch: Digitale Lösungen, die nicht nur heute überzeugen, sondern auch morgen zuverlässig funktionieren.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-20">
          <h2 className="max-w-3xl font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
            <span className="border-b-2 border-[var(--brand-accent)]">Webdesign</span> – Ihr Unternehmen. Professionell präsentiert.
          </h2>
          <div className="mt-10 grid items-center gap-6 py-8 lg:grid-cols-3 lg:gap-8 lg:py-16">
            {WEBDESIGN.map((paket) => (
              <PaketKarte key={paket.name} {...paket} />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/preise/webdesign" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
              Webdesign-Pakete im Vergleich
            </Link>
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-24">
          <h2 className="max-w-3xl font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
            Langfristig <span className="border-b-2 border-[var(--brand-accent)]">zuverlässig</span>. Persönlich betreut.
          </h2>
          <p className="mt-8 font-primary text-xl font-semibold text-[var(--foreground)]">
            Website-Wartung & technischer Service
          </p>
          <div className="mt-4 max-w-3xl space-y-4 text-[var(--steel-graphite)]">
            <p>Eine hochwertige Website verdient eine ebenso hochwertige Betreuung.</p>
            <p>
              Mit unseren Wartungs- und Servicepaketen sorgen wir dafür, dass Ihre digitale Präsenz technisch aktuell,
              sicher und leistungsfähig bleibt.
            </p>
            <p>
              Sie konzentrieren sich auf Ihr Unternehmen. Wir kümmern uns um die vereinbarten technischen Aufgaben im Hintergrund.
            </p>
          </div>
          <div className="mt-10 grid items-center gap-6 py-8 lg:grid-cols-3 lg:gap-8 lg:py-16">
            {WARTUNG.map((paket) => (
              <PaketKarte key={paket.name} {...paket} />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/preise/wartung" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
              Wartung und Hosting im Vergleich
            </Link>
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-24 max-w-3xl">
          <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
            Ihr Projekt verdient eine <span className="border-b-2 border-[var(--brand-accent)]">individuelle</span> Betrachtung.
          </h2>
          <div className="mt-6 space-y-4 text-[var(--steel-graphite)]">
            <p>Jedes Unternehmen bringt unterschiedliche Ziele, Herausforderungen und Anforderungen mit.</p>
            <p>
              Deshalb betrachten wir nicht nur den Funktionsumfang, sondern vor allem die Qualität der Lösung, ihre
              langfristige Nutzbarkeit und ihren tatsächlichen Mehrwert für Ihr Unternehmen.
            </p>
            <p className="font-medium text-[var(--foreground)]">
              Lassen Sie uns gemeinsam herausfinden, welche Lösung zu Ihren Anforderungen passt.
            </p>
          </div>
          <div className="mt-8">
            <ShinyLink href="/kontakt" className="inline-flex min-h-11 rounded-xl px-6 py-3 text-sm">
              Unverbindliches Erstgespräch vereinbaren
            </ShinyLink>
          </div>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
