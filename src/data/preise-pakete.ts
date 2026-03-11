import type { PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import type { FeatureItem } from "@/components/ui/pricing-table";

/** Für Karten auf /preise und auf den Paket-Unterseiten */
export const WEBSEITEN_PLÄNE: PricingCardProps[] = [
  {
    planName: "Starter",
    description: "Kleine Website, bis 5 Seiten. Ideal für Einsteiger und persönliche Projekte.",
    price: "2.500",
    priceSuffix: " € einmalig",
    features: [
      "Bis 5 Unterseiten",
      "Responsives Design",
      "Kontaktformular",
      "SSL & Basis-SEO",
    ],
    buttonText: "Anfrage stellen",
    buttonVariant: "secondary",
    href: "/kontakt",
    compact: true,
  },
  {
    planName: "Business",
    description: "Mittlere Website mit CMS und Formularen. Für Unternehmen mit wachsendem Bedarf.",
    price: "5.000",
    priceSuffix: " € einmalig",
    features: [
      "Bis 15 Unterseiten",
      "CMS (z. B. WordPress/Next.js)",
      "Formulare & Integrationen",
      "Erweiterte SEO",
    ],
    buttonText: "Anfrage stellen",
    isPopular: true,
    buttonVariant: "primary",
    href: "/kontakt",
  },
  {
    planName: "Enterprise",
    description: "Umfangreiche Projekte, individuelle Leistungen. Maßgeschneidert für Ihr Vorhaben.",
    price: "Auf Anfrage",
    priceSuffix: "",
    features: [
      "Unbegrenzte Seiten",
      "Individuelle Funktionalität",
      "KI-Integration möglich",
      "Dedizierter Support",
    ],
    buttonText: "Gespräch vereinbaren",
    buttonVariant: "primary",
    href: "/kontakt",
    medium: true,
  },
];

export const WARTUNG_PLÄNE: PricingCardProps[] = [
  {
    planName: "Starter",
    description: "Sicherer Betrieb Ihrer Website. Hosting, SSL und grundlegende Absicherung.",
    price: "99",
    priceSuffix: " €/Monat",
    features: [
      "Hosting & SSL-Zertifikat",
      "Regelmäßige Sicherheits-Updates",
      "Backups",
      "E-Mail-Support",
    ],
    buttonText: "Anfrage stellen",
    buttonVariant: "secondary",
    href: "/kontakt",
    compact: true,
  },
  {
    planName: "Business",
    description: "Wartung und Support für laufende Pflege. Content-Anpassungen und technischer Support.",
    price: "399",
    priceSuffix: " €/Monat",
    features: [
      "Alles aus Starter",
      "Content-Pflege & kleine Anpassungen",
      "Technischer Support",
      "Stundenpakete oder Retainer",
    ],
    buttonText: "Anfrage stellen",
    isPopular: true,
    buttonVariant: "primary",
    href: "/kontakt",
  },
  {
    planName: "Enterprise",
    description: "Dedizierte Betreuung und Prioritäts-Support. Für anspruchsvolle Projekte.",
    price: "Auf Anfrage",
    priceSuffix: "",
    features: [
      "Alles aus Business",
      "Prioritäts-Support",
      "Individuelle Leistungen",
      "Fester Ansprechpartner",
    ],
    buttonText: "Gespräch vereinbaren",
    buttonVariant: "primary",
    href: "/kontakt",
    medium: true,
  },
];

/** Für Vergleichstabelle Pakete Webdesign (3 Spalten) */
export type PaketPlanTable = {
  name: string;
  badge: string;
  price: string;
  ctaText: string;
  ctaHref: string;
};

export const PAKETE_WEBDESIGN_TABLE: PaketPlanTable[] = [
  { name: "Starter", badge: "Bis 5 Seiten", price: "2.500 € einmalig", ctaText: "Anfrage stellen", ctaHref: "/kontakt" },
  { name: "Business", badge: "Bis 15 Seiten", price: "5.000 € einmalig", ctaText: "Anfrage stellen", ctaHref: "/kontakt" },
  { name: "Enterprise", badge: "Individuell", price: "Individuelles Angebot", ctaText: "Gespräch vereinbaren", ctaHref: "/kontakt" },
];

export const PAKETE_WEBDESIGN_FEATURES: FeatureItem[] = [
  { label: "Preis", values: ["2.500 € einmalig", "5.000 € einmalig", "Individuelles Angebot"] },
  { label: "Seitenumfang", values: ["Bis 5 Seiten", "Bis 15 Seiten", "Unbegrenzt"] },
  { label: "Responsives Design", values: [true, true, true] },
  { label: "Individuelles UI Design", values: ["Basis Designsystem", "Individuelles Designsystem", "Premium Design + UX Konzept"] },
  { label: "CMS (Content Management)", values: [false, true, true] },
  { label: "Kontaktformulare", values: [true, true, true] },
  { label: "Integrationen (z.B. Newsletter / CRM)", values: ["Basis", true, "Individuell"] },
  { label: "SEO Setup", values: ["Basis", "Erweitert", "Strategisch"] },
  { label: "Performance Optimierung", values: ["Standard", "Core Web Vitals optimiert", "Performance Engineering"] },
  { label: "Analytics & Tracking", values: ["Basis Tracking", "Event Tracking", "Analytics Dashboard"] },
  { label: "Security Hardening", values: [false, true, true] },
  { label: "AI Integrationen", values: [false, false, true] },
  { label: "Automationen", values: [false, false, true] },
  { label: "Support", values: ["Hosting", "Optional", "Priorisiert"] },
];

/** Für Vergleichstabelle Pakete Web-Wartung (3 Spalten) */
export const PAKETE_WARTUNG_TABLE: PaketPlanTable[] = [
  { name: "Starter", badge: "Hosting & Sicherheit", price: "99 €/Monat", ctaText: "Anfrage stellen", ctaHref: "/kontakt" },
  { name: "Business", badge: "Pflege & Support", price: "399 €/Monat", ctaText: "Anfrage stellen", ctaHref: "/kontakt" },
  { name: "Enterprise", badge: "Priorität & Dediziert", price: "Individuelles Angebot", ctaText: "Gespräch vereinbaren", ctaHref: "/kontakt" },
];

export const PAKETE_WARTUNG_FEATURES: FeatureItem[] = [
  { label: "Preis", values: ["99 €/Monat", "399 €/Monat", "Individuelles Angebot"] },
  { label: "Hosting & SSL-Zertifikat", values: [true, true, true] },
  { label: "Sicherheitsupdates", values: [true, true, true] },
  { label: "Automatische Backups", values: [true, true, true] },
  { label: "Monitoring (Uptime & Errors)", values: [true, true, true] },
  { label: "E-Mail Support", values: [true, true, true] },
  { label: "Content-Pflege & Anpassungen", values: [false, true, true] },
  { label: "Technischer Support", values: [false, true, true] },
  { label: "Performance Monitoring", values: [false, true, true] },
  { label: "Stundenkontingent / Retainer", values: [false, true, true] },
  { label: "Prioritäts-Support", values: [false, false, true] },
  { label: "Fester Ansprechpartner", values: [false, false, true] },
  { label: "Performance-Optimierungen", values: [false, "Optional", true] },
  { label: "Sicherheits-Audits", values: [false, "Optional", true] },
];
