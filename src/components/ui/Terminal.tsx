"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalProjects = [
  {
    title: "churn_model.py",
    command: "python churn_model.py",
    lines: [
      { text: "Loading dataset... 7,043 customers", type: "output" },
      { text: "Training Random Forest Classifier...", type: "output" },
      { text: "ROC-AUC:  85.0%", type: "metric" },
      { text: "Accuracy: 80.7%", type: "metric" },
      { text: "Revenue At Risk: ₹139K/mo", type: "metric" },
      { text: "✓ Model serialized → churn_model.pkl", type: "success" },
    ]
  },
  {
    title: "fraud_detector.py",
    command: "python fraud_detector.py",
    lines: [
      { text: "Ingesting transaction data... 56,962 records", type: "output" },
      { text: "Applying SMOTE oversampling (Fraud rate: 0.17%)...", type: "output" },
      { text: "Fraud Recall: 83.67%", type: "metric" },
      { text: "False Positive Rate: 0.13%", type: "metric" },
      { text: "✓ Pipeline complete: caught 82/98 fraud cases", type: "success" },
    ]
  },
  {
    title: "safety_detector.py",
    command: "python safety_detector.py",
    lines: [
      { text: "Initializing YOLOv8 deep learning model...", type: "output" },
      { text: "Running real-time inference on video stream (30 FPS)...", type: "output" },
      { text: "Worker detected (Confidence: 94%)", type: "output" },
      { text: "Hardhat check: PASS | Vest check: FAIL", type: "metric" },
      { text: "⚠ Safety violation alert raised", type: "error" },
    ]
  },
  {
    title: "contract_analyzer.py",
    command: "python contract_analyzer.py",
    lines: [
      { text: "Parsing contract PDF via PyMuPDF + OCR...", type: "output" },
      { text: "Activating LangGraph orchestrator...", type: "output" },
      { text: "Routing to Legal and Finance specialist agents...", type: "output" },
      { text: "Structuring JSON risk audit via Gemini API...", type: "metric" },
      { text: "✓ Analysis complete: 3 critical risks found", type: "success" },
    ]
  },
  {
    title: "etl_pipeline.py",
    command: "python etl_pipeline.py",
    lines: [
      { text: "Extracting from 5 retail data sources...", type: "output" },
      { text: "Loading hybrid MySQL (3NF) + MongoDB catalog...", type: "output" },
      { text: "Running ETL: transforming to Star Schema...", type: "output" },
      { text: "Refreshing Data Warehouse materialized views...", type: "metric" },
      { text: "✓ ETL finished: analytical views ready", type: "success" },
    ]
  }
];

export function Terminal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % terminalProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-dark w-full rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#151515] overflow-hidden shadow-2xl shadow-black/20">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="ml-2 text-xs text-[#A1A1AA] font-mono">
          {terminalProjects[index].title}
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 md:p-6 font-mono text-sm leading-relaxed min-h-[220px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-x-5 md:inset-x-6 top-5 md:top-6"
          >
            <div className="text-white mb-2">
              <span className="text-[#3B82F6] font-semibold">$</span> {terminalProjects[index].command}
            </div>
            {terminalProjects[index].lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "metric"
                    ? "text-[#3B82F6]"
                    : line.type === "success"
                      ? "text-emerald-400"
                      : line.type === "error"
                        ? "text-red-400"
                        : "text-[#A1A1AA]"
                }
              >
                {line.text}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
