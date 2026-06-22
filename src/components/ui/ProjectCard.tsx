import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { ProjectDetail } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectDetail;
  isFeatured?: boolean;
}

export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const hasGithub = project.github && project.github !== "#";
  const primaryMetrics = project.metrics.slice(0, 4);

  return (
    <div className={`group relative bg-bg-card border border-border-subtle rounded-lg card-elevated transition-all duration-300 hover:border-accent/30 flex flex-col h-full ${isFeatured ? 'p-6 md:p-10' : 'p-6 md:p-8'}`}>
      
      {/* Header */}
      <div className="flex flex-col mb-4">
        {isFeatured && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-accent" />
            Featured Project
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-tight group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-text-secondary">
          {project.subtitle}
        </p>
      </div>

      <div className={`flex flex-col flex-1 gap-6 ${isFeatured ? 'md:grid md:grid-cols-[1fr_280px] md:gap-10' : ''}`}>
        
        <div className="flex flex-col gap-6">
          {/* Problem */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-muted mb-2 font-semibold">Problem Solved</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.sections.problem}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-muted mb-2 font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs text-text-secondary bg-bg-secondary border border-border-subtle rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Metrics */}
          {primaryMetrics.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-text-muted mb-3 font-semibold">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {primaryMetrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-base font-semibold text-text-primary font-mono">
                      {metric.value}
                    </span>
                    <span className="text-xs text-text-secondary mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Defensibility Note */}
          {project.defensibility && (
            <div className="p-3 bg-bg-secondary border border-border-subtle rounded-md">
              <p className="text-xs text-text-secondary italic leading-relaxed">
                <span className="font-semibold text-text-primary not-italic">Engineering Decision: </span>
                {project.defensibility}
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Footer / Actions */}
      <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-3 items-center">
        {hasGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-text-secondary bg-bg-secondary border border-border-subtle rounded-md hover:text-text-primary hover:border-border-strong transition-colors duration-200"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            View Source
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-accent bg-accent-muted border border-accent/20 rounded-md hover:bg-accent/15 transition-colors duration-200"
        >
          Read Case Study
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
