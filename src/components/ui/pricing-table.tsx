"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function PricingTable({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-hidden rounded-xl border-2 border-[var(--light-industrial)]"
    >
      <div className="overflow-x-auto">
        <table
          className={cn(
            "w-full border-collapse text-sm",
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}

function PricingTableHeader({ ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" {...props} />;
}

function PricingTableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr]:border-b [&_tr]:border-[var(--light-industrial)]",
        className
      )}
      {...props}
    />
  );
}

function PricingTableRow({ ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className="transition-colors hover:bg-[var(--background-alt)]/30"
      {...props}
    />
  );
}

function PricingTableCell({
  className,
  children,
  ...props
}: React.ComponentProps<"td"> & { children?: boolean | string | React.ReactNode }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle whitespace-nowrap border-[var(--light-industrial)] border-l border-b first:border-l-0 text-[var(--foreground)]",
        className
      )}
      {...props}
    >
      {children === true ? (
        <CheckIcon
          aria-hidden="true"
          className="size-4 text-[var(--brand-accent)]"
        />
      ) : children === false ? (
        <MinusIcon
          aria-hidden="true"
          className="size-4 text-[var(--steel-graphite)]/60"
        />
      ) : (
        children
      )}
    </td>
  );
}

function PricingTableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "p-3 text-left align-middle font-medium whitespace-nowrap border-[var(--light-industrial)] border-l border-b first:border-l-0 bg-[var(--background-alt)]/50 text-[var(--foreground)] font-secondary",
        className
      )}
      {...props}
    />
  );
}

export type PricingPlanType = {
  name: string;
  icon?: LucideIcon;
  badge: string;
  price: string;
  compareAt?: string;
};

function PricingTablePlan({
  name,
  badge,
  price,
  compareAt,
  icon: Icon,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & PricingPlanType) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background)] p-4 font-normal transition-colors hover:border-[var(--brand-accent)]/50",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 flex-wrap">
        {Icon && (
          <div className="flex items-center justify-center rounded-md border-2 border-[var(--light-industrial)] p-1.5">
            <Icon className="h-3 w-3 text-[var(--brand-accent)]" />
          </div>
        )}
        <h3 className="font-primary text-sm font-semibold text-[var(--foreground)]">
          {name}
        </h3>
        <Badge
          variant="secondary"
          className="ml-auto rounded-md border-2 border-[var(--light-industrial)] px-2 py-0.5 text-[10px] font-normal"
        >
          {badge}
        </Badge>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-primary text-xl font-bold text-[var(--foreground)]">
          {price}
        </span>
        {compareAt && (
          <span className="text-sm text-[var(--steel-graphite)] line-through">
            {compareAt}
          </span>
        )}
      </div>
      {children && <div className="relative z-10 mt-3">{children}</div>}
    </div>
  );
}

export type FeatureValue = boolean | string | React.ReactNode;
export type FeatureItem = {
  label: string;
  values: FeatureValue[];
};

export {
  PricingTable,
  PricingTableHeader,
  PricingTableBody,
  PricingTableRow,
  PricingTableHead,
  PricingTableCell,
  PricingTablePlan,
};
