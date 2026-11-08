import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { ShinyLink } from "@/components/ui/shiny-button";
import { PushCaseStudy } from "@/components/PushCaseStudy";
import { ZahnaerzteAmInnCaseStudy } from "@/components/ZahnaerzteAmInnCaseStudy";
import { LindoraCaseStudy } from "@/components/LindoraCaseStudy";
import { NaturverbundenJenaCaseStudy } from "@/components/NaturverbundenJenaCaseStudy";
import { JsonLd } from "@/components/JsonLd";
import { buildContentMetadata, webPageJsonLd } from "@/data/seo";

const REFERENZ_SEO: Record<string, { title: string; description: string }> = {
  "innovation-mvp": {
    title: "Case Study zur Fitness-App Push von BonS-AI, Thüringen",
    description:
      "Case Study zur Fitness-App Push von BonS-AI: Accountability, Gamification und KI-Optimierung. Produktstrategie, UX und Full-Stack-Entwicklung im Überblick.",
  },
  "zahnaerzte-am-inn": {
    title: "Case Study Zahnärzte am Inn: Praxiswebsite | BonS-AI",
    description:
      "Case Study Zahnärzte am Inn von BonS-AI: Praxiswebsite für Mühldorf und Töging, mit Kontaktformular, SEO und DSGVO-Seiten, umgesetzt mit Next.js und Resend.",
  },
  "lindora-home": {
    title: "Case Study Lindora-Home: Onlineshop mit CMS | BonS-AI",
    description:
      "Case Study Lindora-Home von BonS-AI: Onlineshop für handgegossene Kerzen mit Katalog, Stripe-Checkout, Pflege-CMS und Shop-Rechtstexten. Auf Next.js umgesetzt.",
  },
  "naturverbunden-jena": {
    title: "Case Study Naturverbunden Jena mit Local SEO | BonS-AI",
    description:
      "Case Study Naturverbunden Jena von BonS-AI: ruhige Website für naturnahe Gespräche in Jena, mit Begleitung, FAQ, Kontakt und Local SEO. Auf Next.js umgesetzt.",
  },
};

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
  "lindora-home": {
    title: "Lindora-Home – Onlineshop mit CMS",
    ausgangslage: "Handgegossene Kerzen aus Magdeburg brauchten einen verkaufsbereiten Shop inkl. Wunschkerzen, Pflege und Rechtstexten.",
    lösung: "Next.js-Onlineshop mit Katalog, Warenkorb, Stripe-Checkout, Admin-/CMS-Bereich, Supabase und Shop-Rechtstexten.",
    prozess: ["Briefing & Sortiment", "Informationsarchitektur", "Design & Marke", "Shop-Umsetzung", "CMS / Pflege", "Integrationen", "Recht & SEO", "Launch"],
    ergebnis: "Verkaufsbereiter Shop mit CMS-Pflege, Checkout und rechtssicheren Seiten – wartbar ohne Agentur-Engpass.",
  },
  "naturverbunden-jena": {
    title: "Naturverbunden Jena",
    ausgangslage: "Für naturnahe psychologisch-therapeutische Gespräche fehlte eine ruhige, vertrauenswürdige Webpräsenz mit Local SEO für Jena.",
    lösung: "Content-Website mit Begleitung, Über mich, FAQ, Kontakt, Impressum und Datenschutz – Next.js, klare Struktur, Local SEO.",
    prozess: ["Briefing & Positionierung", "Informationsarchitektur", "Design & Atmosphäre", "Content & Angebot", "Umsetzung", "SEO & Vertrauen", "Launch"],
    ergebnis: "Live unter www.naturverbunden-jena.de: klare Angebotswege, Vertrauensaufbau und regionale Auffindbarkeit.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const seo = REFERENZ_SEO[slug];
  if (!seo) {
    return buildContentMetadata({
      title: "Referenz von BonS-AI aus Stadtilm, Thüringen",
      description:
        "Referenz von BonS-AI, dem Digital Studio von Bastian Schwinger in Stadtilm. Case Studies zu Websites, Shops und Apps aus Thüringen.",
      path: `/referenzen/${slug}`,
    });
  }
  return buildContentMetadata({
    title: seo.title,
    description: seo.description,
    path: `/referenzen/${slug}`,
  });
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default async function ReferenzDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  if (!data) notFound();

  const seo = REFERENZ_SEO[slug];
  const schema = seo ? (
    <JsonLd data={webPageJsonLd(seo.title, seo.description, `/referenzen/${slug}`)} />
  ) : null;

  if (slug === "innovation-mvp") {
    return (
      <>
        {schema}
        <PushCaseStudy />
      </>
    );
  }
  if (slug === "zahnaerzte-am-inn") {
    return (
      <>
        {schema}
        <ZahnaerzteAmInnCaseStudy />
      </>
    );
  }
  if (slug === "lindora-home") {
    return (
      <>
        {schema}
        <LindoraCaseStudy />
      </>
    );
  }
  if (slug === "naturverbunden-jena") {
    return (
      <>
        {schema}
        <NaturverbundenJenaCaseStudy />
      </>
    );
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
