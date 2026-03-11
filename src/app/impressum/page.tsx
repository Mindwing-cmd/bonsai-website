import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export const metadata = {
  title: "Impressum – BonS-AI",
  description: "Impressum und Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <h1 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            Impressum
          </h1>
          <p className="mt-4 text-sm text-[var(--steel-graphite)]">Angaben gemäß § 5 TMG</p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12 space-y-8 text-[var(--steel-graphite)]">
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Anbieter</h2>
            <p className="mt-2">
              BonS-AI<br />
              [Firmenname / Inhaber]<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Kontakt</h2>
            <p className="mt-2">
              E-Mail: bonsai.schwinger@gmail.com<br />
              Telefon: +49 1515 6197764
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Umsatzsteuer-ID</h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr.]
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Verantwortlich für den Inhalt</h2>
            <p className="mt-2">
              [Name und Anschrift]
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Streitschlichtung</h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-accent)] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
