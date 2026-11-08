"use client";

import Link from "next/link";
import { useState, useEffect, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { readConsent, writeConsent, type ConsentState } from "@/lib/consent";

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  other: false,
};

function saveConsent(state: ConsentState) {
  try {
    writeConsent(state);
  } catch {
    /* ignore */
  }
}

function useFocusTrap(active: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!active) return;
    const root = ref.current;
    if (!root) return;
    const items = () =>
      Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [role="switch"]'));
    items()[0]?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const list = items();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, ref]);
}

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [mounted, setMounted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(DEFAULT_CONSENT);

  const bannerRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setConsent(readConsent());
    setMounted(true);
  }, []);

  useFocusTrap(mounted && consent === null && !settingsOpen, bannerRef);
  useFocusTrap(mounted && consent === null && settingsOpen, settingsRef);

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
        ref={bannerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cookie- und Datenschutzhinweis"
        className="fixed bottom-0 left-0 right-0 z-[100] border-t-2 border-[var(--light-industrial)] bg-[var(--background-alt)] px-4 py-3 text-[var(--foreground)] shadow-[0_-4px_24px_rgba(0,0,0,0.3)]"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--foreground)]">
            Wir speichern nur, welche Auswahl Sie hier treffen. Den Roboter auf der Startseite laden wir, sobald Sie ihn erlauben. Mehr dazu in der{" "}
            <Link href="/datenschutz" className="text-[var(--brand-accent)] underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center gap-2">
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
            ref={settingsRef}
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
                <p className="mt-2 text-sm leading-relaxed text-[var(--steel-graphite)]">
                  Speichert, was Sie in diesem Hinweis gewählt haben. Die Website bleibt auch ohne weitere Auswahl nutzbar.
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
                <p className="mt-2 text-sm leading-relaxed text-[var(--steel-graphite)]">
                  Es ist kein Auswertungsprogramm eingebunden. Wenn Sie das einschalten, speichern wir nur diese Auswahl.
                </p>
              </li>
              <li className="border-b border-[var(--light-industrial)] pb-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-[var(--foreground)]">3D-Szene</p>
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
                <p className="mt-2 text-sm leading-relaxed text-[var(--steel-graphite)]">
                  Zeigt den Roboter auf der Startseite. Dafür verbindet sich der Browser mit Spline.
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
