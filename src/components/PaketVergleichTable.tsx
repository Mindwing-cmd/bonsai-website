"use client";

import {
  PricingTable,
  PricingTableHeader,
  PricingTableBody,
  PricingTableRow,
  PricingTableHead,
  PricingTableCell,
  PricingTablePlan,
} from "@/components/ui/pricing-table";
import { ShinyLink } from "@/components/ui/shiny-button";
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
                <ShinyLink
                  href={plan.ctaHref}
                  className="mt-2 block w-full rounded-xl py-2.5 text-center text-sm"
                >
                  {plan.ctaText}
                </ShinyLink>
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
