import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LEGAL } from "@/data/legal";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[var(--light-industrial)] bg-[var(--background)] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Spalte 1: Marke */}
          <div className="flex flex-col md:border-r md:border-[var(--light-industrial)] md:pr-8">
            <p className="font-primary text-lg font-bold tracking-tight text-[var(--foreground)]">BonS-AI</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--steel-graphite)]">
              Webdesign, KI-Systeme, Apps &amp; Paid Ads – präzise, technisch, messbar.
            </p>
            <p className="mt-6 text-sm text-[var(--steel-graphite)]">
              © {new Date().getFullYear()} BonS-AI
            </p>
          </div>

          {/* Spalte 2: Kontakt */}
          <div className="flex flex-col border-t border-[var(--light-industrial)] pt-10 md:border-t-0 md:border-r md:border-[var(--light-industrial)] md:pt-0 md:pr-8">
            <h2 className="font-primary text-base font-semibold text-[var(--foreground)]">
              <span className="border-b-2 border-[var(--brand-accent)]">Kontakt</span>
            </h2>
            <address className="mt-4 not-italic text-sm leading-snug text-[var(--steel-graphite)]">
              <span className="block text-[var(--foreground)]">
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
                  className="inline-flex w-fit items-center py-1 text-[var(--steel-graphite)] transition-colors hover:text-[var(--brand-accent)]"
                >
                  {LEGAL.email}
                </a>
                <a
                  href={`tel:${LEGAL.telefonInternational}`}
                  className="inline-flex w-fit items-center py-1 text-[var(--steel-graphite)] transition-colors hover:text-[var(--brand-accent)]"
                >
                  {LEGAL.telefon}
                </a>
              </span>
            </address>
          </div>

          {/* Spalte 3: Farbkonzept & Rechtliches */}
          <div className="flex flex-col border-t border-[var(--light-industrial)] pt-10 md:border-t-0 md:pt-0">
            <h2 className="font-primary text-base font-semibold text-[var(--foreground)]">
              <span className="border-b-2 border-[var(--brand-accent)]">Farbkonzept</span>
            </h2>
            <div className="mt-4">
              <ThemeSwitcher />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[var(--steel-graphite)]">
              Rechtliches
            </p>
            <nav
              className="mt-1 flex flex-col gap-0 text-sm text-[var(--steel-graphite)]"
              aria-label="Rechtliches"
            >
              <Link
                href="/impressum"
                className="flex w-fit items-center py-0.5 leading-tight transition-colors hover:text-[var(--brand-accent)]"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="flex w-fit items-center py-0.5 leading-tight transition-colors hover:text-[var(--brand-accent)]"
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
