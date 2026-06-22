export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "Java (Familiar)"],
  },
  {
    category: "Data Analytics & BI",
    skills: ["Pandas", "NumPy", "Power BI", "DAX", "Matplotlib", "Statistical Analysis"],
  },
  {
    category: "Machine Learning",
    skills: ["Scikit-Learn", "Random Forest", "SMOTE", "Feature Engineering", "RobustScaler"],
  },
  {
    category: "AI & LLM Applications",
    skills: ["LangChain", "LangGraph", "RAG Architecture", "Multi-Agent Systems", "Vector Search", "Gemini API"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "TimescaleDB (Familiar)"],
  },
  {
    category: "Backend Development",
    skills: ["FastAPI", "Flask", "REST APIs", "Async Python"],
  },
  {
    category: "Mobile & Frontend",
    skills: ["Flutter", "Dart", "Firebase", "OCR (Google ML Kit)"],
  },
  {
    category: "Data Pipelines & Warehousing",
    skills: ["ETL Pipelines", "Star Schema", "3NF Normalisation", "Data Warehousing"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions (CI/CD)", "Jupyter", "VS Code"],
  },
];
