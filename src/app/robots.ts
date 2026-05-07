import { MetadataRoute } from "next";
import { SEO_BASE_URL } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/demo/"],
      },
    ],
    sitemap: `${SEO_BASE_URL}/sitemap.xml`,
  };
}
