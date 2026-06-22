"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";

export function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="py-14 md:py-16 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Technical Skills"
            subtitle="Technologies and tools organized by domain."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.06}>
              <div className="p-6 bg-bg-card border border-border-subtle rounded-lg card-elevated h-full">
                <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-text-primary bg-bg-secondary border border-border-subtle rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
