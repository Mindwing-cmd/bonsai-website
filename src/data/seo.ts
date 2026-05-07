import type { Metadata } from "next";

export const SEO_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bons-ai.de";

export type SeoPageKey =
  | "home"
  | "kontakt"
  | "ueberUns"
  | "leistungen"
  | "preise"
  | "referenzen"
  | "impressum"
  | "datenschutz";

type SeoPageConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  intent: string;
  internalLinks: string[];
};

export const SEO_SITE = {
  brand: "BonS-AI",
  defaultTitle: "BonS-AI – Webdesign & KI-Systeme aus Thüringen",
  defaultDescription:
    "Digitales Studio aus Thüringen: Webdesign, KI-Systeme und digitale Innovation für messbare Ergebnisse.",
  primaryRegion: "Thüringen",
  secondaryRegions: ["Erfurt", "Jena", "Gera", "deutschlandweit"] as const,
  keywords: [
    "Webdesign Thüringen",
    "KI-Systeme Thüringen",
    "Agentur Thüringen",
    "Webentwicklung Erfurt",
    "Digital Studio Thüringen",
  ] as const,
} as const;

export const SEO_PAGES: Record<SeoPageKey, SeoPageConfig> = {
  home: {
    title: "BonS-AI – Webdesign & KI-Systeme aus Thüringen",
    description:
      "Webdesign, KI-Systeme und digitale Innovation aus Thüringen. Für Unternehmen in Erfurt, Jena, Gera und darüber hinaus. Jetzt Projekt anfragen.",
    canonicalPath: "/",
    intent: "Startseite mit Leistungsüberblick und Conversion-Einstieg",
    internalLinks: ["/leistungen", "/referenzen", "/kontakt", "/preise"],
  },
  kontakt: {
    title: "Kontakt – BonS-AI",
    description:
      "Kontakt für Webdesign und KI-Systeme aus Thüringen. Wir melden uns in der Regel innerhalb von 24 Stunden mit einem klaren nächsten Schritt.",
    canonicalPath: "/kontakt",
    intent: "Lead-Generierung und Anfrageabschluss",
    internalLinks: ["/leistungen", "/referenzen", "/preise"],
  },
  ueberUns: {
    title: "Über uns – BonS-AI",
    description:
      "BonS-AI aus Thüringen: Technologiegetriebenes Team für Webdesign, KI-Systeme und digitale Produkte. Lernen Sie Arbeitsweise und Werte kennen.",
    canonicalPath: "/ueber-uns",
    intent: "Vertrauensaufbau über Team, Werte und Positionierung",
    internalLinks: ["/kontakt", "/leistungen", "/referenzen"],
  },
  leistungen: {
    title: "Leistungen – BonS-AI",
    description:
      "Leistungen aus Thüringen: Webdesign, KI-Systeme, Web- und Mobile-Apps sowie Paid Ads. Klar strukturiert, messbar und auf Wachstum ausgerichtet.",
    canonicalPath: "/leistungen",
    intent: "Leistungsverständnis und Angebotsqualifizierung",
    internalLinks: ["/kontakt", "/preise", "/referenzen"],
  },
  preise: {
    title: "Preise – BonS-AI",
    description:
      "Preise für Webdesign, Hosting und Wartung aus Thüringen. Transparente Pakete, klare Leistungsumfänge und individuelle Angebote für Ihr Projekt.",
    canonicalPath: "/preise",
    intent: "Preisorientierung und Angebotsvorbereitung",
    internalLinks: ["/kontakt", "/leistungen", "/referenzen"],
  },
  referenzen: {
    title: "Referenzen – BonS-AI",
    description:
      "Ausgewählte Referenzen aus Webdesign, KI und App-Projekten. Sehen Sie Ergebnisse, Prozesse und messbare Wirkung für Unternehmen aus Thüringen und darüber hinaus.",
    canonicalPath: "/referenzen",
    intent: "Proof durch Case Studies und Projektergebnisse",
    internalLinks: ["/kontakt", "/leistungen", "/preise"],
  },
  impressum: {
    title: "Impressum – BonS-AI",
    description: "Impressum und Pflichtangaben gemäß § 5 TMG für BonS-AI.",
    canonicalPath: "/impressum",
    intent: "Rechtliche Transparenz",
    internalLinks: ["/datenschutz", "/kontakt"],
  },
  datenschutz: {
    title: "Datenschutz – BonS-AI",
    description:
      "Datenschutzerklärung mit Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
    canonicalPath: "/datenschutz",
    intent: "Datenschutzinformation und DSGVO-Transparenz",
    internalLinks: ["/impressum", "/kontakt"],
  },
};

export const SEO_LOCAL = {
  businessType: "ProfessionalService",
  areaServed: [
    { "@type": "State", name: "Thüringen" },
    { "@type": "City", name: "Erfurt" },
    { "@type": "City", name: "Jena" },
    { "@type": "City", name: "Gera" },
  ],
  sameAs: [] as string[],
} as const;

function absoluteUrl(path: string) {
  if (!path || path === "/") return SEO_BASE_URL;
  return `${SEO_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata(pageKey: SeoPageKey): Metadata {
  const page = SEO_PAGES[pageKey];
  return {
    metadataBase: new URL(SEO_BASE_URL),
    title: page.title,
    description: page.description,
    keywords: [...SEO_SITE.keywords],
    alternates: {
      canonical: absoluteUrl(page.canonicalPath),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(page.canonicalPath),
      siteName: SEO_SITE.brand,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function buildLeistungMetadata(slug: string, title: string, outcome: string): Metadata {
  const regionalSuffix = "Für Unternehmen in Thüringen – klar, technisch und messbar umgesetzt.";
  return {
    metadataBase: new URL(SEO_BASE_URL),
    title: `${title} – BonS-AI`,
    description: `${outcome} ${regionalSuffix}`.slice(0, 160),
    keywords: [...SEO_SITE.keywords, `${title} Thüringen`],
    alternates: {
      canonical: absoluteUrl(`/leistungen/${slug}`),
    },
    openGraph: {
      title: `${title} – BonS-AI`,
      description: `${outcome} ${regionalSuffix}`.slice(0, 160),
      url: absoluteUrl(`/leistungen/${slug}`),
      siteName: SEO_SITE.brand,
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – BonS-AI`,
      description: `${outcome} ${regionalSuffix}`.slice(0, 160),
    },
  };
}

export function getWebmasterVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;
  if (!google && !bing) return undefined;
  return {
    google,
    other: bing ? { "msvalidate.01": bing } : undefined,
  };
}
