import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HomeContactForm } from "@/components/HomeContactForm";
import { LEISTUNGEN_TEASER } from "@/data/leistungen-teaser";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("home");

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Leistungen-Teaser mit Card-Highlight */}
      <ParallaxSection speed={0.3} className="relative py-24 md:py-32" id="leistungen">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-12">
          <FadeInOnScroll>
            <h2 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
              <span className="border-b-2 border-[var(--brand-accent)]">Unsere</span> Leistungen
            </h2>
          </FadeInOnScroll>
          <StaggeredReveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0} childDelay={0.08}>
            {LEISTUNGEN_TEASER.map((item) => (
              <StaggeredRevealItem key={item.slug} className="flex">
                <Link
                  href={`/leistungen/${item.slug}`}
                  className="group block h-full w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="relative h-full rounded-2xl">
                    <GlowingEffect
                      disabled={false}
                      variant="white"
                      spread={36}
                      borderWidth={2.5}
                      inactiveZone={0.3}
                      movementDuration={1.2}
                      proximity={50}
                    />
                    <Card variant="glass" className="relative h-full border-2 border-[var(--light-industrial)] transition-all duration-300 group-hover:border-[var(--brand-accent)]/50 group-hover:shadow-glow">
                      <CardHeader>
                        <CardTitle className="font-primary text-[var(--deep-carbon)]">{item.title}</CardTitle>
                        <CardDescription className="text-[var(--steel-graphite)]">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <span className="text-sm font-medium text-[var(--brand-accent)]">Mehr erfahren →</span>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
          <FadeInOnScroll className="mt-10">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/leistungen" className="font-medium text-[var(--brand-accent)] hover:underline">
                Alle Leistungen ansehen
              </Link>
              <span className="text-[var(--steel-graphite)]">•</span>
              <Link href="/referenzen" className="font-medium text-[var(--brand-accent)] hover:underline">
                Referenzen entdecken
              </Link>
              <span className="text-[var(--steel-graphite)]">•</span>
              <Link href="/preise" className="font-medium text-[var(--brand-accent)] hover:underline">
                Preise prüfen
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </ParallaxSection>

      {/* Über-uns-Teaser mit Spotlight-Highlight */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-[var(--background-alt)] text-[var(--foreground)]">
        <Spotlight className="-top-40 left-0 fill-[var(--brand-accent)]" />
        {/* Dezentes Raster für Struktur */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--brand-accent) 1px, transparent 1px),
                              linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)`,
            backgroundSize: "min(80px, 12vw) min(80px, 12vw)",
          }}
        />
        <ParallaxSection speed={-0.2} className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
          <FadeInOnScroll className="text-center">
            {/* Keyword-Pills für Kontext */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {["Webdesign", "KI-Systeme", "Apps", "Paid Ads"].map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-[var(--light-industrial)] bg-[var(--background)]/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--steel-graphite)]"
                >
                  {label}
                </span>
              ))}
            </div>
            <h2 className="mt-8 font-primary text-3xl font-bold md:text-4xl lg:text-5xl">
              Technologie-getriebenes{" "}
              <span className="border-b-2 border-[var(--brand-accent)] text-[var(--brand-accent)]">
                Digital Studio.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[var(--steel-graphite)] md:text-lg">
              Präzise, technisch, minimal, selbstbewusst – aus Thüringen für Unternehmen mit klaren Wachstumszielen.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ueber-uns"
                className="rounded-xl border-2 border-[var(--brand-accent)] bg-[var(--brand-accent)]/10 px-6 py-3 font-medium text-[var(--brand-accent)] transition-all hover:bg-[var(--brand-accent)] hover:text-[var(--brand-foreground)] hover:shadow-glow"
              >
                Über uns
              </Link>
              <Link
                href="/leistungen"
                className="rounded-xl border-2 border-[var(--light-industrial)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
              >
                Leistungen ansehen
              </Link>
            </div>
          </FadeInOnScroll>
        </ParallaxSection>
      </section>

      {/* Kontakt-Teaser */}
      <section className="py-24 md:py-32 bg-[var(--background-alt)]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <FadeInOnScroll className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="min-w-0 lg:col-span-2">
              <h2 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
                <span className="border-b-2 border-[var(--brand-accent)]">Kontakt</span> aufnehmen
              </h2>
              <p className="mt-6 text-[var(--steel-graphite)]">
                Projekt im Kopf? Für Unternehmen in Thüringen und darüber hinaus – wir melden uns zeitnah.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/kontakt"
                  className="shrink-0 rounded-xl bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-foreground)] shadow-sm transition-all hover:opacity-95 hover:shadow-md"
                >
                  Gespräch vereinbaren
                </Link>
                <a
                  href="mailto:bonsai.schwinger@gmail.com"
                  className="min-w-0 rounded-xl border-2 border-[var(--light-industrial)] px-4 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] sm:px-6 sm:break-all"
                >
                  bonsai.schwinger@gmail.com
                </a>
                <Link
                  href="/referenzen"
                  className="rounded-xl border-2 border-[var(--light-industrial)] px-4 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] sm:px-6"
                >
                  Referenzen ansehen
                </Link>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-3">
              <div className="rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background)]/50 p-6 md:p-8">
                <HomeContactForm />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}
