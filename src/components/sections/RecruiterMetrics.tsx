"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetricCard } from "@/components/ui/MetricCard";

interface MetricItem {
  value: string;
  label: string;
  numericValue?: number;
  decimals?: number;
  suffix?: string;
}

const metrics: MetricItem[] = [
  {
    value: "7.7",
    label: "CGPA",
    numericValue: 7.7,
    decimals: 1,
  },
  {
    value: "AI Intern",
    label: "Current Role",
  },
  {
    value: "5",
    label: "Projects",
    numericValue: 5,
  },
  {
    value: "2",
    label: "Analytics Systems",
    numericValue: 2,
  },
  {
    value: "2027",
    label: "Graduation",
    numericValue: 2027,
  },
];

export function QuickSnapshot() {
  return (
    <section
      id="snapshot"
      className="py-12 md:py-16 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Quick Snapshot"
            subtitle="Key highlights at a glance."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((metric, i) => (
              <MetricCard
                key={i}
                value={metric.value}
                label={metric.label}
                numericValue={metric.numericValue}
                decimals={metric.decimals}
                suffix={metric.suffix}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
