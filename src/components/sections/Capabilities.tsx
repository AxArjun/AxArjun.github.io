"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-20 md:py-28 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Capabilities" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.08}>
              <div className="p-6 md:p-8 bg-bg-card border border-border-subtle rounded-lg h-full">
                <h3 className="text-lg font-semibold text-text-primary">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cap.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs text-text-secondary bg-bg-secondary border border-border-subtle rounded-md"
                    >
                      {tech}
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
