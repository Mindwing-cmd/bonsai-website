import type { Metadata, Viewport } from "next";
import { Libre_Bodoni, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieBanner } from "@/components/CookieBanner";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { buildPageMetadata, getWebmasterVerification } from "@/data/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontPrimary = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});
const fontBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const fontSecondary = DM_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0812",
};

export const metadata: Metadata = {
  ...buildPageMetadata("home"),
  verification: getWebmasterVerification(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`dark ${fontPrimary.variable} ${fontBody.variable} ${fontSecondary.variable}`}
      style={{
        fontFamily: "var(--font-body), system-ui, sans-serif",
      }}
    >
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <OrganizationJsonLd />
        <SmoothScroll>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CookieBanner />
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
