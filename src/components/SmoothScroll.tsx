"use client";

import { useEffect, ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({ duration: 1.2 });
      document.documentElement.classList.add("lenis", "lenis-smooth");
      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    initLenis();
    return () => {
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
