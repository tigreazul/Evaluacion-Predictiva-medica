import { useMemo } from "react";
import { getRiskLevel, getRiskLabel, getRiskColor, getRiskBgColor } from "@/lib/risk";
import type { RiskLevel } from "@/lib/risk";

export function useRiskLevel(score: number) {
  return useMemo(() => {
    const level: RiskLevel = getRiskLevel(score);
    const label = getRiskLabel(level);
    const color = getRiskColor(level);
    const bgColor = getRiskBgColor(level);

    return { level, label, color, bgColor };
  }, [score]);
}
