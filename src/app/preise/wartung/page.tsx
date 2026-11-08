import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { PaketVergleichTable } from "@/components/PaketVergleichTable";
import { ShinyLink } from "@/components/ui/shiny-button";
import {
  PAKETE_WARTUNG_TABLE,
  PAKETE_WARTUNG_FEATURES,
} from "@/data/preise-pakete";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildContentMetadata, webPageJsonLd } from "@/data/seo";

const TITLE = "Website-Wartung und Hosting ab 99 Euro monatlich | BonS-AI";
const DESCRIPTION =
  "Wartung und Hosting von BonS-AI: Essential Care ab 99 Euro im Monat, Business Care ab 399 Euro. Technische Betreuung und persönlicher Service für Unternehmen.";

export const metadata = buildContentMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/preise/wartung",
});

const LEISTUNGEN = [
  {
    title: "Sicherheit und Zuverlässigkeit",
    text: "Regelmäßige Updates, Datensicherungen und geeignete Sicherheitsmaßnahmen helfen, technische Risiken zu reduzieren und einen stabilen Betrieb sicherzustellen.",
  },
  {
    title: "Technische Kompetenz",
    text: "Ob Fragen zur Website, technische Schwierigkeiten oder neue Anforderungen: Wir unterstützen Sie mit dem notwendigen technischen Know-how.",
  },
  {
    title: "Kontinuierliche Betreuung",
    text: "Eine Website entwickelt sich mit Ihrem Unternehmen. Wir übernehmen im vereinbarten Leistungsumfang die Pflege und Anpassung Ihrer digitalen Präsenz.",
  },
  {
    title: "Persönlicher Service",
    text: "Klare Kommunikation, nachvollziehbare Abläufe und ein verlässlicher Ansprechpartner machen die Zusammenarbeit effizient und unkompliziert.",
  },
];

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
            <h1 className="mt-4 max-w-4xl font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-5xl">
              Ihre Website verdient professionelle <span className="border-b-2 border-[var(--brand-accent)]">Betreuung</span>.
            </h1>
            <h2 className="mt-8 max-w-3xl font-primary text-2xl font-semibold text-[var(--foreground)]">
              Zuverlässige Technik. Persönlicher Service. Langfristige Sicherheit.
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-[var(--steel-graphite)]">
              <p>Eine professionelle Website ist kein einmaliges Projekt.</p>
              <p>
                Neue Anforderungen, technische Entwicklungen und regelmäßige Sicherheitsupdates erfordern kontinuierliche
                Aufmerksamkeit.
              </p>
              <p>
                Mit den Wartungs- und Serviceleistungen von BonS-AI schaffen wir die Grundlage dafür, dass Ihre Website
                zuverlässig funktioniert und technisch auf dem aktuellen Stand bleibt.
              </p>
              <p className="font-medium text-[var(--foreground)]">
                Wir übernehmen die technische Betreuung – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20">
            <h2 className="max-w-3xl font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
              Mehr als klassisches Website-<span className="border-b-2 border-[var(--brand-accent)]">Hosting</span>.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {LEISTUNGEN.map((item) => (
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
            <PaketVergleichTable plans={PAKETE_WARTUNG_TABLE} features={PAKETE_WARTUNG_FEATURES} />
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20 max-w-3xl">
            <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
              Damit Ihre Website langfristig <span className="border-b-2 border-[var(--brand-accent)]">leistungsfähig</span> bleibt.
            </h2>
            <p className="mt-6 font-primary text-xl font-semibold text-[var(--foreground)]">
              Technisch betreut. Professionell gepflegt.
            </p>
            <div className="mt-6 space-y-4 text-[var(--steel-graphite)]">
              <p>
                Digitale Qualität zeigt sich nicht nur am Tag der Veröffentlichung, sondern insbesondere im laufenden Betrieb.
              </p>
              <p>
                Deshalb betrachten wir Wartung nicht als isolierte technische Aufgabe, sondern als wichtigen Bestandteil
                eines professionellen digitalen Auftritts.
              </p>
              <p>
                Unser Ziel ist eine langfristige Zusammenarbeit, in der technische Zuverlässigkeit, transparente
                Kommunikation und individuelle Anforderungen im Mittelpunkt stehen.
              </p>
            </div>
            <p className="mt-6">
              <Link href="/preise/webdesign" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
                Webdesign-Pakete ansehen
              </Link>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-20 max-w-3xl">
            <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)] md:text-3xl">
              Sie kümmern sich um Ihr Unternehmen. Wir kümmern uns um Ihre <span className="border-b-2 border-[var(--brand-accent)]">Website</span>.
            </h2>
            <div className="mt-6 space-y-4 text-[var(--steel-graphite)]">
              <p>
                Ob grundlegende technische Absicherung oder umfassende Website-Betreuung: Gemeinsam finden wir den
                Serviceumfang, der zu Ihrem Unternehmen passt.
              </p>
              <p className="font-medium text-[var(--foreground)]">Lassen Sie uns über Ihre Anforderungen sprechen.</p>
            </div>
            <div className="mt-8">
              <ShinyLink href="/kontakt" className="inline-flex min-h-11 rounded-xl px-6 py-3 text-sm">
                Persönliches Beratungsgespräch vereinbaren
              </ShinyLink>
            </div>
          </FadeInOnScroll>
        </div>
      </InteractiveNeuralVortex>
    </main>
  );
}
