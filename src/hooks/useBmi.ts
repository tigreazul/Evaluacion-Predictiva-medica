import { useMemo } from "react";
import { calculateBmi, classifyBmi, getBmiColor } from "@/lib/risk";

export function useBmi(weightKg: number | undefined, heightCm: number | undefined) {
  return useMemo(() => {
    if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) {
      return {
        bmi: null,
        classification: null,
        color: null,
      };
    }

    const bmi = calculateBmi(weightKg, heightCm);
    const classification = classifyBmi(bmi);
    const color = getBmiColor(bmi);

    return { bmi, classification, color };
  }, [weightKg, heightCm]);
}
