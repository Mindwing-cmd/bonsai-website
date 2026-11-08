import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { WebdesignPageWithTabs } from "@/components/WebdesignPageWithTabs";
import { LeistungDetailWithRoadmap } from "@/components/LeistungDetailWithRoadmap";
import { ROADMAPS } from "@/data/leistungen-roadmaps";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  buildLeistungMetadata,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/data/seo";

const LEISTUNG_SEO: Record<string, { title: string; description: string }> = {
  webdesign: {
    title: "Webdesign-Leistungen für Unternehmen in Thüringen | BonS-AI",
    description:
      "Webdesign bei BonS-AI heißt Konzeption, UI, responsive Umsetzung und Übergabe. Unternehmen in Thüringen planen etwa vier bis acht Wochen ein. Jetzt anfragen.",
  },
  "ki-systeme": {
    title: "KI-Systeme und Automatisierung aus Thüringen | BonS-AI",
    description:
      "KI-Systeme und Automatisierung von BonS-AI: Use-Case, Daten, Integration und Rollout. Für Unternehmen in Thüringen, typisch in acht bis sechzehn Wochen.",
  },
  innovation: {
    title: "Web- und Mobile-Apps entwickeln in Thüringen | BonS-AI",
    description:
      "Web- und Mobile-Apps von BonS-AI: Strategie, Design, MVP und Launch für Web, iOS und Android. Der Start ist ein Gespräch. Das Studio sitzt in Thüringen.",
  },
  "paid-ads": {
    title: "Bezahlte Werbung auf Google, Meta und LinkedIn | BonS-AI",
    description:
      "Paid Ads von BonS-AI auf Google, Meta und LinkedIn: Strategie, Creatives, Tracking und Reporting. Erste Ergebnisse zeigen sich oft in zwei bis vier Wochen.",
  },
};

const LEISTUNGEN_DATA: Record<
  string,
  { title: string; outcome: string; inhalt: string[]; zeitrahmen: string; faq?: { q: string; a: string }[] }
> = {
  webdesign: {
    title: "Webdesign",
    outcome:
      "Webdesign bei BonS-AI ist die Konzeption und Umsetzung einer klaren, responsiven Website mit lesbarer Hierarchie.",
    inhalt: [
      "Konzeption und Struktur",
      "UI/UX und visuelles Design",
      "Responsive Umsetzung",
      "Content-Integration und Feinschliff",
    ],
    zeitrahmen: "Ca. 4–8 Wochen je nach Umfang.",
    faq: [
      {
        q: "Was ist im Webdesign von BonS-AI enthalten?",
        a: "Enthalten sind Konzeption und Struktur, UI und UX, die responsive Umsetzung sowie Content-Integration und Übergabe. Der Ablauf führt über Analyse, Informationsarchitektur und Designsystem zur Entwicklung. Hosting und Wartung sind optional und als eigene Pakete buchbar. Je nach Umfang dauert ein Projekt etwa vier bis acht Wochen.",
      },
      {
        q: "Für welche Branchen eignet sich das Webdesign?",
        a: "BonS-AI setzt Webdesign branchenoffen um, vom Handwerk bis zu technischen Produkten, und passt das Design an die jeweilige Marke an. Veröffentlicht sind eine Zahnarztpraxis mit zwei Standorten, ein Kerzen-Onlineshop, eine Website für Gespräche in Jena und die Fitness-App Push. Die Struktur bleibt klar und lesbar.",
      },
    ],
  },
  "ki-systeme": {
    title: "KI-Systeme & Automatisierung",
    outcome:
      "Ein KI-System bei BonS-AI ist eine skalierbare Anwendung mit KI-Komponente, vom Chatbot bis zur Automatisierung.",
    inhalt: [
      "Anforderungsanalyse und Architektur",
      "Integration von KI/ML-Modulen",
      "APIs und Datenanbindung",
      "Deployment und Dokumentation",
    ],
    zeitrahmen: "Projektabhängig, typisch 8–16 Wochen.",
    faq: [
      {
        q: "Was ist ein KI-System bei BonS-AI?",
        a: "Ein KI-System bei BonS-AI ist eine Anwendung mit KI-Komponente, zum Beispiel ein Chatbot oder eine Automatisierung. Der Weg führt von der Anforderung über Daten und Schnittstellen zur Modell-Integration, Entwicklung, Tests, Rollout und Wartung. Typisch sind acht bis sechzehn Wochen. Next.js, Python und Cloud-Dienste können zum Einsatz kommen.",
      },
      {
        q: "Gibt es Betreuung nach dem Launch?",
        a: "Ja, auf Wunsch. Hosting, Updates und Support nach dem Launch sind optional und nicht automatisch Teil jedes Projekts. Dazu gehören laufende Updates, Monitoring, Dokumentation und Anpassungen, wenn sich Anforderungen ändern. Den Umfang legt BonS-AI im Gespräch fest. So bleibt das System nach dem Rollout wartbar.",
      },
    ],
  },
  innovation: {
    title: "Web- und Mobile-App-Entwicklung",
    outcome:
      "Eine App bei BonS-AI ist ein digitales Produkt für Web, iOS oder Android, von der Strategie bis zum Launch.",
    inhalt: [
      "Strategie und Roadmap",
      "App-Design (iOS, Android, Web)",
      "MVP und Iteration",
      "Skalierung und Wartung",
    ],
    zeitrahmen: "Abhängig vom Projekt – von wenigen Wochen bis zu mehreren Monaten.",
    faq: [
      {
        q: "Wie startet die Entwicklung einer App?",
        a: "Eine App startet bei BonS-AI mit einem kurzen Kennenlerngespräch und einer klaren Zieldefinition. Danach folgen Strategie, Nutzererlebnis, Design und Prototyp, dann das MVP, Tests und der Launch auf Web, iOS oder Android. Die Dauer reicht von wenigen Wochen bis zu mehreren Monaten. Kernfunktionen kommen vor späteren Ausbaustufen.",
      },
      {
        q: "Welche App hat BonS-AI veröffentlicht?",
        a: "Als App-Referenz zeigt BonS-AI die Fitness-App Push mit Accountability, Gamification und KI-gestützter Optimierung. Die Case Study beschreibt Produktstrategie, UX und die technische Umsetzung. Weitere veröffentlichte Arbeiten sind Zahnärzte am Inn, Lindora-Home und Naturverbunden Jena. Welche davon passt, zeigt das Gespräch zur Anfrage.",
      },
    ],
  },
  "paid-ads": {
    title: "Paid Ads",
    outcome:
      "Paid Ads bei BonS-AI ist bezahlte Werbung auf Google, Meta und LinkedIn, zielgerichtet und mit Reporting.",
    inhalt: [
      "Kampagnenstrategie und Zieldefinition",
      "Anzeigenkonzeption und Creatives",
      "Bidding, Targeting und Optimierung",
      "Tracking, Auswertung und Reporting",
    ],
    zeitrahmen: "Erste Ergebnisse oft innerhalb von 2–4 Wochen. Laufende Betreuung nach Bedarf.",
    faq: [
      {
        q: "Welche Kanäle umfasst Paid Ads bei BonS-AI?",
        a: "Paid Ads bei BonS-AI ist bezahlte Werbung auf Google Ads, Meta (Facebook und Instagram), LinkedIn und weiteren Kanälen, je nach Ziel und Zielgruppe. Der Ablauf umfasst Ziele, Kanal und Budget, Kampagnen-Setup, Creatives, Launch, Optimierung und Reporting. Erste Ergebnisse zeigen sich oft innerhalb von zwei bis vier Wochen.",
      },
      {
        q: "Wie wird das Werbebudget festgelegt?",
        a: "BonS-AI berät zu einem sinnvollen Budget und richtet Kampagnen an messbaren Kennzahlen aus, zum Beispiel Kosten pro Anfrage und dem Verhältnis von Umsatz zu Werbekosten. Tracking, Auswertung und ein verständliches Reporting gehören zum Ablauf. Eine feste Budgetgrenze nennt das Angebot nicht, sie entsteht im Gespräch.",
      },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

function LeistungJsonLd({ slug }: { slug: string }) {
  const data = LEISTUNGEN_DATA[slug];
  const seo = LEISTUNG_SEO[slug];
  if (!data || !seo) return null;
  return (
    <>
      <JsonLd data={webPageJsonLd(seo.title, seo.description, `/leistungen/${slug}`)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: data.title, path: `/leistungen/${slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(data.title, data.outcome, `/leistungen/${slug}`)} />
      {data.faq ? <JsonLd data={faqPageJsonLd(data.faq)} /> : null}
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const seo = LEISTUNG_SEO[slug];
  const data = LEISTUNGEN_DATA[slug];
  if (!seo || !data) return buildLeistungMetadata(slug, "Leistung von BonS-AI", "Leistungsdetails von BonS-AI aus Stadtilm in Thüringen.");
  return buildLeistungMetadata(slug, seo.title, seo.description);
}

export async function generateStaticParams() {
  return Object.keys(LEISTUNGEN_DATA).map((slug) => ({ slug }));
}

export default async function LeistungDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = LEISTUNGEN_DATA[slug];
  if (!data) notFound();

  if (slug === "webdesign") {
    return (
      <main className="relative min-h-screen pt-24">
        <LeistungJsonLd slug={slug} />
        <InteractiveNeuralVortex
          opacity={0.9}
          pointerInfluence={0.15}
          scrollInfluence={0.25}
          timeScale={0.0005}
        >
          <WebdesignPageWithTabs data={data} />
        </InteractiveNeuralVortex>
      </main>
    );
  }

  const roadmap = ROADMAPS[slug];
  if (roadmap) {
    return (
      <main className="relative min-h-screen pt-24">
        <LeistungJsonLd slug={slug} />
        <InteractiveNeuralVortex
          opacity={0.9}
          pointerInfluence={0.15}
          scrollInfluence={0.25}
          timeScale={0.0005}
        >
          <LeistungDetailWithRoadmap data={data} roadmap={roadmap} />
        </InteractiveNeuralVortex>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-24">
      <InteractiveNeuralVortex
        opacity={0.9}
        pointerInfluence={0.15}
        scrollInfluence={0.25}
        timeScale={0.0005}
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <Link href="/" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
            ← Zur Startseite
          </Link>
          <h1 className="mt-6 font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            <span className="border-b-2 border-[var(--brand-accent)]">{data.title}</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--steel-graphite)]">{data.outcome}</p>
          <p className="mt-3 text-sm text-[var(--steel-graphite)]">
            Umsetzung für Unternehmen in Thüringen mit klarer Struktur, messbaren KPIs und direktem Fokus auf Conversion.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">Inhalt & Ablauf</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--steel-graphite)]">
            {data.inhalt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-10">
          <p className="text-[var(--steel-graphite)]">
            <span className="font-medium text-[var(--deep-carbon)]">Zeitrahmen:</span> {data.zeitrahmen}
          </p>
        </FadeInOnScroll>

        {data.faq && data.faq.length > 0 && (
          <FadeInOnScroll className="mt-12">
            <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">FAQ</h2>
            <dl className="mt-4 space-y-4">
              {data.faq.map(({ q, a }) => (
                <div key={q}>
                  <dt className="font-medium text-[var(--deep-carbon)]">{q}</dt>
                  <dd className="mt-1 text-[var(--steel-graphite)]">{a}</dd>
                </div>
              ))}
            </dl>
          </FadeInOnScroll>
        )}

        <FadeInOnScroll className="mt-16">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-block rounded-xl bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] transition-colors hover:opacity-95 hover:shadow-md"
            >
              Gespräch vereinbaren
            </Link>
            <Link
              href="/referenzen"
              className="inline-block rounded-xl border-2 border-[var(--light-industrial)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
            >
              Passende Referenzen
            </Link>
            <Link
              href="/preise"
              className="inline-block rounded-xl border-2 border-[var(--light-industrial)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
            >
              Preise ansehen
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
      </InteractiveNeuralVortex>
    </main>
  );
}
