import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { PaketVergleichTable } from "@/components/PaketVergleichTable";
import {
  PAKETE_WARTUNG_TABLE,
  PAKETE_WARTUNG_FEATURES,
} from "@/data/preise-pakete";

export const metadata = {
  title: "Pakete Web-Wartung – BonS-AI",
  description: "Stabiler Betrieb, Sicherheit und kontinuierliche Weiterentwicklung. Wartungspakete im Vergleich.",
};

export default function PaketeWartungPage() {
  return (
    <main className="relative min-h-screen pt-24">
      <InteractiveNeuralVortex
        opacity={0.9}
        pointerInfluence={0.15}
        scrollInfluence={0.25}
        timeScale={0.0005}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
          <FadeInOnScroll>
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--steel-graphite)]">
              <Link href="/preise" className="hover:text-[var(--brand-accent)]">
                Preise
              </Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-[var(--foreground)]">Pakete Web-Wartung</span>
            </nav>
            <h1 className="mt-4 font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Wartung & Betrieb</span>
            </h1>
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
                → Pakete Webdesign ansehen
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
