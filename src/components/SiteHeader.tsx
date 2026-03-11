"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LeistungenNav } from "@/components/LeistungenNav";
import { PreiseNav } from "@/components/PreiseNav";
import { ShinyLink } from "@/components/ui/shiny-button";
import { MobileNav, MobileNavTrigger } from "@/components/MobileNav";

const navLinks = [
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--light-industrial)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="BonS-AI – Webdesign, KI-Systeme & Apps"
            width={140}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--steel-graphite)] md:flex">
          <LeistungenNav />
          <PreiseNav />
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg py-2 transition-colors hover:text-[var(--brand-accent)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ShinyLink
            href="/kontakt"
            className="rounded-xl px-4 py-2.5 text-sm min-h-0 min-w-0"
          >
            Projekt starten
          </ShinyLink>
        </div>

        <MobileNavTrigger open={mobileOpen} onClick={() => setMobileOpen((o) => !o)} />
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 top-16 z-30 bg-black/50 md:hidden"
          aria-label="Menü schließen"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {mobileOpen && (
        <div
          className="absolute left-0 right-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[var(--light-industrial)] bg-[var(--background)] px-4 pb-8 md:hidden"
          role="dialog"
          aria-label="Mobilmenü"
        >
          <MobileNav onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}
