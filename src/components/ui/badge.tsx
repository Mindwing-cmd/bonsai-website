import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "secondary", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md border font-medium transition-colors",
        variant === "default" &&
          "border-[var(--brand-accent)] bg-[var(--brand-accent-muted)] text-[var(--brand-accent)]",
        variant === "secondary" &&
          "border-[var(--light-industrial)] bg-[var(--background-alt)] text-[var(--steel-graphite)]",
        variant === "outline" &&
          "border-[var(--steel-graphite)] text-[var(--foreground)]",
        "px-2 py-0.5 text-[10px] md:text-xs",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
