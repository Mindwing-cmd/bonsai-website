import type { FeatureItem, PricingPlanType } from "@/components/ui/pricing-table";

export type LeistungVergleichPlan = Omit<PricingPlanType, "icon"> & { slug: string };

export const LEISTUNGEN_VERGLEICH_PLÄNE: LeistungVergleichPlan[] = [
  {
    slug: "webdesign",
    name: "Webdesign",
    badge: "Website",
    price: "Ab 2.500 €",
  },
  {
    slug: "ki-systeme",
    name: "KI-Systeme",
    badge: "KI & Automatisierung",
    price: "Auf Anfrage",
  },
  {
    slug: "innovation",
    name: "Apps",
    badge: "Web & Mobile",
    price: "Auf Anfrage",
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    badge: "Kampagnen",
    price: "Individuell",
  },
];

export const LEISTUNGEN_VERGLEICH_FEATURES: FeatureItem[] = [
  {
    label: "Konzeption & Strategie",
    values: [true, true, true, true],
  },
  {
    label: "UI/UX & visuelles Design",
    values: [true, true, true, false],
  },
  {
    label: "Responsive Website",
    values: [true, true, true, false],
  },
  {
    label: "CMS / Content-Pflege",
    values: [true, true, true, false],
  },
  {
    label: "KI-Integration",
    values: [false, true, "Optional", false],
  },
  {
    label: "App-Entwicklung (Web/iOS/Android)",
    values: [false, true, true, false],
  },
  {
    label: "Kampagnen-Setup & Optimierung",
    values: [false, false, false, true],
  },
  {
    label: "Tracking & Reporting",
    values: [true, true, true, true],
  },
  {
    label: "Hosting & Wartung",
    values: ["Optional", "Optional", "Optional", "—"],
  },
];
