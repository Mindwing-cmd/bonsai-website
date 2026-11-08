"use client";

import Link from "next/link";
import {
  PricingTable,
  PricingTableHeader,
  PricingTableBody,
  PricingTableRow,
  PricingTableHead,
  PricingTableCell,
  PricingTablePlan,
} from "@/components/ui/pricing-table";
import type { FeatureItem } from "@/components/ui/pricing-table";
import type { PaketPlanTable } from "@/data/preise-pakete";

type PaketVergleichTableProps = {
  plans: PaketPlanTable[];
  features: FeatureItem[];
};

export function PaketVergleichTable({ plans, features }: PaketVergleichTableProps) {
  return (
    <PricingTable>
      <PricingTableHeader>
        <tr>
          <PricingTableHead className="w-[220px] min-w-[200px]" />
          {plans.map((plan) => (
            <PricingTableHead
              key={plan.name}
              className="min-w-[160px] max-w-[220px] p-2 align-top"
            >
              <PricingTablePlan
                name={plan.name}
                badge={plan.badge}
                price={plan.price}
              >
                <Link
                  href={plan.ctaHref}
                  className="mt-3 flex min-h-11 w-full items-center justify-center rounded-xl bg-[var(--brand-accent)] px-3 py-2 text-center font-secondary text-xs font-semibold leading-tight text-[var(--brand-foreground)] hover:opacity-95"
                >
                  {plan.ctaText}
                </Link>
              </PricingTablePlan>
            </PricingTableHead>
          ))}
        </tr>
      </PricingTableHeader>
      <PricingTableBody>
        {features.map((feature) => (
          <PricingTableRow key={feature.label}>
            <PricingTableCell className="font-medium text-[var(--foreground)]">
              {feature.label}
            </PricingTableCell>
            {feature.values.map((value, idx) => (
              <PricingTableCell key={idx}>{value}</PricingTableCell>
            ))}
          </PricingTableRow>
        ))}
      </PricingTableBody>
    </PricingTable>
  );
}
