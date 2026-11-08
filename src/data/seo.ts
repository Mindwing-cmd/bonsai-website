import type { Metadata } from "next";

export const SEO_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bonsai-webdesign.de";

/** Logo im Header (Datei: `public/images/logo.png` – transparent). */
export const SITE_LOGO_PATH = "/images/logo.png";
/** Breites Logo für Header-Alternativen / Social. */
export const SITE_LOGO_WIDE_PATH = "/images/logo-wide.png";
/** Quadratisches Logo für Favicon / Apple Touch / OG. */
export const SITE_LOGO_SQUARE_PATH = "/images/logo-square-512.png";

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
  defaultTitle: "Webdesign und KI aus Stadtilm, Thüringen | BonS-AI",
  defaultDescription:
    "BonS-AI ist das Digital Studio von Bastian Schwinger in Stadtilm. Webdesign, KI-Systeme, Apps und Paid Ads für Unternehmen in Thüringen. Jetzt Projekt anfragen.",
  primaryRegion: "Thüringen",
  secondaryRegions: ["Stadtilm", "Erfurt", "Jena", "Gera", "deutschlandweit"] as const,
  keywords: [
    "Webdesign Thüringen",
    "KI-Systeme Thüringen",
    "Agentur Thüringen",
    "Webentwicklung Erfurt",
    "Digital Studio Thüringen",
  ] as const,
} as const;

export const SEO_PERSON = {
  name: "Bastian Schwinger",
  role: "Gründer & Creative Director",
  url: SEO_BASE_URL,
  image: `${SEO_BASE_URL}/images/bastian.webp`,
  sameAs: [] as string[],
} as const;

export const SEO_PAGES: Record<SeoPageKey, SeoPageConfig> = {
  home: {
    title: "Webdesign und KI aus Stadtilm, Thüringen | BonS-AI",
    description:
      "BonS-AI ist das Digital Studio von Bastian Schwinger in Stadtilm. Webdesign, KI-Systeme, Apps und Paid Ads für Unternehmen in Thüringen. Jetzt Projekt anfragen.",
    canonicalPath: "/",
    intent: "Startseite mit Leistungsüberblick und Conversion-Einstieg",
    internalLinks: ["/leistungen", "/referenzen", "/kontakt", "/preise"],
  },
  kontakt: {
    title: "Kontakt zu Bastian Schwinger in Stadtilm | BonS-AI",
    description:
      "Kontakt zu Bastian Schwinger von BonS-AI in Stadtilm: E-Mail, Telefon und Formular. Sie erhalten in der Regel innerhalb von 24 Stunden eine Rückmeldung.",
    canonicalPath: "/kontakt",
    intent: "Lead-Generierung und Anfrageabschluss",
    internalLinks: ["/leistungen", "/referenzen", "/preise"],
  },
  ueberUns: {
    title: "Über Bastian Schwinger und das Studio BonS-AI, Stadtilm",
    description:
      "Bastian Schwinger führt BonS-AI in Stadtilm, Thüringen. Digital Studio für Webdesign, KI-Systeme, Apps und Paid Ads – von der Strategie bis zum Launch.",
    canonicalPath: "/ueber-uns",
    intent: "Vertrauensaufbau über Person, Werte und Positionierung",
    internalLinks: ["/kontakt", "/leistungen", "/referenzen"],
  },
  leistungen: {
    title: "Leistungen: Webdesign, KI, Apps, Paid Ads | BonS-AI",
    description:
      "BonS-AI bietet Webdesign, KI-Systeme, Web- und Mobile-Apps sowie Paid Ads. Das Studio aus Stadtilm in Thüringen macht Leistungen klar und direkt anfragbar.",
    canonicalPath: "/leistungen",
    intent: "Leistungsverständnis und Angebotsqualifizierung",
    internalLinks: ["/kontakt", "/preise", "/referenzen"],
  },
  preise: {
    title: "Leistungen und Pakete: Webdesign ab 2.499 € | BonS-AI",
    description:
      "Webdesign bei BonS-AI ab 2.499 Euro, Wartung ab 99 Euro im Monat. Starter, Business, Enterprise sowie Essential Care, Business Care und Enterprise Care.",
    canonicalPath: "/preise",
    intent: "Preisorientierung und Angebotsvorbereitung",
    internalLinks: ["/kontakt", "/leistungen", "/referenzen"],
  },
  referenzen: {
    title: "Veröffentlichte Referenzen von BonS-AI: Websites und Apps",
    description:
      "Vier Referenzen von BonS-AI: Fitness-App Push, Zahnärzte am Inn, Onlineshop Lindora-Home und Naturverbunden Jena. Case Studies mit Ablauf und Ergebnis.",
    canonicalPath: "/referenzen",
    intent: "Proof durch Case Studies und Projektergebnisse",
    internalLinks: ["/kontakt", "/leistungen", "/preise"],
  },
  impressum: {
    title: "Impressum von Bastian Schwinger, BonS-AI in Stadtilm",
    description:
      "Impressum von BonS-AI: Bastian Schwinger, Nelkenweg 6, 99326 Stadtilm. Anschrift, Telefon, E-Mail und die Verantwortlichkeit für den Inhalt dieser Website.",
    canonicalPath: "/impressum",
    intent: "Rechtliche Transparenz",
    internalLinks: ["/datenschutz", "/kontakt"],
  },
  datenschutz: {
    title: "Datenschutzerklärung von BonS-AI in Stadtilm, Thüringen",
    description:
      "Datenschutzerklärung von BonS-AI, Bastian Schwinger in Stadtilm. Welche Daten verarbeitet werden und welche Rechte Ihnen die DSGVO bei einer Anfrage gibt.",
    canonicalPath: "/datenschutz",
    intent: "Datenschutzinformation und DSGVO-Transparenz",
    internalLinks: ["/impressum", "/kontakt"],
  },
};

export const SEO_LOCAL = {
  businessType: "ProfessionalService",
  areaServed: [
    { "@type": "City", name: "Stadtilm" },
    { "@type": "State", name: "Thüringen" },
    { "@type": "City", name: "Erfurt" },
    { "@type": "City", name: "Jena" },
    { "@type": "City", name: "Gera" },
    { "@type": "Country", name: "Deutschland" },
  ],
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path: string) {
  if (!path || path === "/") return SEO_BASE_URL;
  return `${SEO_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const ogImage = {
  url: SITE_LOGO_WIDE_PATH,
  alt: "Logo von BonS-AI",
};

export function buildContentMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(input.path);
  return {
    metadataBase: new URL(SEO_BASE_URL),
    title: { absolute: input.title },
    description: input.description,
    icons: {
      icon: SITE_LOGO_SQUARE_PATH,
      apple: SITE_LOGO_SQUARE_PATH,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SEO_SITE.brand,
      locale: "de_DE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [SITE_LOGO_WIDE_PATH],
    },
  };
}

export function buildPageMetadata(pageKey: SeoPageKey): Metadata {
  const page = SEO_PAGES[pageKey];
  return buildContentMetadata({
    title: page.title,
    description: page.description,
    path: page.canonicalPath,
  });
}

export function buildLeistungMetadata(slug: string, title: string, outcome: string): Metadata {
  return buildContentMetadata({
    title,
    description: outcome,
    path: `/leistungen/${slug}`,
  });
}

export function webPageJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "de-DE",
    isPartOf: { "@id": `${SEO_BASE_URL}#website` },
    about: { "@id": `${SEO_BASE_URL}#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SEO_BASE_URL}#organization` },
    areaServed: SEO_LOCAL.areaServed,
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
