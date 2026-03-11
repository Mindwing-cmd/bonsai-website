import Link from "next/link";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { PricingCard, ShaderCanvas } from "@/components/ui/animated-glassy-pricing";
import { ShinyLink } from "@/components/ui/shiny-button";
import { WEBSEITEN_PLÄNE, WARTUNG_PLÄNE } from "@/data/preise-pakete";

export const metadata = {
  title: "Preise – BonS-AI",
  description: "Übersicht zu Webdesign-Preisen sowie Hosting und Wartung.",
};

export default function PreisePage() {
  return (
    <main className="relative min-h-screen pt-24">
      <div className="fixed top-24 left-0 right-0 bottom-0 z-0" aria-hidden>
        <ShaderCanvas />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <h1 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            <span className="border-b-2 border-[var(--brand-accent)]">Preise</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--steel-graphite)]">
            Transparente Orientierung für Webdesign sowie Hosting und Wartung. Individuelle Angebote nach Abstimmung.
          </p>
        </FadeInOnScroll>

        {/* 1. Pakete Webdesign */}
        <FadeInOnScroll className="mt-16">
          <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)]">
            <Link href="/preise/webdesign" className="hover:text-[var(--brand-accent)]">
              Pakete Webdesign
            </Link>
          </h2>
          <p className="mt-2 text-[var(--steel-graphite)]">
            Richtwerte je nach Umfang und Anforderungen. Einmalige Projektpreise.
          </p>
          <p className="mt-2">
            <Link
              href="/preise/webdesign"
              className="text-sm font-medium text-[var(--brand-accent)] hover:underline"
            >
              Pakete im Detail ansehen →
            </Link>
          </p>
          <StaggeredReveal className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6" childDelay={0.1}>
              {WEBSEITEN_PLÄNE.map((plan) => (
                <StaggeredRevealItem key={plan.planName}>
                  <PricingCard {...plan} />
                </StaggeredRevealItem>
              ))}
            </StaggeredReveal>
        </FadeInOnScroll>

        {/* 2. Pakete Web-Wartung */}
        <FadeInOnScroll className="mt-20">
          <h2 className="font-primary text-2xl font-bold text-[var(--deep-carbon)]">
            <Link href="/preise/wartung" className="hover:text-[var(--brand-accent)]">
              Pakete Web-Wartung
            </Link>
          </h2>
          <p className="mt-2 text-[var(--steel-graphite)]">
            Sicherer Betrieb und optional laufende Betreuung Ihrer Website.
          </p>
          <p className="mt-2">
            <Link
              href="/preise/wartung"
              className="text-sm font-medium text-[var(--brand-accent)] hover:underline"
            >
              Pakete im Detail ansehen →
            </Link>
          </p>
          <StaggeredReveal className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6" childDelay={0.1}>
              {WARTUNG_PLÄNE.map((plan) => (
                <StaggeredRevealItem key={plan.planName}>
                  <PricingCard {...plan} />
                </StaggeredRevealItem>
              ))}
            </StaggeredReveal>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-16">
          <p className="text-[var(--steel-graphite)]">
            Für KI-Systeme & Automatisierung sowie Web- und Mobile-Apps erstellen wir individuelle Angebote. Gern im Gespräch klären.
          </p>
          <div className="mt-8">
            <ShinyLink href="/kontakt" className="inline-flex rounded-xl px-6 py-3 text-sm">
              Anfrage stellen
            </ShinyLink>
          </div>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
