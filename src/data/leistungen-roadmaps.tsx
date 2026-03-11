import React from "react";

export type RoadmapStep = { title: string; content: React.ReactNode };

export type RoadmapData = {
  introText: string;
  steps: RoadmapStep[];
  ctaSubtext?: string;
};

export const ROADMAPS: Record<string, RoadmapData> = {
  "ki-systeme": {
    introText:
      "Von der Idee bis zum produktiven KI-System: Anforderung, Daten, Modell-Integration, Entwicklung und Rollout – klar strukturiert und laienverständlich.",
    steps: [
      {
        title: "Anforderung & Use-Case",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Welches Problem soll die KI lösen (z. B. Automatisierung, Auswertung, Chatbot)? Welche Nutzer und Schnittstellen (API, App, Website)? Rahmenbedingungen: Datenverfügbarkeit, rechtliche Aspekte.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Klarer Use-Case, Zieldefinition, erste Anforderungsliste.
            </p>
          </>
        ),
      },
      {
        title: "Daten & Schnittstellen",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Welche Daten stehen zur Verfügung (Struktur, Qualität, Menge)? APIs, Datenbanken, Cloud-Dienste. Anforderungen an Datenschutz und Sicherheit.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Daten- und Schnittstellenkonzept, technische Machbarkeit.
            </p>
          </>
        ),
      },
      {
        title: "KI-Modell & Integration",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Wahl des Modells (z. B. Sprach-KI, Klassifikation, Automatisierung), Integration über API oder eigenes Modell. Nutzerführung und Fehlerbehandlung.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Architektur für KI-Komponente, Integrationsplan.
            </p>
          </>
        ),
      },
      {
        title: "Entwicklung & Tests",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Umsetzung der Anwendung: Backend, Frontend, Anbindung an das KI-Modell. Tests mit echten Nutzern und Daten, Performance und Stabilität prüfen.
          </p>
        ),
      },
      {
        title: "Rollout & Monitoring",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Technisch: Deployment in Produktion (z. B. Cloud), Einrichtung von Monitoring und Kennzahlen. Nutzerfeedback und Fehlerbehebung.
          </p>
        ),
      },
      {
        title: "Wartung & Skalierung",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Laufende Updates, Anpassung des Modells an neue Anforderungen, Skalierung bei wachsender Nutzung. Dokumentation und Support.
          </p>
        ),
      },
    ],
    ctaSubtext:
      "Wir bauen KI-Systeme, die zu Ihrem Geschäft passen – messbar, wartbar und verständlich erklärt.",
  },
  innovation: {
    introText:
      "Von der Strategie bis zum Launch: Konzept, Nutzererlebnis, Design, MVP-Entwicklung, Test und Iteration – strukturiert und zielorientiert.",
    steps: [
      {
        title: "Strategie & Ziel",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Geschäftsziel (z. B. App für Kunden, interne Tool), Zielgruppe, Plattformen (Web, iOS, Android). Priorisierung der Features für ein erstes Release.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Projektbrief, Roadmap, klare Meilensteine.
            </p>
          </>
        ),
      },
      {
        title: "Konzept & Nutzererlebnis",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: User Flows, Informationsarchitektur, Kernfunktionen. Nutzerführung und Erreichbarkeit der Ziele (z. B. Buchung, Bestellung).
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Konzept-Dokument, Wireframes, Nutzererlebnis-Strategie.
            </p>
          </>
        ),
      },
      {
        title: "Design & Prototyp",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Visuelles Design, Komponenten, Responsive Verhalten. Klickbarer Prototyp zum Testen der Abläufe vor der Entwicklung.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Design-System, interaktiver Prototyp, Freigabe für Entwicklung.
            </p>
          </>
        ),
      },
      {
        title: "Entwicklung (MVP)",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Umsetzung des Minimum Viable Product: Kern-Features zuerst, saubere Architektur, Anbindung an Backend oder APIs. Moderne Stacks (z. B. React, React Native) für Web und Mobile.
          </p>
        ),
      },
      {
        title: "Test & Launch",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Technisch: QA, Gerätetests, Performance. Deployment und Veröffentlichung (App Stores, Web). Monitoring und erste Nutzerbegleitung.
          </p>
        ),
      },
      {
        title: "Iteration & Skalierung",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Auswertung von Feedback und Kennzahlen, Priorisierung neuer Features, Releases und Skalierung. Wartung und Weiterentwicklung.
          </p>
        ),
      },
    ],
    ctaSubtext:
      "Wir entwickeln Web- und Mobile-Apps mit klarem Prozess – von der Idee bis zum Launch und darüber hinaus.",
  },
  "paid-ads": {
    introText:
      "Von der Zieldefinition über Kampagnen-Setup und Creatives bis zu Optimierung und Reporting – zielgerichtet und messbar.",
    steps: [
      {
        title: "Ziele & Zielgruppe",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Was soll erreicht werden (Leads, Verkäufe, Reichweite)? Wer ist die Zielgruppe? Welche Kennzahlen zählen (Conversion, Klicks, Budget)?
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Kampagnenstrategie, Zieldefinition, Zielgruppenbeschreibung.
            </p>
          </>
        ),
      },
      {
        title: "Kanäle & Budget",
        content: (
          <>
            <p className="mb-4 text-sm text-[var(--steel-graphite)] md:text-base">
              Technisch: Wahl der Kanäle (Google Ads, Meta, LinkedIn etc.) passend zu Ziel und Zielgruppe. Budgetverteilung und erwartete Reichweite.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] md:text-base">
              Ergebnis: Kanal-Mix, Budgetplan, Meilensteine.
            </p>
          </>
        ),
      },
      {
        title: "Kampagnen-Setup",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Technisch: Anzeigenkonten einrichten, Kampagnenstruktur (Such-, Display-, Social), Targeting (Keywords, Interessen, Demografie), Bidding-Strategie.
          </p>
        ),
      },
      {
        title: "Creatives & Anzeigen",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Texte, Bilder und Formate pro Kanal. A/B-Varianten für bessere Performance. Ansprechende Anzeigen, die zur Zielgruppe und zum Ziel passen.
          </p>
        ),
      },
      {
        title: "Launch & Optimierung",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Technisch: Kampagnen starten, Tracking prüfen (z. B. Conversion, Klicks). Laufende Optimierung: Gebote, Targeting, Creatives anhand der Kennzahlen anpassen.
          </p>
        ),
      },
      {
        title: "Auswertung & Reporting",
        content: (
          <p className="text-sm text-[var(--steel-graphite)] md:text-base">
            Regelmäßige Auswertung: KPIs, Kosten, Conversion, ROAS. Klares Reporting für Sie – verständlich und handlungsorientiert. Empfehlungen für nächste Schritte.
          </p>
        ),
      },
    ],
    ctaSubtext:
      "Wir setzen Paid Ads zielgerichtet um – messbar, transparent und mit Fokus auf Ihre Kennzahlen.",
  },
};
