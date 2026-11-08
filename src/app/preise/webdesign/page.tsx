import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { PaketVergleichTable } from "@/components/PaketVergleichTable";
import { ShinyLink } from "@/components/ui/shiny-button";
import {
  PAKETE_WEBDESIGN_TABLE,
  PAKETE_WEBDESIGN_FEATURES,
} from "@/data/preise-pakete";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildContentMetadata, webPageJsonLd } from "@/data/seo";
import { cn } from "@/lib/utils";

const TITLE = "Webdesign-Pakete: Starter ab 2.499 Euro einmalig | BonS-AI";
const DESCRIPTION =
  "Webdesign von BonS-AI: Konzeption, Entwicklung und Performance. Starter ab 2.499 Euro einmalig, Business ab 4.999 Euro, Enterprise nach Projektumfang.";

export const metadata = buildContentMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/preise/webdesign",
});

const QUALITAETEN = [
  {
    title: "Individuelles Design",
    text: "Keine beliebigen Standardlösungen, sondern ein digitaler Auftritt, der Ihre Marke widerspiegelt und sich bewusst vom Wettbewerb abhebt.",
  },
  {
    title: "Technische Qualität",
    text: "Moderne Webtechnologien, optimierte Ladezeiten und eine wartbare Architektur schaffen die Grundlage für einen zuverlässigen Betrieb.",
  },
  {
    title: "Nutzerorientierte Gestaltung",
    text: "Eine intuitive Navigation, klare Inhalte und gezielt platzierte Handlungsaufforderungen erleichtern Ihren Besuchern den Weg zur Kontaktaufnahme.",
  },
  {
    title: "Suchmaschinenfreundliche Entwicklung",
    text: "Wir berücksichtigen wichtige technische SEO-Grundlagen bereits während der Entwicklung, statt sie erst nachträglich zu ergänzen.",
  },
  {
    title: "Persönliche Projektbegleitung",
    text: "Von der ersten Konzeption bis zur Veröffentlichung begleiten wir Ihr Projekt mit klaren Abstimmungen und einem strukturierten Entwicklungsprozess.",
  },
];

const ABLAUF = [
  {
    title: "Strategie und Konzeption",
    text: "Wir analysieren Ihre Anforderungen, definieren die Ziele Ihrer Website und entwickeln eine passende Struktur.",
  },
  {
    title: "Design und Nutzererlebnis",
    text: "Wir gestalten eine überzeugende Benutzeroberfläche, die Ihre Markenidentität transportiert und die Erwartungen Ihrer Zielgruppe berücksichtigt.",
  },
  {
    title: "Entwicklung und Performance",
    text: "Wir setzen das Design mit modernen Webtechnologien um. Geschwindigkeit, Responsivität und technische Qualität werden dabei von Beginn an berücksichtigt.",
  },
  {
    title: "Testing und Qualitätssicherung",
    text: "Vor der Veröffentlichung prüfen wir wichtige Funktionen, Darstellungen auf unterschiedlichen Endgeräten und die technische Funktionsfähigkeit.",
  },
  {
    title: "Launch und Weiterentwicklung",
    text: "Wir begleiten die Veröffentlichung Ihrer Website. Auf Wunsch betreuen wir Ihren digitalen Auftritt anschließend durch unsere Wartungs- und Serviceangebote.",
  },
];

export default function PaketeWebdesignPage() {
  return (
    <main className="relative min-h-screen pt-24">
      <InteractiveNeuralVortex
        opacity={0.9}
        pointerInfluence={0.15}
        scrollInfluence={0.25}
        timeScale={0.0005}
      >
        <JsonLd data={webPageJsonLd(TITLE, DESCRIPTION, "/preise/webdesign")} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Preise", path: "/preise" },
            { name: "Webdesign-Pakete", path: "/preise/webdesign" },
          ])}
        />
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
          <FadeInOnScroll>
            <nav aria-label="Brotkrumen" className="text-sm text-[var(--steel-graphite)]">
              <Link href="/preise" className="hover:text-[var(--brand-accent)]">
                Preise
              </Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-[var(--foreground)]">Webdesign-Pakete</span>
            </nav>
            <h1 className="mt-4 max-w-4xl font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-5xl">
              Professionelles <span className="border-b-2 border-[var(--brand-accent)]">Webdesign</span>. Ohne Kompromisse bei der Qualität.
            </h1>
            <h2 className="mt-8 max-w-3xl font-primary text-2xl font-semibold text-[var(--foreground)]">
              Websites, die Eindruck hinterlassen und technisch überzeugen.
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-[var(--steel-graphite)]">
              <p>Ihre Website ist häufig der erste Kontakt zwischen Ihrem Unternehmen und potenziellen Kunden.</p>
              <p>
                Umso wichtiger ist ein digitaler Auftritt, der Professionalität vermittelt, Vertrauen schafft und Ihre
                Leistungen überzeugend präsentiert.
              </p>
              <p className="font-medium text-[var(--foreground)]">
                BonS-AI verbindet hochwertiges Design mit fundierter Softwareentwicklung.
              </p>
              <p>
                Wir setzen auf moderne Technologien, klare Nutzerführung, durchdachte Informationsarchitekturen und eine
                konsequente Ausrichtung auf Performance und Benutzerfreundlichkeit.
              </p>
              <p>Das Ergebnis sind individuell entwickelte Websites, die sowohl gestalterisch als auch technisch überzeugen.</p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20">
            <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
              Was unsere <span className="border-b-2 border-[var(--brand-accent)]">Arbeit</span> auszeichnet
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {QUALITAETEN.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--card)] p-6"
                >
                  <h3 className="font-primary text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 text-[var(--steel-graphite)]">{item.text}</p>
                </article>
              ))}
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20">
            <h2 className="mb-4 font-primary text-2xl font-bold text-[var(--deep-carbon)]">
              Leistungsumfang im <span className="border-b-2 border-[var(--brand-accent)]">Vergleich</span>
            </h2>
            <PaketVergleichTable plans={PAKETE_WEBDESIGN_TABLE} features={PAKETE_WEBDESIGN_FEATURES} />
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20">
            <h2 className="max-w-3xl font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
              Unser Qualitätsanspruch endet nicht beim <span className="border-b-2 border-[var(--brand-accent)]">Design</span>.
            </h2>
            <p className="mt-6 font-primary text-xl font-semibold text-[var(--foreground)]">
              Durchdacht von der ersten Idee bis zum Launch.
            </p>
            <ol className="mt-8 max-w-3xl space-y-6">
              {ABLAUF.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--card)] p-6"
                >
                  <p className="font-secondary text-sm font-semibold text-[var(--brand-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-primary text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
                  <p className="mt-3 text-[var(--steel-graphite)]">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              <Link href="/preise/wartung" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
                Wartung und Service ansehen
              </Link>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20 max-w-3xl">
            <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
              Eine Website ist eine <span className="border-b-2 border-[var(--brand-accent)]">Investition</span> in Ihren professionellen Auftritt.
            </h2>
            <div className="mt-6 space-y-4 text-[var(--steel-graphite)]">
              <p>
                Gutes Webdesign entsteht nicht durch die Anzahl der Unterseiten, sondern durch die Qualität von
                Konzeption, Gestaltung und technischer Umsetzung.
              </p>
              <p>Wir entwickeln Lösungen, die Ihrem Unternehmen langfristig einen professionellen digitalen Auftritt ermöglichen.</p>
              <p className="font-medium text-[var(--foreground)]">
                Sprechen wir über Ihre Ziele, Anforderungen und Vorstellungen.
              </p>
            </div>
            <div className="mt-8">
              <ShinyLink href="/kontakt" className={cn("inline-flex min-h-11 rounded-xl px-6 py-3 text-sm")}>
                Projektgespräch vereinbaren
              </ShinyLink>
            </div>
          </FadeInOnScroll>
        </div>
      </InteractiveNeuralVortex>
    </main>
  );
}
