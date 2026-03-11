import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--light-industrial)] bg-[var(--background)] py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <span className="text-sm text-[var(--steel-graphite)]">
            © {new Date().getFullYear()} BonS-AI. Webdesign, KI-Systeme, Apps & Paid Ads.
          </span>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--steel-graphite)]" aria-label="Footer-Navigation">
            <Link href="/leistungen" className="transition-colors hover:text-[var(--brand-accent)]">
              Leistungen
            </Link>
            <Link href="/preise" className="transition-colors hover:text-[var(--brand-accent)]">
              Preise
            </Link>
            <Link href="/referenzen" className="transition-colors hover:text-[var(--brand-accent)]">
              Referenzen
            </Link>
            <Link href="/ueber-uns" className="transition-colors hover:text-[var(--brand-accent)]">
              Über uns
            </Link>
            <Link href="/kontakt" className="transition-colors hover:text-[var(--brand-accent)]">
              Kontakt
            </Link>
            <Link href="/impressum" className="transition-colors hover:text-[var(--brand-accent)]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-[var(--brand-accent)]">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
