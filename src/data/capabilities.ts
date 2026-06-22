export interface Capability {
  title: string;
  description: string;
  technologies: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Machine Learning",
    description: "Built customer churn prediction systems and fraud detection models with measurable business outcomes.",
    technologies: ["Scikit-Learn", "Random Forest", "SMOTE", "RobustScaler", "Feature Engineering"],
  },
  {
    title: "Data Engineering",
    description: "Designed ETL pipelines, relational databases and warehouse architectures.",
    technologies: ["Python", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Business Intelligence",
    description: "Developed executive dashboards and decision-support analytics.",
    technologies: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "Backend Engineering",
    description: "Built APIs and analytics services for backend systems.",
    technologies: ["FastAPI", "Flask", "Redis", "REST APIs"],
  },
  {
    title: "Mobile & Frontend",
    description: "Built mobile applications with integrated OCR capabilities.",
    technologies: ["Flutter", "Dart", "Firebase", "OCR"],
  },
  {
    title: "Databases",
    description: "Managed data across SQL, NoSQL, and time-series databases.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "TimescaleDB", "Redis"],
  },
  {
    title: "Tools",
    description: "Utilized modern CI/CD and containerization platforms.",
    technologies: ["Docker", "GitHub Actions (CI/CD)"]
  }
];
