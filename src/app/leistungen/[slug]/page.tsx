import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { InteractiveNeuralVortex } from "@/components/InteractiveNeuralVortex";
import { WebdesignPageWithTabs } from "@/components/WebdesignPageWithTabs";
import { LeistungDetailWithRoadmap } from "@/components/LeistungDetailWithRoadmap";
import { ROADMAPS } from "@/data/leistungen-roadmaps";

const LEISTUNGEN_DATA: Record<
  string,
  { title: string; outcome: string; inhalt: string[]; zeitrahmen: string; faq?: { q: string; a: string }[] }
> = {
  webdesign: {
    title: "Webdesign",
    outcome: "Eine klare, hochwertige Webpräsenz mit starker Struktur und lesbarer Hierarchie.",
    inhalt: [
      "Konzeption und Struktur",
      "UI/UX und visuelles Design",
      "Responsive Umsetzung",
      "Content-Integration und Feinschliff",
    ],
    zeitrahmen: "Ca. 4–8 Wochen je nach Umfang.",
    faq: [
      { q: "Für welche Branchen?", a: "Für alle Branchen – von Handwerk bis Tech. Wir passen das Design an Ihre Marke an." },
      { q: "Was ist enthalten?", a: "Design, Umsetzung, Einrichtung und Übergabe. Optional: Hosting und Wartung." },
    ],
  },
  "ki-systeme": {
    title: "KI-Systeme & Automatisierung",
    outcome: "Skalierbare, zukunftssichere Anwendungen mit KI-Komponenten – von Chatbots bis Automatisierung.",
    inhalt: [
      "Anforderungsanalyse und Architektur",
      "Integration von KI/ML-Modulen",
      "APIs und Datenanbindung",
      "Deployment und Dokumentation",
    ],
    zeitrahmen: "Projektabhängig, typisch 8–16 Wochen.",
    faq: [
      { q: "Welche Technologien?", a: "Moderne Stacks (z. B. Next.js, Python), Cloud und bewährte KI-Frameworks." },
      { q: "Wartung?", a: "Optional: Hosting, Updates und Support nach Launch." },
    ],
  },
  innovation: {
    title: "Web- und Mobile-App-Entwicklung",
    outcome: "Von der Strategie bis zum Launch – native und cross-platform Apps, strukturierte Prozesse.",
    inhalt: [
      "Strategie und Roadmap",
      "App-Design (iOS, Android, Web)",
      "MVP und Iteration",
      "Skalierung und Wartung",
    ],
    zeitrahmen: "Abhängig vom Projekt – von wenigen Wochen bis zu mehreren Monaten.",
    faq: [
      { q: "Wie starten wir?", a: "Mit einem kurzen Kennenlerngespräch und einer klaren Definition der Ziele." },
      { q: "Referenzen?", a: "Gern zeigen wir Ihnen passende Projekte aus unserem Portfolio." },
    ],
  },
  "paid-ads": {
    title: "Paid Ads",
    outcome: "Bezahlte Werbung, die ankommt – Google Ads, Meta, LinkedIn. Zielgerichtet, messbar und skalierbar.",
    inhalt: [
      "Kampagnenstrategie und Zieldefinition",
      "Anzeigenkonzeption und Creatives",
      "Bidding, Targeting und Optimierung",
      "Tracking, Auswertung und Reporting",
    ],
    zeitrahmen: "Erste Ergebnisse oft innerhalb von 2–4 Wochen. Laufende Betreuung nach Bedarf.",
    faq: [
      { q: "Welche Kanäle?", a: "Google Ads, Meta (Facebook/Instagram), LinkedIn und weitere – abhängig von Ihrem Ziel und Ihrer Zielgruppe." },
      { q: "Budget?", a: "Wir beraten Sie zu sinnvollen Budgets und setzen auf messbare KPIs (z. B. CPA, ROAS)." },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = LEISTUNGEN_DATA[slug];
  if (!data) return { title: "Leistung – BonS-AI" };
  return { title: `${data.title} – BonS-AI`, description: data.outcome };
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
          <Link
            href="/kontakt"
            className="inline-block rounded-xl bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] transition-colors hover:opacity-95 hover:shadow-md"
          >
            Gespräch vereinbaren
          </Link>
        </FadeInOnScroll>
      </div>
      </InteractiveNeuralVortex>
    </main>
  );
}
