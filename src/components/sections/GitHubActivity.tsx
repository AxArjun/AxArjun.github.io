"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowUpRight } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

const repositories: Repository[] = [
  {
    name: "telco-churn-intelligence",
    description:
      "End-to-end customer churn prediction platform with ML pipeline, SQL analytics, and Power BI dashboards.",
    technologies: ["Python", "SQL", "Scikit-Learn", "Power BI"],
    url: "https://github.com/AxArjun",
  },
  {
    name: "fraud-risk-pipeline",
    description:
      "Enterprise fraud detection system handling extreme class imbalance with SMOTE and Random Forest.",
    technologies: ["Python", "Scikit-Learn", "Power BI", "DAX"],
    url: "https://github.com/AxArjun",
  },
  {
    name: "fleximart-data-warehouse",
    description:
      "Three-tier retail data warehouse with hybrid MySQL/MongoDB storage and star schema design.",
    technologies: ["Python", "MySQL", "MongoDB", "SQL"],
    url: "https://github.com/AxArjun",
  },
];

export function GitHubActivity() {
  return (
    <section className="py-20 md:py-28 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="GitHub"
            subtitle="Open-source project repositories."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repositories.map((repo, i) => (
            <ScrollReveal key={repo.name} delay={i * 0.08}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-bg-card border border-border-subtle rounded-lg card-elevated h-full group hover:border-accent/20 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-mono text-accent group-hover:underline">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors shrink-0" />
                </div>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {repo.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-text-secondary bg-bg-secondary border border-border-subtle rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/arjunrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-secondary border border-border-subtle rounded-md hover:text-text-primary hover:border-accent/30 transition-colors duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              View Full GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
