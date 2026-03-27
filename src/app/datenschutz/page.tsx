import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { DatenschutzContent } from "@/components/DatenschutzContent";

export const metadata = {
  title: "Datenschutz – BonS-AI",
  description: "Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <h1 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-sm text-[var(--steel-graphite)]">Informationen gemäß Art. 13/14 DSGVO</p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <DatenschutzContent />
        </FadeInOnScroll>
      </div>
    </main>
  );
}
