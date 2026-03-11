import { FadeInOnScroll } from "@/components/FadeInOnScroll";

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

        <FadeInOnScroll className="mt-12 space-y-10 text-[var(--steel-graphite)]">
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">1. Verantwortliche Stelle</h2>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist BonS-AI, [Anschrift]. Kontakt: bonsai.schwinger@gmail.com, Telefon +49 1515 6197764.
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-2">
              Beim Besuch der Website werden automatisch Zugriffsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browser, ggf. Referrer) in Server-Logfiles erhoben. Diese Daten dienen der Sicherstellung des Betriebs und der Sicherheit und werden nach Ablauf gesetzlicher Aufbewahrungsfristen gelöscht.
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">3. Kontaktformular</h2>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet und gespeichert. Eine Weitergabe an Dritte erfolgt nicht, sofern nicht gesetzlich erforderlich.
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">4. Cookies und externe Dienste</h2>
            <p className="mt-2">
              Diese Website setzt nur technisch notwendige Cookies ein, soweit erforderlich. Externe Dienste (z. B. Einbettungen) können eigene Datenverarbeitungen vornehmen; dazu informieren wir gesondert bzw. verlinken die Anbieter-Datenschutzerklärungen.
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">5. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei einer Aufsichtsbehörde für den Datenschutz einreichen.
            </p>
          </section>
          <section>
            <h2 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">6. Änderungen</h2>
            <p className="mt-2">
              Diese Datenschutzerklärung kann bei Bedarf angepasst werden. Die aktuelle Version finden Sie stets auf dieser Seite.
            </p>
          </section>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
