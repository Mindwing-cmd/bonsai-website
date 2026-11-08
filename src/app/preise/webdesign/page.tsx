import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { PaketVergleichTable } from "@/components/PaketVergleichTable";
import {
  PAKETE_WEBDESIGN_TABLE,
  PAKETE_WEBDESIGN_FEATURES,
} from "@/data/preise-pakete";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildContentMetadata, webPageJsonLd } from "@/data/seo";

const TITLE = "Webdesign-Pakete: Starter ab 2.499 Euro einmalig | BonS-AI";
const DESCRIPTION =
  "Webdesign-Pakete von BonS-AI: Starter 2.499 Euro, Business 4.999 Euro, Enterprise auf Anfrage. Einmalige Projektpreise, Vergleich der Leistungsumfänge.";

export const metadata = buildContentMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/preise/webdesign",
});

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
            <h1 className="mt-4 font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Webdesign</span>-Pakete
            </h1>
            <h2 className="mt-8 font-primary text-2xl font-semibold text-[var(--foreground)]">
              Was kosten die Webdesign-Pakete?
            </h2>
            <p className="mt-4 max-w-3xl text-[var(--steel-graphite)]">
              Starter kostet 2.499 Euro einmalig und umfasst bis zu fünf Seiten. Business kostet 4.999 Euro
              einmalig und umfasst bis zu fünfzehn Seiten, ein CMS und erweiterte SEO. Enterprise wird individuell
              angeboten, inklusive optionaler KI-Integration. Die Preise sind Richtwerte. Das konkrete Angebot
              folgt dem Gespräch.
            </p>
            <p className="mt-6 text-xl font-medium text-[var(--foreground)]">
              Digitale Systeme statt einfacher Webseiten
            </p>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Wir entwickeln Websites nicht als statische Seiten, sondern als technisch saubere, performante und skalierbare digitale Plattformen.
              Jedes Projekt folgt einer klaren Architektur aus UX-Strategie, Designsystem, Performance-Optimierung und moderner Webentwicklung.
            </p>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Unsere Pakete bieten einen strukturierten Einstieg – von professionellen Unternehmenswebseiten bis zu individuell entwickelten digitalen Systemen.
            </p>
            <p className="mt-6">
              <Link href="/preise/wartung" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
                Wartungspakete ansehen
              </Link>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-14">
            <h2 className="font-primary text-xl font-bold text-[var(--foreground)] mb-4">
              Pakete im Vergleich
            </h2>
            <PaketVergleichTable
              plans={PAKETE_WEBDESIGN_TABLE}
              features={PAKETE_WEBDESIGN_FEATURES}
            />
          </FadeInOnScroll>
        </div>
      </InteractiveNeuralVortex>
    </main>
  );
}
