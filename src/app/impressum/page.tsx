import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { LEGAL } from "@/data/legal";

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
              {LEGAL.companyName}
              <br />
              {LEGAL.anbieter}
              <br />
              {LEGAL.strasse}
              <br />
              {LEGAL.plzOrt}
            </p>
          </section>

          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Kontakt</h2>
            <p className="mt-2">
              Telefon:{" "}
              <a href={`tel:${LEGAL.telefonInternational}`} className="text-[var(--brand-accent)] hover:underline">
                {LEGAL.telefon}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${LEGAL.email}`} className="text-[var(--brand-accent)] hover:underline">
                {LEGAL.email}
              </a>
            </p>
          </section>

          {LEGAL.ustIdNr ? (
            <section>
              <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Umsatzsteuer-ID</h2>
              <p className="mt-2">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {LEGAL.ustIdNr}
              </p>
            </section>
          ) : null}

          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-2">
              {LEGAL.verantwortlich}
            </p>
          </section>

          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">EU-Streitschlichtung</h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-accent)] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="border-t border-[var(--light-industrial)] pt-8 text-xs text-[var(--steel-graphite)]">
            <p>
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de/impressum-generator.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-accent)] hover:underline"
              >
                https://www.e-recht24.de/impressum-generator.html
              </a>
            </p>
          </section>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
