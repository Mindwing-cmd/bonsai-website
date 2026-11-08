import Link from "next/link";
import Image from "next/image";
import { LEGAL } from "@/data/legal";
import { SITE_LOGO_WIDE_PATH } from "@/data/seo";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[var(--light-industrial)] bg-[var(--background)] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-10 brand-divider">
          <span className="shrink-0 font-secondary text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
            Webdesign und digitale Innovation
          </span>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="flex flex-col md:border-r md:border-[var(--light-industrial)] md:pr-8">
            <Link href="/" className="inline-flex w-fit items-center">
              <Image
                src={SITE_LOGO_WIDE_PATH}
                alt="Logo von BonS-AI"
                width={200}
                height={64}
                className="h-12 w-auto max-w-[180px] object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
              Webdesign, KI-Systeme, Apps &amp; Paid Ads – präzise, technisch, messbar.
            </p>
            <p className="mt-6 text-sm text-[var(--muted-foreground)]">
              © {new Date().getFullYear()} BonS-AI
            </p>
          </div>

          <div className="flex flex-col border-t border-[var(--light-industrial)] pt-10 md:border-t-0 md:border-r md:border-[var(--light-industrial)] md:pt-0 md:pr-8">
            <h2 className="font-primary text-base font-semibold text-[var(--deep-carbon)]">
              <span className="border-b-2 border-[var(--brand-accent)]">Kontakt</span>
            </h2>
            <address className="mt-4 not-italic text-sm leading-snug text-[var(--muted-foreground)]">
              <span className="block text-[var(--deep-carbon)]">
                {LEGAL.companyName} · {LEGAL.anbieter}
              </span>
              <span className="mt-1 block">
                {LEGAL.strasse}
                <br />
                {LEGAL.plzOrt}
              </span>
              <span className="mt-2 flex flex-col gap-0">
                <a
                  href={`mailto:${LEGAL.email}`}
                  className="inline-flex min-h-11 w-fit items-center text-[var(--muted-foreground)] transition-colors hover:text-[var(--brand-accent)]"
                >
                  {LEGAL.email}
                </a>
                <a
                  href={`tel:${LEGAL.telefonInternational}`}
                  className="inline-flex min-h-11 w-fit items-center text-[var(--muted-foreground)] transition-colors hover:text-[var(--brand-accent)]"
                >
                  {LEGAL.telefon}
                </a>
              </span>
            </address>
          </div>

          <div className="flex flex-col border-t border-[var(--light-industrial)] pt-10 md:border-t-0 md:pt-0">
            <h2 className="font-primary text-base font-semibold text-[var(--deep-carbon)]">
              <span className="border-b-2 border-[var(--brand-accent)]">Rechtliches</span>
            </h2>
            <nav
              className="mt-4 flex flex-col gap-0 text-sm text-[var(--muted-foreground)]"
              aria-label="Rechtliches"
            >
              <Link
                href="/impressum"
                className="flex min-h-[44px] w-fit items-center py-1 leading-tight transition-colors hover:text-[var(--brand-accent)]"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="flex min-h-[44px] w-fit items-center py-1 leading-tight transition-colors hover:text-[var(--brand-accent)]"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
