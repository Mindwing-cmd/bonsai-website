import { LEGAL } from "@/data/legal";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bons-ai.de";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LEGAL.companyName,
    description: "Digitales Studio aus Thüringen: Webdesign, KI-Systeme und digitale Innovation. Für Unternehmen in Thüringen und darüber hinaus.",
    url: BASE_URL,
    sameAs: [] as string[],
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL.strasse,
      postalCode: LEGAL.postalCode,
      addressLocality: LEGAL.city,
      addressRegion: LEGAL.region,
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "State", name: "Thüringen" },
      { "@type": "City", name: "Erfurt" },
      { "@type": "City", name: "Jena" },
      { "@type": "City", name: "Gera" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: LEGAL.email,
      telephone: LEGAL.telefonInternational,
      availableLanguage: "German, English",
      areaServed: LEGAL.region,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
