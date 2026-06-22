export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  metrics: ProjectMetric[];
  techStack: string[];
  description: string;
  github?: string;
  caseStudy?: string;
  defensibility?: string;
  sections: {
    problem: string;
    whyExistingProcessFailed?: string;
    dataCharacteristics?: string[];
    solution: string;
    architecture: string;
    techDetail: string;
    modelJourney?: string[];
    implementation: string[];
    results: string[];
    businessImpact: string;
    engineeringDecisions?: string[];
    lessonsLearned: string[];
    whatIWouldImprove?: string[];
  };
}

export const projects: ProjectDetail[] = [
  {
    slug: "telco-churn",
    title: "Telco Customer Churn Intelligence Platform",
    subtitle: "End-to-end churn prediction and revenue risk analytics",
    description:
      "Built an end-to-end customer churn prediction platform using machine learning, SQL analytics, and executive Power BI dashboards — my flagship project demonstrating the full data-to-insight pipeline.",
    metrics: [
      { value: "7,043", label: "Customers" },
      { value: "85.0%", label: "ROC-AUC" },
      { value: "80.7%", label: "Accuracy" },
      { value: "₹139K/mo", label: "Revenue At Risk" },
    ],
    techStack: ["Python", "SQL", "Power BI", "Scikit-Learn", "PostgreSQL"],
    github: "https://github.com/AxArjun/telco-customer-churn-analysis",
    caseStudy: "/projects/telco-churn",
    defensibility: "Risk segmentation rebuilt against model predictions rather than IBM's pre-existing Churn Score column to eliminate data leakage from the dashboard logic.",
    sections: {
      problem:
        "A telecommunications provider was experiencing significant customer attrition but lacked visibility into which customers were at risk and why. The existing process relied on reactive measures — customers were only flagged after they had already churned. There was no predictive capability, no segmentation of at-risk customers, and no executive-level reporting to drive retention strategy.",
      whyExistingProcessFailed:
        "The business had no predictive churn model — retention teams only reacted after customers left. There was no segmentation of at-risk customers by value or risk tier. Executive reporting was manual and retrospective, showing what happened last quarter rather than what is about to happen. Without quantified revenue exposure, retention budgets were allocated broadly instead of targeted at high-value accounts.",
      dataCharacteristics: [
        "7,043 customer records with 21 features — a relatively small dataset requiring careful validation to avoid overfitting.",
        "Class imbalance: 73.4% non-churn vs 26.6% churn — not extreme, but enough to bias naive models toward predicting the majority class.",
        "Mixed feature types: categorical (contract type, payment method), numerical (monthly charges, tenure), and binary (service subscriptions).",
        "Missing values in TotalCharges column (11 records) — required investigation to determine if missingness was informative or random.",
        "High cardinality in some features requiring careful encoding decisions.",
      ],
      solution:
        "Built a churn prediction platform that combines predictive machine learning with SQL-driven customer segmentation and executive Power BI dashboards. The system identifies at-risk customers before they churn, quantifies revenue exposure, and provides retention recommendations segmented by customer profile.",
      architecture:
        "The architecture follows a three-tier pattern: ingestion layer (Python-based ETL loading raw customer data into PostgreSQL), analytics layer (SQL-based feature engineering and segmentation queries), and intelligence layer (Scikit-Learn Random Forest classifier producing churn probabilities, feeding into Power BI dashboards).",
      techDetail:
        "Python for data processing and model training. PostgreSQL for structured data storage and complex analytical queries. Scikit-Learn Random Forest for classification with hyperparameter tuning. Power BI with DAX measures for executive reporting.",
      modelJourney: [
        "Started with Logistic Regression as a baseline — achieved 73.1% ROC-AUC. This gave me a benchmark to improve against and helped identify which features had the strongest linear relationships with churn.",
        "Moved to Random Forest to capture non-linear interactions — initial run gave 79.8% ROC-AUC without feature engineering. The improvement confirmed that feature interactions (e.g., short tenure + high monthly charge) were important predictors.",
        "Engineered 12 derived features including customer lifetime value, service density score, and payment consistency index. This pushed ROC-AUC to 85.0% — the biggest single improvement came from domain-specific features, not algorithm tuning.",
        "Performed hyperparameter optimization using GridSearchCV on n_estimators, max_depth, and min_samples_split. Gains were marginal (0.4%) compared to feature engineering, which taught me where to invest time on future projects.",
        "Tuned the classification threshold from default 0.5 to 0.42 to balance precision/recall for the business use case — catching more churners at the cost of slightly more false positives was the right trade-off for a retention campaign.",
      ],
      implementation: [
        "Ingested and cleaned 7,043 customer records with 21 features including tenure, contract type, monthly charges, and service subscriptions.",
        "Engineered 12 derived features including customer lifetime value, service density score, and payment consistency index.",
        "Built SQL analytical layer with cohort analysis, churn rate by segment, and revenue-at-risk calculations.",
        "Trained Random Forest classifier achieving 85.0% ROC-AUC and 80.7% accuracy after hyperparameter optimization.",
        "Developed three-page Power BI dashboard with executive summary, customer deep-dive, and retention strategy views.",
      ],
      results: [
        "85.0% ROC-AUC score on test dataset, outperforming logistic regression baseline by 11.9%.",
        "Identified ₹139K in monthly revenue at risk from high-probability churn customers.",
        "Segmented customers into 4 risk tiers enabling targeted retention campaigns.",
        "Reduced false positive rate to 18.3%, minimizing unnecessary retention spend.",
      ],
      businessImpact:
        "The platform enables proactive retention by identifying at-risk customers before churn occurs. By quantifying ₹139K in monthly revenue exposure and segmenting customers by risk tier, the business can allocate retention budgets precisely — targeting high-value customers with personalized interventions rather than broad, expensive campaigns.",
      engineeringDecisions: [
        "Chose Random Forest over Gradient Boosting because the dataset was small (7,043 records) and RF is less prone to overfitting on small data. XGBoost was not used because the marginal accuracy gain did not justify the added complexity and hyperparameter search space for this dataset size.",
        "Used stratified train/test split instead of SMOTE oversampling. The class imbalance (73.4/26.6) was moderate, and SMOTE on a small dataset risked generating synthetic samples that distorted the feature space. Stratified splitting preserved the natural class distribution in both sets.",
        "Built the SQL analytics layer as a separate tier rather than doing everything in Python. This was a deliberate decision to separate concerns — the SQL queries could be reused independently for ad-hoc analysis, and it made the Power BI integration cleaner since Power BI can query PostgreSQL directly.",
        "Selected Power BI over a custom dashboard because the primary audience was business stakeholders, not engineers. Power BI's drill-down capability and DAX measures made it possible to create self-service analytics without requiring users to write code.",
        "Stored derived features in PostgreSQL rather than computing them at inference time. This trades storage space for query speed and makes the feature definitions auditable — important when explaining to stakeholders why a customer was flagged as high-risk.",
      ],
      lessonsLearned: [
        "Feature engineering contributed more to model performance than algorithm selection — domain-specific features like service density proved more predictive than raw numerical inputs.",
        "Class imbalance (73.4% non-churn) required careful handling with stratified splitting and threshold tuning rather than just SMOTE oversampling.",
        "Executive stakeholders valued the revenue-at-risk metric far more than model accuracy — translating predictions into dollar impact was critical for adoption.",
      ],
      whatIWouldImprove: [
        "Add time-series features: customer behavior changes over the last 3-6 months (declining usage, support ticket frequency) would likely improve prediction quality.",
        "Implement model monitoring: currently the model is trained once on a static dataset. For real-world deployment, I am exploring adding data drift detection and scheduled retraining.",
        "Build an API layer with FastAPI to serve predictions in real-time instead of batch processing — this would enable integration with CRM systems for automated retention workflows.",
        "Experiment with SHAP values for individual prediction explanations — this would help retention teams understand why each specific customer was flagged, not just that they were flagged.",
        "Add A/B testing framework to measure whether the retention campaigns driven by model predictions actually reduce churn compared to the existing approach.",
      ],
    },
  },
  {
    slug: "fraud-risk",
    title: "Enterprise Fraud Risk Pipeline",
    subtitle: "Tackling extreme class imbalance in financial transaction data",
    description:
      "Built a fraud detection pipeline handling a dataset where only 0.17% of transactions were fraudulent — learning why standard accuracy metrics are misleading and why recall on the minority class is what actually matters.",
    metrics: [
      { value: "56,962", label: "Transactions" },
      { value: "83.67%", label: "Fraud Recall" },
      { value: "0.17%", label: "Fraud Rate" },
      { value: "82 / 98", label: "True Positives" },
    ],
    techStack: ["Python", "Scikit-Learn", "Power BI", "DAX"],
    github: "https://github.com/AxArjun/enterprise-fraud-risk-pipeline",
    caseStudy: "/projects/fraud-risk",
    defensibility: "99.85% accuracy reported with explicit baseline context: a predict-none classifier achieves 99.83%. The operative metric is 83.67% fraud recall at controlled false-positive cost.",
    sections: {
      problem:
        "Financial transaction fraud is rare but costly. In this dataset, only 98 out of 56,962 transactions were fraudulent (0.17%). This extreme class imbalance makes fraud detection fundamentally different from typical classification problems — a model that predicts every transaction as legitimate would achieve 99.83% accuracy while catching zero fraud. The real challenge is maximizing fraud recall without drowning operations in false positives.",
      whyExistingProcessFailed:
        "A naive classifier would achieve 99.83% accuracy by simply labeling everything as legitimate. This highlights why accuracy is a misleading metric for imbalanced datasets. The goal is not high accuracy — it is catching as many fraudulent transactions as possible (recall) while keeping false positives manageable. Missing a fraud case (false negative) is far more expensive than flagging a legitimate transaction for review (false positive).",
      dataCharacteristics: [
        "56,962 transactions with only 98 (0.17%) labeled as fraud — one of the most extreme class imbalances I have worked with.",
        "All features were pre-anonymized (PCA-transformed) for privacy, limiting domain-specific feature engineering.",
        "Transaction amounts showed heavy right skew — most transactions were small, but fraud occurred across the full range.",
        "No temporal ordering was preserved, so time-based feature engineering was not possible.",
      ],
      solution:
        "Built a classification pipeline using SMOTE oversampling to address the class imbalance and Random Forest for fraud prediction. SMOTE generates synthetic minority samples to balance the training set, allowing the model to learn fraud patterns rather than defaulting to the majority class. The key design decision was optimizing for recall on the fraud class rather than overall accuracy.",
      architecture:
        "The pipeline follows an extract-process-predict-report pattern: raw transaction data is ingested, features are engineered and scaled, SMOTE generates synthetic minority samples for balanced training, the Random Forest model produces fraud probability scores, and Power BI dashboards present risk intelligence with drill-down capability.",
      techDetail:
        "Python with Pandas for data manipulation. Scikit-Learn for model training with Random Forest and preprocessing pipelines. SMOTE from imbalanced-learn for synthetic oversampling. Power BI with DAX for risk intelligence reporting.",
      modelJourney: [
        "Started with a baseline Logistic Regression on the imbalanced dataset — achieved 99.8% accuracy but only 12% fraud recall. This confirmed that standard training on imbalanced data produces useless fraud detectors.",
        "Applied SMOTE to the training set only (never the full dataset before splitting — that would cause data leakage). This synthetic oversampling gave the model enough fraud examples to learn from.",
        "Trained Random Forest on the SMOTE-balanced data — fraud recall improved to 83.67% while maintaining a false positive rate of only 0.13%.",
        "Tuned the classification threshold to prioritize recall over precision. In fraud detection, missing a real fraud (false negative) costs more than investigating a false alarm (false positive).",
        "The final model correctly identified 82 out of 98 fraudulent transactions in the test set — not perfect, but a realistic result given the difficulty of the problem.",
      ],
      implementation: [
        "Processed 56,962 transaction records, carefully handling the extreme class imbalance of 0.17% fraud rate.",
        "Applied SMOTE oversampling to balance training data without leaking information from the test set.",
        "Engineered amount-based features and applied standard scaling to normalize feature ranges.",
        "Trained Random Forest with stratified cross-validation, focusing on recall as the primary metric.",
        "Built Power BI risk dashboard with transaction scoring, fraud pattern analysis, and drill-down views.",
      ],
      results: [
        "83.67% recall on the fraud class — correctly flagged 82 out of 98 fraudulent transactions.",
        "False positive rate of 0.13% — only a tiny fraction of legitimate transactions were incorrectly flagged.",
        "99.85% overall accuracy, but this metric is secondary — the fraud recall is what matters in practice.",
        "The model demonstrates that with proper imbalance handling, ML can meaningfully outperform rule-based systems.",
      ],
      businessImpact:
        "In a production environment, catching 83.67% of fraud while only disrupting 0.13% of legitimate transactions would significantly reduce fraud losses with minimal customer friction. The key insight from this project is that fraud detection is not about maximizing accuracy — it is about balancing the cost of missed fraud against the cost of false alarms.",
      engineeringDecisions: [
        "Applied SMOTE to training data only, not before the train/test split. Applying SMOTE to the full dataset first would leak synthetic samples into the test set and inflate evaluation metrics — a common mistake in imbalanced learning tutorials.",
        "Chose recall as the primary optimization metric instead of accuracy or F1-score. In fraud detection, a missed fraud (false negative) has a much higher business cost than a false alarm (false positive).",
        "Used Random Forest over Logistic Regression because the anonymized PCA features likely had non-linear relationships that a linear model could not capture.",
        "Did not over-tune hyperparameters because with only 98 fraud examples, there is a real risk of overfitting to the specific fraud patterns in this dataset. A simpler model that generalizes is more valuable than a complex model that memorizes.",
      ],
      lessonsLearned: [
        "Standard accuracy metrics are misleading for imbalanced datasets — a naive 'predict all legitimate' model would achieve 99.83% accuracy. Recall and precision on the minority class are the meaningful metrics.",
        "SMOTE must be applied only to training data, never to the full dataset before splitting, to prevent data leakage and inflated evaluation metrics.",
        "The cost of a missed fraud (false negative) vastly exceeds the cost of a false positive — understanding this asymmetric cost structure is essential for designing the right evaluation framework.",
        "With only 98 positive examples, model performance has high variance — results should be interpreted with appropriate caution.",
      ],
      whatIWouldImprove: [
        "Implement cost-sensitive learning as an alternative to SMOTE — assigning higher misclassification costs to the minority class rather than generating synthetic data.",
        "Add anomaly detection as a complementary approach — unsupervised methods might catch novel fraud patterns that the supervised model misses.",
        "Build a proper evaluation framework with confidence intervals given the small number of positive examples.",
        "Add SHAP analysis to understand which features drive individual fraud predictions.",
      ],
    },
  },
  {
    slug: "worker-safety",
    title: "Worker Safety Detection System",
    subtitle: "AI-Powered PPE Compliance Monitoring using Computer Vision",
    description:
      "Built a computer vision-based worker safety monitoring system using YOLOv8 capable of detecting workers and identifying PPE compliance in real time. The system automatically flags missing safety equipment and provides visual alerts through an integrated monitoring interface.",
    metrics: [
      { value: "YOLOv8", label: "Detection Model" },
      { value: "Real-Time", label: "Inference" },
      { value: "PPE", label: "Compliance Checks" },
      { value: "CV + AI", label: "Technology Stack" },
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Computer Vision"],
    github: "https://github.com/AxArjun/worker-safety-detection",
    defensibility: "Implemented YOLOv8 due to its balance of detection accuracy and inference speed for real-time PPE monitoring. Designed the system to support future deployment on live CCTV streams and edge devices.",
    sections: {
      problem:
        "Manual monitoring of workplace safety compliance is time-consuming and prone to human oversight. Industrial environments require automated detection of Personal Protective Equipment (PPE) violations to improve worker safety.",
      solution:
        "Developed an AI-powered workplace safety monitoring solution capable of detecting workers and verifying PPE compliance using computer vision techniques.",
      architecture:
        "The system utilizes YOLOv8 for object detection to identify workers and their PPE (helmets, vests) in real-time. A FastAPI backend processes video frames via OpenCV, returning compliance statuses.",
      techDetail:
        "Python, YOLOv8 for deep learning object detection, OpenCV for image and video stream processing, and FastAPI for real-time API serving.",
      implementation: [
        "Trained YOLOv8 model to recognize hardhats, safety vests, and personnel.",
        "Built an OpenCV pipeline to process incoming video feeds frame-by-frame.",
        "Integrated the model with a FastAPI service to provide immediate compliance alerts."
      ],
      results: [
        "Successfully identifies workers and PPE with high accuracy.",
        "Operates in real-time suitable for integration with existing CCTV infrastructure.",
        "Demonstrates practical application of deep learning for industrial safety."
      ],
      businessImpact:
        "Automated PPE detection significantly reduces the likelihood of workplace accidents by ensuring continuous compliance monitoring without relying on human supervisors.",
      lessonsLearned: [
        "Real-time computer vision requires careful optimization of the inference pipeline to maintain high FPS.",
        "Balancing detection thresholds is necessary to minimize false positives while ensuring no safety violations are missed."
      ]
    }
  },
  {
    slug: "contract-analyzer",
    title: "AI Contract Analyzer",
    subtitle: "OCR + Multi-Agent Contract Risk Analysis System",
    description:
      "A multi-agent AI system utilizing LangGraph and the Gemini API to perform specialized domain-level risk analysis on legal and financial contracts, demonstrating complex agentic routing and structured output generation.",
    metrics: [
      { value: "4", label: "Agent Types" },
      { value: "LangGraph", label: "Framework" },
      { value: "PDF / Image", label: "Input" },
      { value: "Gemini API", label: "Planner" },
    ],
    techStack: ["Python", "FastAPI", "LangGraph", "Gemini API", "PyMuPDF", "pytesseract"],
    github: "https://github.com/AxArjun/AI-Contract-Analyzer-V1",
    caseStudy: "/projects/contract-analyzer",
    defensibility: "Multi-agent routing via LangGraph: a planner node reads contract text and activates only the relevant specialist agents (Legal, Finance, Compliance, Operations) per document.",
    sections: {
      problem:
        "Manual review of complex business contracts is slow, expensive, and prone to human error. Legal and operational teams spend countless hours scanning lengthy PDFs for hidden liabilities, specific compliance requirements, and financial risks, creating a bottleneck in business operations.",
      solution:
        "Built a multi-agent AI system that automates the contract review process. A planner node intelligently analyzes the document and routes it to specialized AI agents (Legal, Finance, Compliance, Operations) which extract risks and structured insights specific to their domain.",
      architecture:
        "The system uses FastAPI to handle file uploads (PDF/images) and PyMuPDF/pytesseract for OCR text extraction. The extracted text is fed into a LangGraph workflow. A 'Planner' Gemini agent evaluates the document context and determines which specialized sub-agents to invoke. The specialized agents process the text in parallel and return structured JSON risk analyses, which are aggregated and returned to the user.",
      techDetail:
        "Python and FastAPI for the web layer. PyMuPDF and pytesseract for document ingestion and OCR. LangGraph for orchestrating the multi-agent state machine. Gemini API for LLM reasoning and structured JSON output generation.",
      implementation: [
        "Built a robust document ingestion pipeline capable of parsing both searchable PDFs and image-based scans using PyMuPDF and Tesseract OCR.",
        "Designed a LangGraph state machine with a dynamic routing node that conditionally invokes 1 to 4 specialized agents based on the contract's content.",
        "Engineered specialized prompts for Legal, Finance, Compliance, and Operations domains to ensure agents return highly specific, actionable insights rather than generic summaries.",
        "Enforced structured JSON outputs from the Gemini API to allow the FastAPI backend to consume and serve the analysis programmatically.",
      ],
      results: [
        "Created an extensible multi-agent framework capable of analyzing complex contracts in seconds.",
        "Demonstrated advanced prompt engineering and agentic workflows far beyond simple RAG or chat interfaces.",
        "Successfully decoupled domain expertise into distinct AI agents, improving the quality and specificity of the risk analysis.",
      ],
      businessImpact:
        "This system accelerates the contract review cycle drastically. By pre-flagging potential liabilities across multiple business domains, it allows human reviewers to focus only on high-risk clauses, saving both time and legal consulting fees.",
      lessonsLearned: [
        "Agentic routing (LangGraph) is significantly more powerful than a monolithic LLM prompt. Asking one model to 'analyze everything' yields shallow results; splitting tasks into a Planner and Specialists yields deep, structured insights.",
        "Structured output generation is the key to turning LLM text into software. Enforcing JSON schemas natively through the Gemini API made the agents reliable components of a larger backend system.",
      ]
    }
  },
  {
    slug: "fleximart",
    title: "FlexiMart Data Engineering Pipeline",
    subtitle: "Retail Data Warehouse & Analytics Pipeline",
    description:
      "Designed and built a complete data engineering pipeline — from ETL ingestion through star schema warehousing to advanced SQL analytics. Focused on learning core data engineering concepts: data modeling, ETL development, and business reporting.",
    metrics: [
      { value: "5", label: "Data Sources" },
      { value: "3-tier", label: "Architecture" },
      { value: "Star Schema", label: "Schema Design" },
      { value: "CTEs + Window Fns", label: "Analytics" },
    ],
    techStack: [
      "Python",
      "MySQL",
      "MongoDB",
      "Star Schema",
      "Advanced SQL",
    ],
    github: "https://github.com/AxArjun/Enterprise-Data-Engineering-Pipeline",
    caseStudy: "/projects/fleximart",
    defensibility: "Three-tier architecture with deliberate storage-layer separation: MySQL for transactional integrity (3NF), MongoDB for flexible product catalog, Star Schema warehouse for analytical queries.",
    sections: {
      problem:
        "A growing retail operation needed a structured approach to managing its data across multiple sources including transactional systems, inventory databases, and customer records. The existing setup involved disconnected spreadsheets and ad-hoc queries, making it impossible to generate reliable cross-functional reports or perform trend analysis across time periods.",
      solution:
        "Designed and built a three-tier data warehouse architecture: a Python ETL ingestion layer for data extraction and transformation, a hybrid MySQL/MongoDB storage layer implementing star schema design for analytical queries, and an advanced SQL analytics layer for business reporting. The project focused on learning fundamental data engineering practices — data modeling, ETL development, indexing strategies, and query optimization.",
      architecture:
        "Tier 1 — Ingestion: Python ETL pipelines extract data from source systems, perform cleaning, validation and transformation. Tier 2 — Storage: MySQL implements the star schema with fact tables (sales, inventory) and dimension tables (product, customer, time, store). MongoDB stores semi-structured data like customer reviews and product metadata. Tier 3 — Analytics: Advanced SQL queries and views power business reporting.",
      techDetail:
        "Python with Pandas for ETL pipeline development. MySQL for relational star schema implementation with foreign key constraints and indexing. MongoDB for semi-structured document storage. Advanced SQL with window functions, CTEs, and materialized views for analytics.",
      implementation: [
        "Designed star schema with 2 fact tables and 4 dimension tables optimized for analytical queries.",
        "Built Python ETL pipeline handling data extraction, transformation, and loading with error handling and logging.",
        "Implemented MySQL warehouse with proper indexing, constraints, and partitioning strategies.",
        "Set up MongoDB collections for semi-structured product and review data with appropriate indexes.",
        "Developed advanced SQL analytics layer with window functions, CTEs, and aggregate views for business reporting.",
      ],
      results: [
        "Unified 5 disparate data sources into a single queryable warehouse.",
        "Reduced report generation from hours of manual spreadsheet work to SQL queries.",
        "Star schema design enables flexible dimensional analysis across product, customer, time, and location.",
        "Hybrid storage approach handles both structured transactional data and semi-structured metadata.",
      ],
      businessImpact:
        "The warehouse provides the data foundation for all downstream analytics. Cross-functional analysis that was previously impossible — correlating sales trends with inventory levels, customer segments with product preferences, and temporal patterns across store locations — can now be done with SQL queries. The project gave me hands-on experience with data modeling, ETL development, and the trade-offs involved in designing analytics-ready data infrastructure.",
      engineeringDecisions: [
        "Chose a star schema over a normalized 3NF design because the primary use case was analytical queries, not transactional writes. Star schemas trade storage efficiency for query performance — a deliberate trade-off for a reporting-focused warehouse.",
        "Used a hybrid MySQL/MongoDB approach to handle both structured transactional data and semi-structured metadata. This taught me the trade-offs of polyglot persistence — it adds complexity but provides flexibility for different data shapes.",
        "Built the ETL pipeline in Python rather than using an orchestration tool like Airflow because the project scope was small enough that a well-structured Python script was simpler and more maintainable.",
        "Implemented the analytics layer as SQL views and CTEs rather than pre-computed tables. This keeps the analytics logic transparent and auditable at the cost of slightly slower query execution.",
      ],
      lessonsLearned: [
        "Star schema design decisions must be driven by query patterns, not source system structure — denormalization for query performance is a deliberate trade-off.",
        "Hybrid SQL/NoSQL architecture provides flexibility but requires clear data governance rules about which data goes where.",
        "ETL pipeline error handling and data validation are as critical as the transformation logic — bad data propagates downstream and corrupts all analytics.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
