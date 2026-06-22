"use client";

import Link from "next/link";
import { ArrowLeft, Lightbulb, AlertTriangle, TrendingUp, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GithubIcon } from "@/components/ui/Icons";
import type { ProjectDetail } from "@/data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

interface Props {
  project: ProjectDetail;
}

export function ProjectDetailClient({ project }: Props) {
  const hasGithub = project.github && project.github !== "#";
  const s = project.sections;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {project.subtitle}
          </p>
        </ScrollReveal>

        {/* Metrics bar */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 bg-bg-card border border-border-subtle rounded-lg card-elevated"
              >
                <div className="text-lg font-semibold text-text-primary font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech stack */}
        <ScrollReveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs text-text-secondary bg-bg-secondary border border-border-subtle rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>



        {/* Divider */}
        <div className="my-12 border-t border-border-subtle" />

        {/* Problem */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Problem
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              {s.problem}
            </p>
          </section>
        </ScrollReveal>

        {/* Why Existing Process Failed */}
        {s.whyExistingProcessFailed && (
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Why the Existing Process Failed
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                {s.whyExistingProcessFailed}
              </p>
            </section>
          </ScrollReveal>
        )}

        {/* Data Characteristics */}
        {s.dataCharacteristics && s.dataCharacteristics.length > 0 && (
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Data Challenges
              </h2>
              <ul className="space-y-3">
                {s.dataCharacteristics.map((item, i) => (
                  <li
                    key={i}
                    className="text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-amber-500/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        )}

        {/* Solution */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Solution
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              {s.solution}
            </p>
          </section>
        </ScrollReveal>

        {/* Architecture */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Architecture
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              {s.architecture}
            </p>
            <ArchitectureDiagram slug={project.slug} />
          </section>
        </ScrollReveal>

        {/* Tech Stack Detail */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Tech Stack
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              {s.techDetail}
            </p>
          </section>
        </ScrollReveal>

        {/* Model Development Journey */}
        {s.modelJourney && s.modelJourney.length > 0 && (
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Model Development Journey
              </h2>
              <div className="space-y-4">
                {s.modelJourney.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-muted border border-accent/20 flex items-center justify-center">
                      <span className="text-xs font-mono text-accent font-semibold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Implementation */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Implementation
            </h2>
            <ul className="space-y-3">
              {s.implementation.map((item, i) => (
                <li
                  key={i}
                  className="text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-accent/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Results */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Results
            </h2>
            <ul className="space-y-3">
              {s.results.map((item, i) => (
                <li
                  key={i}
                  className="text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-success/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Business Impact */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Business Impact
            </h2>
            <div className="p-6 bg-bg-card border border-accent/20 rounded-lg card-elevated">
              <p className="text-base text-text-secondary leading-relaxed">
                {s.businessImpact}
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Engineering Decisions & Trade-offs */}
        {s.engineeringDecisions && s.engineeringDecisions.length > 0 && (
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-text-secondary" />
                Engineering Decisions & Trade-Offs
              </h2>
              <div className="space-y-4">
                {s.engineeringDecisions.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-bg-card border border-border-subtle rounded-lg card-elevated"
                  >
                    <p className="text-base text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Lessons Learned */}
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Lessons Learned
            </h2>
            <ul className="space-y-4">
              {s.lessonsLearned.map((item, i) => (
                <li
                  key={i}
                  className="text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* What I Would Improve */}
        {s.whatIWouldImprove && s.whatIWouldImprove.length > 0 && (
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                What I Would Improve Next
              </h2>
              <ul className="space-y-3">
                {s.whatIWouldImprove.map((item, i) => (
                  <li
                    key={i}
                    className="text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-amber-500/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        )}

        {/* Actions */}
        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-border-subtle flex flex-wrap gap-4">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-secondary bg-bg-secondary border border-border-subtle rounded-md hover:text-text-primary hover:border-border-strong transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View on GitHub
              </a>
            )}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
