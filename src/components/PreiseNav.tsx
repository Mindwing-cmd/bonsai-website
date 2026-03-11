"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const PREISE_ITEMS = [
  { href: "/preise", label: "Übersicht" },
  { href: "/preise/webdesign", label: "Leistungspakete (Webdesign)" },
  { href: "/preise/wartung", label: "Wartung & Betrieb" },
] as const;

export function PreiseNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 rounded-lg py-2 text-sm font-medium text-[var(--steel-graphite)] transition-colors hover:text-[var(--brand-accent)]"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="preise-menu"
        id="preise-trigger"
      >
        Preise
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id="preise-menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="preise-trigger"
        onMouseLeave={() => setOpen(false)}
        className={`absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background-alt)] py-2 shadow-lg ${
          open ? "block" : "hidden"
        }`}
      >
        {PREISE_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-[var(--steel-graphite)] transition-colors hover:bg-[var(--background)] hover:text-[var(--brand-accent)]"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
