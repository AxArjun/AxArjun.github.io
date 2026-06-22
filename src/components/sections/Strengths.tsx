"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { strengths } from "@/data/strengths";
import {
  Brain,
  Presentation,
  Users,
  Zap,
  Rocket,
  Scale,
} from "lucide-react";

const iconMap: Record<string, typeof Brain> = {
  brain: Brain,
  presentation: Presentation,
  users: Users,
  zap: Zap,
  rocket: Rocket,
  scale: Scale,
};

export function Strengths() {
  return (
    <section
      id="strengths"
      className="py-20 md:py-28 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Professional Strengths" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, i) => {
            const Icon = iconMap[strength.icon] || Brain;
            return (
              <ScrollReveal key={strength.title} delay={i * 0.06}>
                <div className="p-6 bg-bg-card border border-border-subtle rounded-lg card-elevated h-full group hover:border-accent/20 transition-colors duration-300">
                  <div className="p-2.5 bg-accent-muted rounded-lg w-fit mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {strength.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
