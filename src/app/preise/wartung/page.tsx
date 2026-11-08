import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { PaketVergleichTable } from "@/components/PaketVergleichTable";
import {
  PAKETE_WARTUNG_TABLE,
  PAKETE_WARTUNG_FEATURES,
} from "@/data/preise-pakete";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildContentMetadata, webPageJsonLd } from "@/data/seo";

const TITLE = "Website-Wartung und Hosting ab 99 Euro monatlich | BonS-AI";
const DESCRIPTION =
  "Wartung von BonS-AI: Starter 99 Euro im Monat, Business 399 Euro, Enterprise auf Anfrage. Hosting, Updates, Backups und Support für den laufenden Betrieb.";

export const metadata = buildContentMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/preise/wartung",
});

export default function PaketeWartungPage() {
  return (
    <main className="relative min-h-screen pt-24">
      <InteractiveNeuralVortex
        opacity={0.9}
        pointerInfluence={0.15}
        scrollInfluence={0.25}
        timeScale={0.0005}
      >
        <JsonLd data={webPageJsonLd(TITLE, DESCRIPTION, "/preise/wartung")} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Preise", path: "/preise" },
            { name: "Wartung und Hosting", path: "/preise/wartung" },
          ])}
        />
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
          <FadeInOnScroll>
            <nav aria-label="Brotkrumen" className="text-sm text-[var(--steel-graphite)]">
              <Link href="/preise" className="hover:text-[var(--brand-accent)]">
                Preise
              </Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-[var(--foreground)]">Wartung und Hosting</span>
            </nav>
            <h1 className="mt-4 font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Wartung</span> und Hosting
            </h1>
            <h2 className="mt-8 font-primary text-2xl font-semibold text-[var(--foreground)]">
              Was kostet die Wartung einer Website?
            </h2>
            <p className="mt-4 max-w-3xl text-[var(--steel-graphite)]">
              Starter kostet 99 Euro im Monat und enthält Hosting, SSL, Sicherheits-Updates, Backups und
              E-Mail-Support. Business kostet 399 Euro im Monat und ergänzt Content-Pflege sowie technischen
              Support. Enterprise wird individuell vereinbart, mit Prioritäts-Support und einem festen
              Ansprechpartner. Den passenden Umfang klärt das Gespräch.
            </p>
            <p className="mt-6 text-xl font-medium text-[var(--foreground)]">
              Stabiler Betrieb, Sicherheit und kontinuierliche Weiterentwicklung
            </p>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Eine professionelle Website endet nicht mit dem Launch. Sicherheit, Updates, Performance und Anpassungen sind entscheidend für langfristige Stabilität und Wachstum.
            </p>
            <p className="mt-4 max-w-2xl text-[var(--steel-graphite)]">
              Unsere Wartungspakete stellen sicher, dass Ihre Website technisch aktuell, sicher und leistungsfähig bleibt, während Sie sich auf Ihr Geschäft konzentrieren.
            </p>
            <p className="mt-6">
              <Link href="/preise/webdesign" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
                Webdesign-Pakete ansehen
              </Link>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-14">
            <h2 className="font-primary text-xl font-bold text-[var(--foreground)] mb-4">
              Wartungspakete
            </h2>
            <PaketVergleichTable
              plans={PAKETE_WARTUNG_TABLE}
              features={PAKETE_WARTUNG_FEATURES}
            />
          </FadeInOnScroll>
        </div>
      </InteractiveNeuralVortex>
    </main>
  );
}
