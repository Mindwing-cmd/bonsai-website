"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ShinyLink } from "@/components/ui/shiny-button";

const LEISTUNGEN_ITEMS = [
  { href: "/leistungen/webdesign", label: "Webdesign" },
  { href: "/leistungen/ki-systeme", label: "KI-Systeme & Automatisierung" },
  { href: "/leistungen/innovation", label: "Web- und Mobile-Apps" },
  { href: "/leistungen/paid-ads", label: "Paid Ads" },
] as const;

const PREISE_ITEMS = [
  { href: "/preise", label: "Übersicht" },
  { href: "/preise/webdesign", label: "Leistungspakete (Webdesign)" },
  { href: "/preise/wartung", label: "Wartung & Betrieb" },
] as const;

const NAV_LINKS = [
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <nav className="flex flex-col gap-1 pt-4" aria-label="Hauptnavigation">
      <div className="border-b border-[var(--light-industrial)] pb-3">
        <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--steel-graphite)]">
          Leistungen
        </p>
        {LEISTUNGEN_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="block min-h-[44px] px-4 py-3 text-[var(--foreground)] transition-colors hover:bg-white/5 hover:text-[var(--brand-accent)]"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="border-b border-[var(--light-industrial)] pb-3">
        <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--steel-graphite)]">
          Preise
        </p>
        {PREISE_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="block min-h-[44px] px-4 py-3 text-[var(--foreground)] transition-colors hover:bg-white/5 hover:text-[var(--brand-accent)]"
          >
            {label}
          </Link>
        ))}
      </div>
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClose}
          className="block min-h-[44px] px-4 py-3 text-[var(--foreground)] transition-colors hover:bg-white/5 hover:text-[var(--brand-accent)]"
        >
          {label}
        </Link>
      ))}
      <div className="mt-4 px-4">
        <ShinyLink href="/kontakt" className="flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-3 text-center text-sm" onClick={onClose}>
          Projekt starten
        </ShinyLink>
      </div>
    </nav>
  );
}

export function MobileNavTrigger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border-2 border-[var(--light-industrial)] text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] md:hidden"
      aria-expanded={open}
      aria-label={open ? "Menü schließen" : "Menü öffnen"}
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
