import { LEGAL } from "@/data/legal";
import { SEO_BASE_URL, SEO_LOCAL, SEO_SITE } from "@/data/seo";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": SEO_LOCAL.businessType,
    name: LEGAL.companyName,
    description: SEO_SITE.defaultDescription,
    url: SEO_BASE_URL,
    sameAs: SEO_LOCAL.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL.strasse || undefined,
      postalCode: LEGAL.postalCode || undefined,
      addressLocality: LEGAL.city || undefined,
      addressRegion: LEGAL.region || undefined,
      addressCountry: "DE",
    },
    areaServed: SEO_LOCAL.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: LEGAL.email || undefined,
      telephone: LEGAL.telefonInternational || undefined,
      availableLanguage: "German, English",
      areaServed: LEGAL.region || SEO_SITE.primaryRegion,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
