"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="About" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl space-y-5 text-base md:text-lg text-text-secondary leading-relaxed">
            <p>
              I am a final year B.Tech Information Technology student at SRMIST,
              passionate about data analytics, machine learning, and building
              systems that turn raw data into actionable insights.
            </p>
            <p>
              I am currently interning at Applied Systems Research & Technology,
              where I am learning to build backend services and telemetry
              analytics pipelines using FastAPI, PostgreSQL, Redis, and
              TimescaleDB.
            </p>
            <p>
              Through my academic projects, I have built end-to-end ML pipelines
              for customer churn prediction, fraud detection, and retail data
              warehousing — each focused on solving a real business problem with
              measurable results. I am actively exploring LLM applications,
              retrieval-augmented generation, and vector databases.
            </p>
            <p>
              I am looking for full-time opportunities where I can apply my
              skills in data engineering, analytics, and machine learning while
              continuing to grow as a professional.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
