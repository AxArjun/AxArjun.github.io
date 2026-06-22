"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MetricCard } from "@/components/ui/MetricCard";

export function Impact() {
  return (
    <section className="py-20 md:py-28 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <MetricCard
              value="7,043+"
              label="Customers Analysed"
              numericValue={7043}
              suffix="+"
            />
            <MetricCard
              value="84.3%"
              label="ROC-AUC"
              numericValue={84.3}
              decimals={1}
              suffix="%"
            />
            <MetricCard
              value="99.85%"
              label="Fraud Detection Accuracy"
              numericValue={99.85}
              decimals={2}
              suffix="%"
            />
            <MetricCard
              value="56,962"
              label="Transactions Processed"
              numericValue={56962}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
