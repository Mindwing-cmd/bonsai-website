import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { LEISTUNGEN_TEASER } from "@/data/leistungen-teaser";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("leistungen");

export default function LeistungenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background-alt)] pt-24">
      <Spotlight className="-top-40 left-0 fill-[var(--brand-accent)]" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-accent) 1px, transparent 1px),
                            linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)`,
          backgroundSize: "min(72px, 11vw) min(72px, 11vw)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_85%_55%_at_15%_-5%,color-mix(in_oklab,var(--brand-accent)_12%,transparent),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <h1 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            <span className="border-b-2 border-[var(--brand-accent)]">Leistungen</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--steel-graphite)]">
            BonS-AI – technologiegetriebenes Digital Studio aus Thüringen: Webdesign, KI-Systeme, Web- und
            Mobile-Apps sowie Paid Ads. Kurzüberblick mit Tiefgang auf den Detailseiten.
          </p>
        </FadeInOnScroll>

        <StaggeredReveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0} childDelay={0.08}>
          {LEISTUNGEN_TEASER.map((item) => (
            <StaggeredRevealItem key={item.slug} className="flex">
              <Link
                href={`/leistungen/${item.slug}`}
                className="group block h-full w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <Card
                  variant="glass"
                  className="h-full border-2 border-[var(--light-industrial)] transition-all duration-300 group-hover:border-[var(--brand-accent)]/50 group-hover:shadow-glow"
                >
                  <CardHeader>
                    <CardTitle className="font-primary text-[var(--deep-carbon)]">{item.title}</CardTitle>
                    <CardDescription className="text-[var(--steel-graphite)]">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-sm font-medium text-[var(--brand-accent)]">Details & Ablauf →</span>
                  </CardContent>
                </Card>
              </Link>
            </StaggeredRevealItem>
          ))}
        </StaggeredReveal>

        <FadeInOnScroll className="mt-16 rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background)]/75 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <p className="text-[var(--steel-graphite)]">
            Projekt oder Fragen zu einer Leistung? Wir melden uns in der Regel innerhalb von 24 Stunden.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex min-h-[44px] items-center rounded-xl bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] shadow-sm transition-all hover:opacity-95 hover:shadow-md"
          >
            Kontakt aufnehmen
          </Link>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
