import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { DatenschutzContent } from "@/components/DatenschutzContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("datenschutz");

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
