"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export const THEME_IDS = ["steel", "carbon-copper", "obsidian-emerald", "slate-violet", "titanium", "midnight-cyan", "coral-steel", "lavender-iron"] as const;
export type ThemeId = (typeof THEME_IDS)[number];

function isValidTheme(value: string): value is ThemeId {
  return THEME_IDS.includes(value as ThemeId);
}

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("steel");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const current = document.documentElement.getAttribute("data-theme");
    if (current && isValidTheme(current)) {
      setThemeState(current);
    } else {
      const randomTheme = THEME_IDS[Math.floor(Math.random() * THEME_IDS.length)];
      setThemeState(randomTheme);
      document.documentElement.setAttribute("data-theme", randomTheme);
    }
    setMounted(true);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [mounted, theme]);

  const value: ThemeContextValue = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
