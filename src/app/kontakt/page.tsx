import { PremiumContactSection } from "@/components/PremiumContactSection";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildPageMetadata, webPageJsonLd } from "@/data/seo";
import Link from "next/link";

export const metadata = buildPageMetadata("kontakt");

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-24">
      <JsonLd data={webPageJsonLd(SEO_PAGES.kontakt.title, SEO_PAGES.kontakt.description, "/kontakt")} />
      <PremiumContactSection />
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background-alt)]/50 p-6 md:p-8">
            <p className="text-sm text-[var(--muted-foreground)] md:text-base">
              Für Unternehmen in Thüringen und darüber hinaus: Vor dem Gespräch mit Bastian Schwinger können Sie sich einen schnellen Überblick über Leistungen, Preise und Referenzen verschaffen.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="/leistungen" className="text-sm font-medium text-[var(--brand-accent)] hover:underline">
                Leistungen ansehen →
              </Link>
              <Link href="/referenzen" className="text-sm font-medium text-[var(--brand-accent)] hover:underline">
                Referenzen ansehen →
              </Link>
              <Link href="/preise" className="text-sm font-medium text-[var(--brand-accent)] hover:underline">
                Preise ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
