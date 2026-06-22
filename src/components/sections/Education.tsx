"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/data/education";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      className="py-14 md:py-16 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Education" />
        </ScrollReveal>

        <div className="max-w-2xl">
          {education.map((item, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div className="p-6 md:p-8 bg-bg-card border border-border-subtle rounded-lg card-elevated">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    {item.logo ? (
                      <div className="w-12 h-12 bg-white border border-border-subtle rounded-lg overflow-hidden flex items-center justify-center p-1">
                        <Image
                          src={item.logo}
                          alt={`${item.institution} Logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 bg-accent-muted rounded-lg flex items-center justify-center w-12 h-12">
                        <GraduationCap className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                      {item.institution}
                    </h3>
                    <p className="mt-1 text-base text-text-secondary">
                      {item.degree} — {item.field}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                        <Calendar className="w-3.5 h-3.5 text-text-muted" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                        <MapPin className="w-3.5 h-3.5 text-text-muted" />
                        {item.location}
                      </div>
                    </div>

                    {item.cgpa && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent-muted border border-accent/20 rounded-md">
                        <span className="text-sm font-semibold text-accent font-mono">
                          {item.cgpa}
                        </span>
                        <span className="text-xs text-text-secondary">CGPA</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
