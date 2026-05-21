export function formatBmi(bmi: number): string {
  return bmi.toFixed(1);
}

export function formatRiskScore(score: number): string {
  return `${Math.round(score)}%`;
}

export function formatWeight(kg: number): string {
  return `${kg.toFixed(1)} kg`;
}

export function formatHeight(cm: number): string {
  return `${cm.toFixed(0)} cm`;
}

export function formatWaist(cm: number): string {
  return `${cm.toFixed(1)} cm`;
}
