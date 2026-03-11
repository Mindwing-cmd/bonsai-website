import Image from "next/image";
import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { CelestialSphere } from "@/components/ui/celestial-sphere";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Über uns – BonS-AI",
  description: "Technologie-getriebenes Digital Studio. Wer wir sind und wie wir arbeiten.",
};

const WERTE = [
  { nummer: "01", title: "Technologie & Präzision" },
  { nummer: "02", title: "Höchste Qualitätsstandards" },
  { nummer: "03", title: "Transparenz und Vertrauen" },
  { nummer: "04", title: "Partnerschaft auf Augenhöhe" },
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero-Section mit Celestial-Sphere-Hintergrund, Headline, CTAs und zwei Glass-Karten */}
      <section className="relative min-h-[80vh] overflow-hidden py-24 md:py-32">
        <CelestialSphere
          hue={210}
          speed={0.35}
          zoom={1.2}
          particleSize={3}
          mouseInfluence={0.12}
          saturation={0.4}
          className="absolute inset-0 h-full w-full"
        />
        <div
          className="absolute inset-0 z-[1] bg-[var(--background)]/75"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
          <FadeInOnScroll className="text-center">
            <h1 className="font-primary text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
              Ihre digitale Präsenz – unser Anspruch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--steel-graphite)] md:text-lg">
              Mit Kompetenz und Fokus: Moderne Web- und KI-Lösungen, die auf Sie eingehen – von der Strategie bis zum Launch.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl border-2 border-transparent bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] transition-all hover:opacity-95 hover:shadow-md"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/#leistungen"
                className="rounded-xl border-2 border-[var(--steel-graphite)] bg-transparent px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
              >
                Unsere Leistungen
              </Link>
            </div>
          </FadeInOnScroll>

          {/* Zwei Glassmorphism-Karten – scharfe Kanten, Bild löst sich von der Box */}
          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {/* Linke Karte: Großes Portrait außerhalb der Box + Text in Karte */}
            <FadeInOnScroll>
              <div className="relative flex min-h-[280px] flex-col overflow-visible lg:min-h-[320px] lg:flex-row lg:items-end">
                {/* Bild: wesentlich größer, auf Mobil oben, ab lg links und aus der Box gelöst */}
                <div className="relative z-0 mx-auto w-[min(100%,320px)] shrink-0 lg:absolute lg:left-0 lg:bottom-0 lg:mx-0 lg:w-[380px] xl:w-[420px]">
                  <Image
                    src="/images/bastian.png"
                    alt="Bastian – BonS-AI"
                    width={520}
                    height={680}
                    className="w-full object-contain object-bottom"
                    priority
                  />
                </div>
                {/* Karte nur für Text – Bild liegt daneben bzw. darunter */}
                <div
                  className="relative z-10 mt-6 rounded-xl border-2 border-[var(--steel-graphite)]/30 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow lg:ml-44 lg:mt-0 lg:min-w-[280px] xl:ml-52 xl:p-8"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                >
                  <p className="text-sm text-[var(--steel-graphite)] md:text-base">
                    Unser Team bietet Ihnen eine zielgerichtete Beratung und Umsetzung mit modernster Technik – für Projekte, die messbar wirken.
                  </p>
                  <p className="mt-4 font-primary text-xl font-bold text-[var(--foreground)]">Bastian</p>
                  <p className="text-sm text-[var(--steel-graphite)]">Gründer & Creative Director</p>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Rechte Karte: Werte + Standort – scharfe Kanten */}
            <FadeInOnScroll>
              <div
                className="relative overflow-hidden rounded-xl border-2 border-[var(--steel-graphite)]/30 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:shadow-glow md:p-8"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
              >
                <ul className="space-y-0">
                  {WERTE.map((item, i) => (
                    <li key={item.nummer} className="border-b border-[var(--steel-graphite)]/20 py-4 last:border-0">
                      <span className="font-primary text-sm font-semibold text-[var(--brand-accent)]">{item.nummer}</span>
                      <span className="ml-3 text-[var(--foreground)]">{item.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[var(--steel-graphite)]/20">
                  <p className="font-primary text-lg font-bold text-[var(--foreground)]">Für Sie da</p>
                  <p className="mt-1 text-sm text-[var(--steel-graphite)]">
                    BonS-AI – Ihr Partner für Webdesign, KI-Systeme und digitale Produkte.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <FadeInOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--foreground)] md:text-3xl">Positioning</h2>
            <p className="mt-6 max-w-2xl text-[var(--steel-graphite)]">
              Wir entwickeln digitale Produkte und Markenauftritte, die funktionieren und überzeugen. Von der Strategie über Design bis zur technischen Umsetzung – mit klarem Prozess und messbarem Ergebnis.
            </p>
          </FadeInOnScroll>

          <StaggeredReveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" childDelay={0.08}>
            {[
              { title: "Präzise", text: "Klare Strukturen, saubere Umsetzung, keine unnötigen Abweichungen." },
              { title: "Technisch", text: "Moderne Stacks, skalierbare Architektur, zukunftssicher." },
              { title: "Minimal", text: "Weniger ist mehr – Fokus auf das Wesentliche." },
              { title: "Selbstbewusst", text: "Souveräne Beratung und Umsetzung von der Idee bis zum Launch." },
            ].map((item) => (
              <StaggeredRevealItem key={item.title} className="flex">
                <Card
                  variant="glass"
                  className="h-full border-2 border-[var(--light-industrial)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/50 hover:shadow-glow"
                >
                  <CardHeader>
                    <CardTitle className="font-primary text-lg text-[var(--foreground)]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-[var(--steel-graphite)]">{item.text}</p>
                  </CardContent>
                </Card>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Ansatz & Prozess */}
      <section className="py-24 md:py-32 bg-[var(--background-alt)]">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <FadeInOnScroll>
            <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)]">Ansatz & Prozess</h2>
            <p className="mt-6 text-[var(--steel-graphite)]">
              Kurzes Kennenlerngespräch → klare Definition von Zielen und Scope → strukturierte Phasen mit Meilensteinen → Umsetzung mit regelmäßiger Abstimmung → Launch und optional Wartung. Transparent, ohne versteckte Überraschungen.
            </p>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}
