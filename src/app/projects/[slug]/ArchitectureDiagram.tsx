"use client";

import { useTheme } from "@/components/layout/ThemeProvider";

interface ArchitectureDiagramProps {
  slug: string;
}

function useDiagramColors() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return {
    bg: isDark ? "#151515" : "#F8FAFC",
    stroke: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
    strokeArrow: isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.2)",
    text: isDark ? "#A1A1AA" : "#64748B",
    accent: "#3B82F6",
    accentStroke: isDark ? "rgba(59,130,246,0.3)" : "rgba(37,99,235,0.25)",
  };
}

function TelcoArchitecture() {
  const c = useDiagramColors();
  return (
    <svg viewBox="0 0 800 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="70" width="160" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="100" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Ingestion Layer</text>
      <text x="100" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Python ETL</text>

      <line x1="180" y1="100" x2="240" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow)" />

      <rect x="240" y="70" width="160" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="320" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Analytics Layer</text>
      <text x="320" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">PostgreSQL + SQL</text>

      <line x1="400" y1="100" x2="460" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow)" />

      <rect x="460" y="70" width="160" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="540" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Intelligence Layer</text>
      <text x="540" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Scikit-Learn RF</text>

      <line x1="620" y1="100" x2="680" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow)" />

      <rect x="680" y="70" width="100" height="60" rx="6" fill={c.bg} stroke={c.accentStroke} strokeWidth="1" />
      <text x="730" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Dashboards</text>
      <text x="730" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Power BI</text>

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke={c.strokeArrow} strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function FraudArchitecture() {
  const c = useDiagramColors();
  return (
    <svg viewBox="0 0 800 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="90" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Raw Data</text>
      <text x="90" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">56,962 Txns</text>

      <line x1="160" y1="100" x2="210" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow2)" />

      <rect x="210" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="280" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Feature Eng.</text>
      <text x="280" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Pandas + Scaling</text>

      <line x1="350" y1="100" x2="400" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow2)" />

      <rect x="400" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="470" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">SMOTE + Train</text>
      <text x="470" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Random Forest</text>

      <line x1="540" y1="100" x2="590" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow2)" />

      <rect x="590" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.accentStroke} strokeWidth="1" />
      <text x="660" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Risk Intelligence</text>
      <text x="660" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Power BI + DAX</text>

      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke={c.strokeArrow} strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function FlexiMartArchitecture() {
  const c = useDiagramColors();
  return (
    <svg viewBox="0 0 800 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="100" width="160" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="100" y="122" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Tier 1: Ingestion</text>
      <text x="100" y="142" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Python ETL</text>

      <line x1="180" y1="130" x2="240" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow3)" />
      <line x1="180" y1="130" x2="240" y2="160" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow3)" />

      <rect x="240" y="60" width="160" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="320" y="85" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Tier 2: Warehouse</text>
      <text x="320" y="103" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">MySQL Star Schema</text>

      <rect x="240" y="140" width="160" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="320" y="165" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Tier 2: Document</text>
      <text x="320" y="183" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">MongoDB</text>

      <line x1="400" y1="90" x2="480" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow3)" />
      <line x1="400" y1="170" x2="480" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow3)" />

      <rect x="480" y="100" width="180" height="60" rx="6" fill={c.bg} stroke={c.accentStroke} strokeWidth="1" />
      <text x="570" y="125" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Tier 3: Analytics</text>
      <text x="570" y="143" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Advanced SQL + Views</text>

      <defs>
        <marker id="arrow3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke={c.strokeArrow} strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function WorkerSafetyArchitecture() {
  const c = useDiagramColors();
  return (
    <svg viewBox="0 0 800 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="90" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Video Ingestion</text>
      <text x="90" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">OpenCV Pipeline</text>

      <line x1="160" y1="100" x2="210" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ws)" />

      <rect x="210" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="280" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Preprocessing</text>
      <text x="280" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Frame Resizing</text>

      <line x1="350" y1="100" x2="400" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ws)" />

      <rect x="400" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="470" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">PPE Detection</text>
      <text x="470" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">YOLOv8 Model</text>

      <line x1="540" y1="100" x2="590" y2="100" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ws)" />

      <rect x="590" y="70" width="140" height="60" rx="6" fill={c.bg} stroke={c.accentStroke} strokeWidth="1" />
      <text x="660" y="95" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Compliance API</text>
      <text x="660" y="113" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">FastAPI / Alerts</text>

      <defs>
        <marker id="arrow-ws" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke={c.strokeArrow} strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

function ContractArchitecture() {
  const c = useDiagramColors();
  return (
    <svg viewBox="0 0 800 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="100" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="90" y="125" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">OCR & Ingestion</text>
      <text x="90" y="143" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">PyMuPDF + Tesseract</text>

      <line x1="160" y1="130" x2="220" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />

      <rect x="220" y="100" width="140" height="60" rx="6" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="290" y="125" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">LangGraph Router</text>
      <text x="290" y="143" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Planner Agent</text>

      <line x1="360" y1="130" x2="420" y2="42" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />
      <line x1="360" y1="130" x2="420" y2="97" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />
      <line x1="360" y1="130" x2="420" y2="152" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />
      <line x1="360" y1="130" x2="420" y2="207" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />

      <rect x="420" y="20" width="140" height="45" rx="4" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="490" y="47" textAnchor="middle" fill={c.text} fontSize="10" fontFamily="var(--font-geist-mono)">Legal Specialist</text>

      <rect x="420" y="75" width="140" height="45" rx="4" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="490" y="102" textAnchor="middle" fill={c.text} fontSize="10" fontFamily="var(--font-geist-mono)">Finance Specialist</text>

      <rect x="420" y="130" width="140" height="45" rx="4" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="490" y="157" textAnchor="middle" fill={c.text} fontSize="10" fontFamily="var(--font-geist-mono)">Compliance Spec</text>

      <rect x="420" y="185" width="140" height="45" rx="4" fill={c.bg} stroke={c.stroke} strokeWidth="1" />
      <text x="490" y="212" textAnchor="middle" fill={c.text} fontSize="10" fontFamily="var(--font-geist-mono)">Operations Spec</text>

      <line x1="560" y1="42" x2="620" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />
      <line x1="560" y1="97" x2="620" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />
      <line x1="560" y1="152" x2="620" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />
      <line x1="560" y1="207" x2="620" y2="130" stroke={c.strokeArrow} strokeWidth="1" markerEnd="url(#arrow-ca)" />

      <rect x="620" y="100" width="160" height="60" rx="6" fill={c.bg} stroke={c.accentStroke} strokeWidth="1" />
      <text x="700" y="125" textAnchor="middle" fill={c.text} fontSize="11" fontFamily="var(--font-geist-mono)">Consolidation</text>
      <text x="700" y="143" textAnchor="middle" fill={c.accent} fontSize="10" fontFamily="var(--font-geist-mono)">Structured JSON</text>

      <defs>
        <marker id="arrow-ca" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="none" stroke={c.strokeArrow} strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

export function ArchitectureDiagram({ slug }: ArchitectureDiagramProps) {
  return (
    <div className="p-6 bg-bg-card border border-border-subtle rounded-lg overflow-x-auto card-elevated">
      {slug === "telco-churn" && <TelcoArchitecture />}
      {slug === "fraud-risk" && <FraudArchitecture />}
      {slug === "fleximart" && <FlexiMartArchitecture />}
      {slug === "worker-safety" && <WorkerSafetyArchitecture />}
      {slug === "contract-analyzer" && <ContractArchitecture />}
    </div>
  );
}
