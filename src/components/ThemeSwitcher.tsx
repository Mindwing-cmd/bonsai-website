"use client";

import { useTheme, THEME_IDS, type ThemeId } from "@/components/ThemeProvider";
import { useRef, useState, useEffect } from "react";

const THEME_LABELS: Record<ThemeId, string> = {
  "lavender-iron": "Lavender Iron",
  "coral-steel": "Coral Steel",
  "carbon-copper": "Carbon & Copper",
  titanium: "Titanium",
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
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
        className="min-h-[44px] min-w-[44px] rounded-lg border-2 border-[var(--light-industrial)] bg-[var(--background-alt)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:shadow-glow"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Farbkonzept wechseln"
        id="theme-switcher-trigger"
      >
        Farbkonzept: {THEME_LABELS[theme]}
      </button>
      {open && (
        <ul
          role="listbox"
          aria-labelledby="theme-switcher-trigger"
          className="absolute bottom-full left-0 mb-1 min-w-[200px] rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background-alt)] py-2 shadow-lg"
        >
          {THEME_IDS.map((id) => (
            <li key={id} role="option" aria-selected={theme === id}>
              <button
                type="button"
                onClick={() => {
                  setTheme(id);
                  setOpen(false);
                }}
                className={`flex min-h-[44px] w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--background)] hover:text-[var(--brand-accent)] ${
                  theme === id ? "font-medium text-[var(--brand-accent)]" : "text-[var(--steel-graphite)]"
                }`}
              >
                {THEME_LABELS[id]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
