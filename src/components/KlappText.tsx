"use client";

import { useId, useState } from "react";

type KlappTextProps = {
  children: React.ReactNode;
};

export function KlappText({ children }: KlappTextProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-4">
      <button
        type="button"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand-accent)]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Weniger anzeigen" : "Mehr erfahren"}
      </button>
      <div id={panelId} hidden={!open} className="mt-3 text-[var(--steel-graphite)]">
        {children}
      </div>
    </div>
  );
}
