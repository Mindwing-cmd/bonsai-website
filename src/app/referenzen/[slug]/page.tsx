import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { ShinyLink } from "@/components/ui/shiny-button";
import { PushCaseStudy } from "@/components/PushCaseStudy";
import { ZahnaerzteAmInnCaseStudy } from "@/components/ZahnaerzteAmInnCaseStudy";

const CASE_STUDIES: Record<
  string,
  {
    title: string;
    ausgangslage: string;
    lösung: string;
    prozess: string[];
    ergebnis: string;
    kennzahlen?: { label: string; value: string }[];
  }
> = {
  "innovation-mvp": {
    title: "Push – Fitness & Accountability App",
    ausgangslage: "Ein Start-up wollte seine Produktidee in einem lauffähigen MVP validieren.",
    lösung: "Strukturierter Prozess von der Strategie bis zum deployten MVP in 12 Wochen.",
    prozess: ["Strategie & Scope", "Sprint-Planung", "Entwicklung & Tests", "Launch & Iteration"],
    ergebnis: "MVP live, erste Nutzer und klare Learnings für die nächste Phase.",
    kennzahlen: [
      { label: "Dauer", value: "12 Wochen" },
      { label: "Features", value: "MVP-Set" },
    ],
  },
  "zahnaerzte-am-inn": {
    title: "Zahnärzte am Inn – Petri & Kollegen",
    ausgangslage: "Die Praxis benötigte eine moderne, vertrauenswürdige Webpräsenz für zwei Standorte (Mühldorf, Töging) mit klaren Leistungen und Kontakt.",
    lösung: "Einheitliche Praxis-Website mit Start, Praxis, Leistungen, Kontakt, Karriere, Impressum, Datenschutz. Zwei Kontaktformulare, Resend, JSON-LD, SEO.",
    prozess: ["Briefing & Konzept", "Struktur & Inhalte", "Design & Abnahme", "Umsetzung", "Content & Bilder", "SEO & Resend", "Launch & Einweisung"],
    ergebnis: "Live-Website, wartbar, suchmaschinen- und nutzerfreundlich. Schnelle Ladezeiten, Kontaktformular per Resend, regionale Suchbegriffe abgedeckt.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  if (slug === "innovation-mvp") {
    return {
      title: "Push – Fitness & Accountability App – BonS-AI",
      description:
        "Case Study: Fitness-App mit Accountability, Gamification und AI-Optimierung. Produktstrategie, UX/UI, Full-Stack.",
    };
  }
  if (slug === "zahnaerzte-am-inn") {
    return {
      title: "Zahnärzte am Inn – Petri & Kollegen – BonS-AI",
      description:
        "Case Study: Praxis-Website für zwei Standorte. Webdesign, SEO, DSGVO, Kontaktformular. Next.js, Resend, JSON-LD.",
    };
  }
  if (!data) return { title: "Referenz – BonS-AI" };
  return { title: `${data.title} – BonS-AI`, description: data.ergebnis };
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default async function ReferenzDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  if (!data) notFound();

  if (slug === "innovation-mvp") {
    return <PushCaseStudy />;
  }
  if (slug === "zahnaerzte-am-inn") {
    return <ZahnaerzteAmInnCaseStudy />;
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <Link href="/referenzen" className="text-sm text-[var(--steel-graphite)] hover:text-[var(--brand-accent)]">
            ← Alle Referenzen
          </Link>
          <h1 className="mt-6 font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            <span className="border-b-2 border-[var(--brand-accent)]">{data.title}</span>
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">Ausgangslage</h2>
          <p className="mt-2 text-[var(--steel-graphite)]">{data.ausgangslage}</p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-10">
          <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">Lösung</h2>
          <p className="mt-2 text-[var(--steel-graphite)]">{data.lösung}</p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-10">
          <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">Prozess</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--steel-graphite)]">
            {data.prozess.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-10">
          <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">Ergebnis</h2>
          <p className="mt-2 text-[var(--steel-graphite)]">{data.ergebnis}</p>
          {data.kennzahlen && data.kennzahlen.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-6">
              {data.kennzahlen.map(({ label, value }) => (
                <div key={label} className="rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--card)] px-6 py-4">
                  <span className="block text-sm text-[var(--steel-graphite)]">{label}</span>
                  <span className="font-primary text-xl font-semibold text-[var(--brand-accent)]">{value}</span>
                </div>
              ))}
            </div>
          )}
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-16">
          <ShinyLink href="/kontakt">Projekt anfragen</ShinyLink>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
