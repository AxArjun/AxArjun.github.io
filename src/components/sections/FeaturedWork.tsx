"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    slug: "telco-churn",
    title: "Telco Customer Churn Intelligence Platform",
    metric: "84.3 ROC-AUC",
    index: "01",
  },
  {
    slug: "fraud-risk",
    title: "Enterprise Fraud Risk Pipeline",
    metric: "99.85% Accuracy",
    index: "02",
  },
  {
    slug: "fleximart",
    title: "FlexiMart Data Warehouse",
    metric: "3-Tier Architecture",
    index: "03",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Featured Work" />
        </ScrollReveal>

        <div className="space-y-0">
          {featured.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${item.slug}`}
                className="group flex items-center justify-between py-6 md:py-8 border-b border-border-subtle hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-xs text-text-secondary/40 font-mono mt-1.5">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <span className="text-sm text-text-secondary font-mono mt-1 block">
                      {item.metric}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary/40 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
