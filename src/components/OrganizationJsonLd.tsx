const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bons-ai.de";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BonS-AI",
    description: "High-end technology-driven digital studio. Web design and AI-powered systems.",
    url: BASE_URL,
    sameAs: [] as string[],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "bonsai.schwinger@gmail.com",
      availableLanguage: "German, English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
