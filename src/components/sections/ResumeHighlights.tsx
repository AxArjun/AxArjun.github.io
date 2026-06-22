"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "AI Intern at Applied Systems Research & Technology — learning to build backend services and telemetry analytics pipelines for production monitoring.",
  "Built a churn prediction platform analyzing 7,043 customers with 84.3% ROC-AUC, identifying $139K in monthly revenue at risk using Random Forest and Power BI.",
  "Developed a fraud detection pipeline achieving 99.85% accuracy across 56,962 transactions, handling extreme class imbalance (0.17% fraud rate) with SMOTE.",
  "Designed a three-tier data warehouse with hybrid MySQL/MongoDB storage and star schema, unifying 5 disparate retail data sources.",
  "Currently exploring LLM applications — building an Ophthalmology RAG system with LangChain, LangGraph, and vector databases.",
  "Final Year B.Tech IT @ SRMIST (CGPA 7.7) — open to full-time roles in data engineering, analytics, and ML.",
];

export function ResumeHighlights() {
  return (
    <section
      id="highlights"
      className="py-20 md:py-28 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Resume Highlights"
            subtitle="Key qualifications at a glance."
          />
        </ScrollReveal>

        <div className="space-y-4 max-w-3xl">
          {highlights.map((highlight, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-3 p-4 bg-bg-card border border-border-subtle rounded-lg card-elevated">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {highlight}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
