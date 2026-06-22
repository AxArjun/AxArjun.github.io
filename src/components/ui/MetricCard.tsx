"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface MetricCardProps {
  value: string;
  label: string;
  numericValue?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function MetricCard({
  value,
  label,
  numericValue,
  decimals = 0,
  suffix = "",
  prefix = "",
}: MetricCardProps) {
  const shouldAnimate = numericValue !== undefined;

  const { ref, formatted } = useCountUp({
    end: numericValue ?? 0,
    decimals,
    suffix,
    prefix,
    duration: 2200,
  });

  return (
    <div
      ref={ref}
      className="relative p-5 md:p-6 bg-bg-card border border-border-subtle rounded-lg card-elevated group"
    >
      <div className="absolute top-0 left-5 right-5 h-px bg-accent/40" />
      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary font-mono whitespace-nowrap overflow-hidden text-ellipsis">
        {shouldAnimate ? formatted : value}
      </div>
      <div className="mt-1.5 text-xs text-text-secondary uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
