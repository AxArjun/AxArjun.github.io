"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookOpen, CarFront } from "lucide-react";

export function CurrentlyBuilding() {
  return (
    <section className="py-14 md:py-16 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Currently Learning & Building" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Ophthalmology RAG System */}
          <ScrollReveal delay={0.1}>
            <div className="h-full p-6 md:p-8 bg-bg-card border border-accent/20 rounded-lg card-elevated relative overflow-hidden flex flex-col">
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                </span>
                <span className="text-xs uppercase tracking-widest text-success font-medium">
                  RESEARCH & PLANNING
                </span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="p-2.5 bg-accent-muted rounded-lg shrink-0">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Ophthalmology RAG System
                </h3>
              </div>

              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                A domain-specific medical Q&A system for ophthalmology, exploring how to safely retrieve and validate information exclusively from medical sources.
              </p>

              <div className="mt-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">Progress</span>
                  <span className="text-sm font-medium text-text-primary">PHASE 1 OF 4 — REQUIREMENTS GATHERING & RESEARCH</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">Learning & Evaluating</span>
                  <ul className="text-sm text-text-secondary list-disc list-inside space-y-1">
                    <li>Medical RAG architectures</li>
                    <li>Corrective-RAG (CRAG) workflows</li>
                    <li>Ophthalmology knowledge sources</li>
                    <li>LangGraph agent patterns</li>
                    <li>Vector database design</li>
                    <li>Evaluation frameworks (RAGAS)</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">Current Focus</span>
                  <span className="text-sm text-text-secondary">Studying domain-specific retrieval strategies and planning system architecture before implementation.</span>
                </div>
              </div>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["LangChain", "LangGraph", "Qdrant", "FastAPI", "Python", "RAGAS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs text-text-primary bg-bg-secondary border border-border-subtle rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-4 bg-bg-secondary border border-border-subtle rounded-md">
                <span className="block text-xs uppercase tracking-widest text-text-muted font-semibold mb-2">Why this project</span>
                <p className="text-sm text-text-secondary italic">
                  &ldquo;This project is being built to gain hands-on experience with LangChain, LangGraph, RAG pipelines, vector databases, and AI agent workflows while solving a real-world medical information retrieval problem.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: FuelIQ */}
          <ScrollReveal delay={0.2}>
            <div className="h-full p-6 md:p-8 bg-bg-card border border-border-strong rounded-lg card-elevated relative overflow-hidden flex flex-col">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-warning" />
                </span>
                <span className="text-xs uppercase tracking-widest text-warning font-medium">
                  IDEATION & ARCHITECTURE
                </span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="p-2.5 bg-bg-secondary rounded-lg shrink-0">
                  <CarFront className="w-5 h-5 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  FuelIQ — Vehicle Intelligence Platform
                </h3>
              </div>

              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                A vehicle management platform designed to help users track maintenance schedules, service history, fuel expenses, vehicle documents, and ownership analytics through a centralized dashboard.
              </p>

              <div className="mt-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">Progress</span>
                  <span className="text-sm font-medium text-text-primary">PHASE 1 OF 5 — REQUIREMENTS GATHERING & PRODUCT PLANNING</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">Activities</span>
                  <ul className="text-sm text-text-secondary list-disc list-inside space-y-1">
                    <li>Defining user journeys</li>
                    <li>Creating feature roadmap</li>
                    <li>Database schema planning</li>
                    <li>API architecture planning</li>
                    <li>Evaluating deployment options</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">Learning Areas</span>
                  <ul className="text-sm text-text-secondary list-disc list-inside space-y-1">
                    <li>Full-stack application architecture</li>
                    <li>Backend API design</li>
                    <li>Database modelling</li>
                    <li>Authentication systems</li>
                    <li>Mobile-first product design</li>
                    <li>Cloud deployment concepts</li>
                  </ul>
                </div>
              </div>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Flutter", "FastAPI", "PostgreSQL", "Firebase", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs text-text-primary bg-bg-secondary border border-border-subtle rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-4 bg-bg-secondary border border-border-subtle rounded-md">
                <span className="block text-xs uppercase tracking-widest text-text-muted font-semibold mb-2">Why this project</span>
                <p className="text-sm text-text-secondary italic">
                  &ldquo;This project is intended to strengthen my understanding of full-stack software development, scalable application design, and real-world product thinking.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
