"use client";

import React, { useState } from "react";
import { Github, Star } from "lucide-react";
import { Liquid, type Colors } from "@/components/ui/button-1";

const COLORS: Colors = {
  color1: "#FFFFFF",
  color2: "#0369a1",
  color3: "#7dd3fc",
  color4: "#f0f9ff",
  color5: "#e0f2fe",
  color6: "#bae6fd",
  color7: "#0284c7",
  color8: "#0369a1",
  color9: "#0c4a6e",
  color10: "#164e63",
  color11: "#0c4a6e",
  color12: "#bae6fd",
  color13: "#0284c7",
  color14: "#7dd3fc",
  color15: "#bae6fd",
  color16: "#0369a1",
  color17: "#0c4a6e",
};

type LiquidButtonProps = {
  href?: string;
  label?: string;
  showStar?: boolean;
  colors?: Colors;
};

export function LiquidButton({
  href = "https://github.com",
  label = "Github",
  showStar = true,
  colors = COLORS,
}: LiquidButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative mx-auto inline-block h-[2.7em] w-14 border-2 border-[var(--deep-carbon)] rounded-xl bg-white sm:w-36 dark:border-white dark:bg-[var(--deep-carbon)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-1/2 top-[8.57%] h-[128.57%] w-[112.81%] -translate-x-1/2 opacity-70 filter blur-[19px]">
          <span className="absolute inset-0 rounded-xl bg-[var(--light-industrial)] filter blur-[6.5px]" />
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Liquid isHovered={isHovered} colors={colors} />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-[112.85%] w-[92.23%] -translate-x-1/2 -translate-y-[40%] rounded-xl bg-[var(--deep-carbon)] filter blur-[7.3px]" />
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-xl bg-[var(--light-industrial)]" />
          <span className="absolute inset-0 rounded-xl bg-[var(--deep-carbon)]" />
          <Liquid isHovered={isHovered} colors={colors} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-xl border-[3px] border-solid mix-blend-overlay filter ${
                i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
              } border-transparent from-transparent to-white bg-gradient-to-b`}
            />
          ))}
          <span className="absolute left-1/2 top-1/2 h-[42.85%] w-[70.8%] -translate-x-1/2 -translate-y-[40%] rounded-xl bg-[var(--brand-accent)] filter blur-[15px]" />
        </div>
        <span className="relative z-10 flex items-center justify-center gap-2 rounded-xl px-4 text-xl font-semibold tracking-wide text-white whitespace-nowrap group-hover:text-[var(--brand-accent)]">
          {showStar && (
            <Star className="hidden h-6 w-6 flex-shrink-0 fill-white group-hover:fill-[var(--brand-accent)] sm:inline-block" />
          )}
          <Github className="inline-block h-6 w-6 flex-shrink-0 fill-white group-hover:fill-[var(--brand-accent)] sm:hidden" />
          <span className="hidden sm:inline-block">{label}</span>
        </span>
      </a>
    </div>
  );
}

export default LiquidButton;
