import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieBanner } from "@/components/CookieBanner";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bons-ai.de";

const fontPrimary = Outfit({
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
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "BonS-AI – Webdesign & KI-Systeme aus Thüringen",
  description:
    "Digitales Studio aus Thüringen: Webdesign, KI-Systeme und digitale Innovation. Präzise, minimal, zukunftssicher – für Unternehmen in Thüringen und darüber hinaus.",
  openGraph: {
    title: "BonS-AI – Webdesign & KI-Systeme aus Thüringen",
    description:
      "Digitales Studio aus Thüringen: Webdesign, KI-Systeme und digitale Innovation. Für Unternehmen in Thüringen und darüber hinaus.",
    url: BASE_URL,
    siteName: "BonS-AI",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BonS-AI – Webdesign & KI-Systeme aus Thüringen",
    description:
      "Digitales Studio aus Thüringen: Webdesign, KI-Systeme und digitale Innovation.",
  },
  alternates: {
    canonical: BASE_URL,
  },
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
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var ids=['lavender-iron','coral-steel','carbon-copper','titanium'];var t=ids[Math.floor(Math.random()*ids.length)];document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <OrganizationJsonLd />
        <ThemeProvider>
          <SmoothScroll>
            <SiteHeader />
            {children}
            <SiteFooter />
            <CookieBanner />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
