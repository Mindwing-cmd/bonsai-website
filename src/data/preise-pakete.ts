import type { FeatureItem } from "@/components/ui/pricing-table";

/** Für Vergleichstabelle Pakete Webdesign (3 Spalten) */
export type PaketPlanTable = {
  name: string;
  badge: string;
  price: string;
  ctaText: string;
  ctaHref: string;
};

export const PAKETE_WEBDESIGN_TABLE: PaketPlanTable[] = [
  { name: "Starter", badge: "Bis 5 Seiten", price: "ab 2.499 € einmalig", ctaText: "Website-Projekt anfragen", ctaHref: "/kontakt" },
  { name: "Business", badge: "Bis 15 Seiten", price: "ab 4.999 € einmalig", ctaText: "Business-Projekt besprechen", ctaHref: "/kontakt" },
  { name: "Enterprise", badge: "Individuell", price: "Nach Projektumfang", ctaText: "Individuelles Konzept besprechen", ctaHref: "/kontakt" },
];

export const PAKETE_WEBDESIGN_FEATURES: FeatureItem[] = [
  { label: "Preis", values: ["ab 2.499 € einmalig", "ab 4.999 € einmalig", "Nach Projektumfang"] },
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
  { name: "Essential Care", badge: "Betrieb", price: "ab 99 € monatlich", ctaText: "Essential Care anfragen", ctaHref: "/kontakt" },
  { name: "Business Care", badge: "Betreuung", price: "ab 399 € monatlich", ctaText: "Betreuung anfragen", ctaHref: "/kontakt" },
  { name: "Enterprise Care", badge: "Partnerschaft", price: "Individuelles Serviceangebot", ctaText: "Servicekonzept besprechen", ctaHref: "/kontakt" },
];

export const PAKETE_WARTUNG_FEATURES: FeatureItem[] = [
  { label: "Preis", values: ["ab 99 € monatlich", "ab 399 € monatlich", "Individuelles Serviceangebot"] },
  { label: "Website-Hosting", values: [true, true, true] },
  { label: "SSL-Verschlüsselung", values: [true, true, true] },
  { label: "Sicherheitsupdates", values: [true, true, true] },
  { label: "Datensicherungen", values: [true, true, true] },
  { label: "Technische Absicherung", values: [true, true, true] },
  { label: "E-Mail-Support", values: [true, true, true] },
  { label: "Inhaltspflege", values: [false, true, true] },
  { label: "Kleinere Anpassungen", values: [false, true, true] },
  { label: "Technischer Support", values: [false, true, true] },
  { label: "Stundenkontingent", values: [false, true, true] },
  { label: "Weiterentwicklung", values: [false, "Unterstützung", "Kontinuierlich"] },
  { label: "Priorisierter Support", values: [false, false, true] },
  { label: "Fester Ansprechpartner", values: [false, false, true] },
  { label: "Individuelle Serviceleistungen", values: [false, false, true] },
  { label: "Erweiterte Überwachung", values: [false, false, true] },
  { label: "Performance- und Sicherheitsaudits", values: [false, false, "Optional"] },
];
