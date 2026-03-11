"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "bonsai-cookie-consent";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  other: boolean;
};

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  other: false,
};

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (
      typeof parsed?.necessary === "boolean" &&
      typeof parsed?.analytics === "boolean" &&
      typeof parsed?.other === "boolean"
    )
      return { necessary: true, analytics: parsed.analytics, other: parsed.other };
    return null;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [mounted, setMounted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(DEFAULT_CONSENT);

  useEffect(() => {
    setConsent(loadConsent());
    setMounted(true);
  }, []);

  function reject() {
    const state: ConsentState = { necessary: true, analytics: false, other: false };
    saveConsent(state);
    setConsent(state);
  }

  function acceptAll() {
    const state: ConsentState = { necessary: true, analytics: true, other: true };
    saveConsent(state);
    setConsent(state);
  }

  function openSettings() {
    setDraft(consent ?? DEFAULT_CONSENT);
    setSettingsOpen(true);
  }

  function saveSettings() {
    saveConsent(draft);
    setConsent(draft);
    setSettingsOpen(false);
  }

  if (!mounted || consent !== null) return null;

  return (
    <>
      <div
        role="dialog"
        aria-label="Cookie- und Datenschutzhinweis"
        className="fixed bottom-0 left-0 right-0 z-[100] border-t-2 border-[var(--light-industrial)] bg-[var(--background-alt)] p-4 text-[var(--foreground)] shadow-[0_-4px_24px_rgba(0,0,0,0.3)] sm:p-5"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 sm:gap-5">
            <h2 className="font-primary text-base font-semibold sm:text-lg">
              Cookies und Datennutzung
            </h2>
            <p className="text-sm leading-relaxed text-[var(--steel-graphite)] sm:text-base">
              Diese Website nutzt technisch notwendige Cookies. Optional können Analyse-Cookies
              zugelassen werden. Ihre Einwilligung ist freiwillig und kann jederzeit in der{" "}
              <Link href="/datenschutz" className="underline hover:text-[var(--brand-accent)]">
                Datenschutzerklärung
              </Link>{" "}
              widerrufen werden.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={reject}
                className="min-h-[44px] min-w-[44px] rounded-xl border-2 border-[var(--light-industrial)] bg-transparent px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="min-h-[44px] min-w-[44px] rounded-xl border-2 border-[var(--light-industrial)] bg-transparent px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]"
              >
                Einstellungen
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-[44px] min-w-[44px] rounded-xl border-2 border-transparent bg-[var(--brand-accent)] px-4 py-2.5 text-sm font-medium text-[var(--brand-foreground)] transition-colors hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]"
              >
                Alle akzeptieren
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t border-[var(--light-industrial)] pt-4 text-xs text-[var(--steel-graphite)] sm:text-sm">
              <Link href="/impressum" className="underline hover:text-[var(--brand-accent)]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="underline hover:text-[var(--brand-accent)]">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
      </div>

      {settingsOpen && (
        <div
          className="fixed inset-0 z-[101] flex items-center justify-center bg-black/60 p-4"
          aria-modal="true"
          role="dialog"
          aria-label="Cookie-Einstellungen"
          onClick={(e) => e.target === e.currentTarget && setSettingsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background-alt)] p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSettingsOpen(false)}
              className="absolute right-4 top-4 rounded p-1 text-[var(--steel-graphite)] hover:bg-white/10 hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
              aria-label="Schließen"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="font-primary pr-8 text-lg font-semibold text-[var(--foreground)]">
              Cookie-Einstellungen
            </h3>

            <ul className="mt-6 space-y-6">
              <li className="border-b border-[var(--light-industrial)] pb-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-[var(--foreground)]">Technisch notwendig</p>
                  <span className="shrink-0 rounded border border-[var(--light-industrial)] px-2.5 py-1.5 text-xs font-medium text-[var(--steel-graphite)]">
                    Immer aktiv
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--steel-graphite)]">
                  Cookies, die für den Betrieb der Website erforderlich sind.
                </p>
              </li>
              <li className="border-b border-[var(--light-industrial)] pb-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-[var(--foreground)]">Analyse / Statistiken</p>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={draft.analytics}
                    onClick={() => setDraft((s) => ({ ...s, analytics: !s.analytics }))}
                    className={cn(
                      "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]",
                      draft.analytics ? "bg-[var(--brand-accent)]" : "bg-[var(--light-industrial)]"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-5 w-5 shrink-0 rounded-full bg-white shadow transition-transform",
                        draft.analytics ? "translate-x-5" : "translate-x-0.5"
                      )}
                    />
                  </button>
                </div>
                <p className="mt-2 text-sm text-[var(--steel-graphite)]">
                  Anonyme Auswertung von Besucherzahlen und Seitenaufrufen.
                </p>
              </li>
              <li className="border-b border-[var(--light-industrial)] pb-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-[var(--foreground)]">Sonstige</p>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={draft.other}
                    onClick={() => setDraft((s) => ({ ...s, other: !s.other }))}
                    className={cn(
                      "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]",
                      draft.other ? "bg-[var(--brand-accent)]" : "bg-[var(--light-industrial)]"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-5 w-5 shrink-0 rounded-full bg-white shadow transition-transform",
                        draft.other ? "translate-x-5" : "translate-x-0.5"
                      )}
                    />
                  </button>
                </div>
                <p className="mt-2 text-sm text-[var(--steel-graphite)]">
                  Weitere Skripte und Cookies (z. B. eingebettete Inhalte).
                </p>
              </li>
            </ul>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="min-h-[44px] min-w-[44px] rounded-xl border-2 border-[var(--light-industrial)] bg-transparent px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={saveSettings}
                className="min-h-[44px] min-w-[44px] rounded-xl border-2 border-transparent bg-[var(--brand-accent)] px-4 py-2.5 text-sm font-medium text-[var(--brand-foreground)] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-[var(--background-alt)]"
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
