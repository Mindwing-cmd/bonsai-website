"use client";

/**
 * Aus Bibliothek: Button/ShinyButton (Zahn-rzte-am-Inn)
 * Angepasst: @/lib/utils, --brand = --brand-accent
 */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const baseClasses =
  "relative inline-flex min-h-[36px] min-w-[36px] items-center justify-center overflow-hidden rounded-xl px-3 py-1.5 text-xs font-medium transition-shadow duration-300 ease-out " +
  "bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-dark)] hover:shadow-md " +
  "focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const motionSpanProps = {
  initial: { "--x": "100%", scale: 0.98 } as React.CSSProperties & { "--x": string },
  animate: { "--x": "-100%", scale: 1 } as React.CSSProperties & { "--x": string },
  whileTap: { scale: 0.98 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 0.4,
    type: "spring" as const,
    stiffness: 30,
    damping: 16,
    mass: 1,
    scale: { type: "spring" as const, stiffness: 200, damping: 8, mass: 0.5 },
  },
};

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface ShinyLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...restProps
}) => (
  <button
    className={cn("font-secondary", baseClasses, className)}
    {...restProps}
  >
    {/* Spacer: bestimmt Buttongröße, unsichtbar */}
    <span className="invisible inline-block text-xs uppercase tracking-wide" aria-hidden>
      {children}
    </span>
    <motion.span
      {...(motionSpanProps as any)}
      className="absolute inset-0 flex items-center justify-center"
    >
      <span
        className="relative block text-xs uppercase tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg, var(--brand-dark) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--brand-dark) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, var(--brand-dark) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--brand-dark) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          background: "linear-gradient(-75deg, transparent calc(var(--x) - 10%), rgba(255,255,255,0.22) calc(var(--x) + 15%), rgba(255,255,255,0.45) calc(var(--x) + 28%), rgba(255,255,255,0.22) calc(var(--x) + 45%), transparent calc(var(--x) + 60%))",
        }}
        className="pointer-events-none absolute inset-0 z-10 block rounded-[inherit]"
        aria-hidden
      />
    </motion.span>
  </button>
);

export const ShinyLink: React.FC<ShinyLinkProps> = ({
  children,
  href,
  className,
  onClick,
}) => (
  <Link
    href={href}
    className={cn("font-secondary", baseClasses, className)}
    onClick={onClick}
  >
    {/* Spacer: bestimmt Buttongröße, unsichtbar */}
    <span className="invisible inline-block text-xs uppercase tracking-wide" aria-hidden>
      {children}
    </span>
    <motion.span
      {...(motionSpanProps as any)}
      className="absolute inset-0 flex items-center justify-center"
    >
      <span
        className="relative block text-xs uppercase tracking-wide text-[var(--brand-foreground)]"
        style={{
          maskImage:
            "linear-gradient(-75deg, var(--brand-foreground) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--brand-foreground) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, var(--brand-foreground) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--brand-foreground) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          background: "linear-gradient(-75deg, transparent calc(var(--x) - 10%), rgba(255,255,255,0.22) calc(var(--x) + 15%), rgba(255,255,255,0.45) calc(var(--x) + 28%), rgba(255,255,255,0.22) calc(var(--x) + 45%), transparent calc(var(--x) + 60%))",
        }}
        className="pointer-events-none absolute inset-0 z-10 block rounded-[inherit]"
        aria-hidden
      />
    </motion.span>
  </Link>
);

export default ShinyButton;
