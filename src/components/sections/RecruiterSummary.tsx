"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Briefcase, GraduationCap, FolderKanban, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    text: "Final Year B.Tech IT @ SRMIST",
  },
  {
    icon: Briefcase,
    text: "AI Intern @ Applied Systems Research & Technology",
  },
  {
    icon: FolderKanban,
    text: "3 End-to-End Data & AI Projects",
  },
];

const keyMetrics = [
  "84.3% ROC-AUC Churn Prediction",
  "99.85% Fraud Detection Accuracy",
];

const domains = [
  "Machine Learning",
  "Data Engineering",
  "Business Intelligence",
  "Backend Development",
];

const seekingRoles = [
  "AI Engineer",
  "Data Engineer",
  "Data Analyst",
  "Technology Consultant",
];

export function RecruiterSummary() {
  return (
    <section className="py-20 md:py-28 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-bg-card border border-border-subtle rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight">
              At a Glance
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1: Profile */}
              <div>
                <div className="text-xs uppercase tracking-widest text-text-secondary/60 mb-4">
                  Profile
                </div>
                <div className="space-y-3">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-text-secondary leading-snug">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {keyMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="text-sm text-text-primary font-mono"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Experience across */}
              <div>
                <div className="text-xs uppercase tracking-widest text-text-secondary/60 mb-4">
                  Experience Across
                </div>
                <div className="space-y-2.5">
                  {domains.map((d) => (
                    <div key={d} className="text-sm text-text-secondary">
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Seeking */}
              <div>
                <div className="text-xs uppercase tracking-widest text-text-secondary/60 mb-4 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  Seeking Roles
                </div>
                <div className="space-y-2.5">
                  {seekingRoles.map((role) => (
                    <div
                      key={role}
                      className="text-sm text-text-secondary"
                    >
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
