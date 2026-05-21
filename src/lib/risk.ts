export function calculateBmi(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}

export function classifyBmi(bmi: number): string {
  if (bmi < 18.5) return "Bajo peso";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Sobrepeso";
  return "Obesidad";
}

export function getBmiColor(bmi: number): string {
  if (bmi < 18.5) return "text-tertiary";
  if (bmi < 25) return "text-secondary";
  if (bmi < 30) return "text-tertiary";
  return "text-error";
}

export type RiskLevel = "low" | "medium" | "high";

export function getRiskLevel(score: number): RiskLevel {
  if (score < 30) return "low";
  if (score < 60) return "medium";
  return "high";
}

export function getRiskLabel(level: RiskLevel): string {
  const labels = {
    low: "Bajo",
    medium: "Medio",
    high: "Alto",
  };
  return labels[level];
}

export function getRiskColor(level: RiskLevel): string {
  const colors = {
    low: "text-secondary",
    medium: "text-tertiary",
    high: "text-error",
  };
  return colors[level];
}

export function getRiskBgColor(level: RiskLevel): string {
  const colors = {
    low: "bg-secondary-container",
    medium: "bg-tertiary-container",
    high: "bg-error-container",
  };
  return colors[level];
}
