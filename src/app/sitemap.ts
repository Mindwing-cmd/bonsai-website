import { MetadataRoute } from "next";
import { SEO_BASE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const leistungen = ["webdesign", "ki-systeme", "innovation", "paid-ads"];
  const referenzen = ["innovation-mvp", "zahnaerzte-am-inn"];
  const preise = ["wartung", "webdesign"];

  const staticPages: MetadataRoute.Sitemap = [
    { url: SEO_BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SEO_BASE_URL}/leistungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SEO_BASE_URL}/preise`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SEO_BASE_URL}/referenzen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SEO_BASE_URL}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SEO_BASE_URL}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SEO_BASE_URL}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SEO_BASE_URL}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const leistungUrls = leistungen.map((slug) => ({
    url: `${SEO_BASE_URL}/leistungen/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const referenzUrls = referenzen.map((slug) => ({
    url: `${SEO_BASE_URL}/referenzen/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const preisUrls = preise.map((slug) => ({
    url: `${SEO_BASE_URL}/preise/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...leistungUrls, ...referenzUrls, ...preisUrls];
}
