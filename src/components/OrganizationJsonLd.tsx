import { LEGAL } from "@/data/legal";
import { SEO_BASE_URL, SEO_LOCAL, SEO_PERSON, SEO_SITE } from "@/data/seo";

export function OrganizationJsonLd() {
  const organization = {
    "@type": SEO_LOCAL.businessType,
    "@id": `${SEO_BASE_URL}#organization`,
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

  const person = {
    "@type": "Person",
    "@id": `${SEO_BASE_URL}#person`,
    name: SEO_PERSON.name,
    jobTitle: SEO_PERSON.role,
    image: SEO_PERSON.image,
    url: SEO_PERSON.url,
    worksFor: { "@id": `${SEO_BASE_URL}#organization` },
    sameAs: SEO_PERSON.sameAs,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organization, person],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
