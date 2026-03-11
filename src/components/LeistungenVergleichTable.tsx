"use client";

import Link from "next/link";
import { Globe, Cpu, Smartphone, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
import type { LeistungVergleichPlan } from "@/data/leistungen-vergleich";

const SLUG_TO_ICON: Record<string, LucideIcon> = {
  webdesign: Globe,
  "ki-systeme": Cpu,
  innovation: Smartphone,
  "paid-ads": Megaphone,
};

type LeistungenVergleichTableProps = {
  plans: LeistungVergleichPlan[];
  features: FeatureItem[];
};

export function LeistungenVergleichTable({ plans, features }: LeistungenVergleichTableProps) {
  return (
    <PricingTable>
      <PricingTableHeader>
        <tr>
          <PricingTableHead className="w-[200px] min-w-[180px]" />
          {plans.map((plan) => (
            <PricingTableHead
              key={plan.slug}
              className="min-w-[140px] max-w-[200px] p-2 align-top"
            >
              <Link href={`/leistungen/${plan.slug}`} className="block">
                <PricingTablePlan
                  name={plan.name}
                  badge={plan.badge}
                  price={plan.price}
                  icon={SLUG_TO_ICON[plan.slug]}
                />
              </Link>
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
