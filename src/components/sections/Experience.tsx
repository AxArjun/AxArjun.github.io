"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-14 md:py-16 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Experience" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-subtle" />

          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative pl-8 md:pl-14 pb-9 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-2 w-px h-px">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full -translate-x-1/2" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {item.role}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm text-text-muted font-mono">
                      {item.duration}
                    </span>
                    <span className="px-2 py-0.5 text-xs bg-accent-muted text-accent rounded-full capitalize">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {item.summary}
                </p>

                {/* Key Contributions */}
                <div className="mt-4">
                  <h4 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-2">
                    Key Contributions
                  </h4>
                  <ul className="space-y-1.5">
                    {item.whatIWorkedOn.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-px before:bg-accent/50"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mt-3.5">
                  <h4 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs text-text-secondary bg-bg-secondary border border-border-subtle rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Exposure */}
                <div className="mt-3.5">
                  <h4 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-2">
                    Technical Exposure
                  </h4>
                  <ul className="space-y-1.5">
                    {item.whatILearned.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-px before:bg-amber-500/50"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
