"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-14 md:py-16 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Projects"
            subtitle="End-to-end data and AI systems with measurable business impact."
          />
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {/* Featured Project */}
          {projects.length > 0 && (
            <ScrollReveal delay={0.1}>
              <ProjectCard project={projects[0]} isFeatured={true} />
            </ScrollReveal>
          )}

          {/* Remaining Projects Grid */}
          {projects.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.slice(1).map((project, i) => (
                <ScrollReveal key={project.slug} delay={(i + 1) * 0.1}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
