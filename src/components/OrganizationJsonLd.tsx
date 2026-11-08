import { LEGAL } from "@/data/legal";
import {
  SEO_BASE_URL,
  SEO_LOCAL,
  SEO_PERSON,
  SEO_SITE,
  SITE_LOGO_SQUARE_PATH,
  SITE_LOGO_WIDE_PATH,
} from "@/data/seo";

export function OrganizationJsonLd() {
  const organization = {
    "@type": SEO_LOCAL.businessType,
    "@id": `${SEO_BASE_URL}#organization`,
    name: LEGAL.companyName,
    description: SEO_SITE.defaultDescription,
    url: SEO_BASE_URL,
    logo: `${SEO_BASE_URL}${SITE_LOGO_SQUARE_PATH}`,
    image: `${SEO_BASE_URL}${SITE_LOGO_WIDE_PATH}`,
    email: LEGAL.email,
    telephone: LEGAL.telefonInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL.strasse,
      postalCode: LEGAL.postalCode,
      addressLocality: LEGAL.city,
      addressRegion: LEGAL.region,
      addressCountry: "DE",
    },
    areaServed: SEO_LOCAL.areaServed,
    founder: { "@id": `${SEO_BASE_URL}#person` },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: LEGAL.email,
      telephone: LEGAL.telefonInternational,
      availableLanguage: "de",
      areaServed: "DE",
    },
  };

  const person = {
    "@type": "Person",
    "@id": `${SEO_BASE_URL}#person`,
    name: SEO_PERSON.name,
    jobTitle: SEO_PERSON.role,
    image: SEO_PERSON.image,
    url: `${SEO_BASE_URL}/ueber-uns`,
    worksFor: { "@id": `${SEO_BASE_URL}#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: LEGAL.city,
      addressRegion: LEGAL.region,
      addressCountry: "DE",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SEO_BASE_URL}#website`,
    name: SEO_SITE.brand,
    url: SEO_BASE_URL,
    description: SEO_SITE.defaultDescription,
    inLanguage: "de-DE",
    publisher: { "@id": `${SEO_BASE_URL}#organization` },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organization, person, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
