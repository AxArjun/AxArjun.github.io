export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  type: "full-time" | "internship" | "contract";
  summary: string;
  whatIWorkedOn: string[];
  whatILearned: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "AI Intern",
    company: "Applied Systems Research & Technology Pvt Ltd",
    duration: "Jan 2026 – Present",
    type: "internship",
    summary:
      "Contributing to backend systems and analytics infrastructure for AI workload monitoring across GPU, compute, storage, and networking resources.",
    whatIWorkedOn: [
      "Developed FastAPI backend services for AI infrastructure telemetry ingestion, enabling real-time health tracking across distributed GPU environments.",
      "Built time-series data pipelines with PostgreSQL, Redis, and TimescaleDB handling high-frequency infrastructure metrics.",
      "Designed alerting and analytics workflows for anomaly detection across compute and networking resources.",
    ],
    whatILearned: [
      "Time-series database patterns (TimescaleDB) for sub-second telemetry latency.",
      "Observability and monitoring design: logging, metrics aggregation, alerting thresholds.",
      "FastAPI async patterns for high-throughput data endpoints.",
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "TimescaleDB",
      "Python",
    ],
  },
];
