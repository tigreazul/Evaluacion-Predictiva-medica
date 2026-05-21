export interface PopulationMetrics {
  totalEvaluations: number;
  totalEvaluationsVariation: number;
  highRiskCases: number;
  highRiskVariation: number;
  riskDistribution: {
    low: number;
    medium: number;
    high: number;
  };
  trend: string;
  quarterlyGoal: number;
}

export const mockMetrics: PopulationMetrics = {
  totalEvaluations: 14282,
  totalEvaluationsVariation: 12.4,
  highRiskCases: 2856,
  highRiskVariation: 2.1,
  riskDistribution: {
    low: 45,
    medium: 35,
    high: 20,
  },
  trend: "Estabilizándose",
  quarterlyGoal: 85,
};

export interface RegionData {
  region: string;
  cases: number;
}

export const mockRegionData: RegionData[] = [
  { region: "Lima Metropolitana", cases: 3842 },
  { region: "Piura", cases: 1654 },
  { region: "La Libertad", cases: 1423 },
  { region: "Lambayeque", cases: 982 },
  { region: "Ica", cases: 876 },
  { region: "Arequipa", cases: 745 },
];

export interface RiskFactor {
  factor: string;
  prevalence: number;
}

export const mockRiskFactors: RiskFactor[] = [
  { factor: "IMC > 30", prevalence: 64 },
  { factor: "Sedentarismo alto", prevalence: 58 },
  { factor: "Perímetro abdominal elevado", prevalence: 52 },
  { factor: "Presión arterial elevada", prevalence: 47 },
  { factor: "Sueño insuficiente", prevalence: 43 },
  { factor: "Estrés alto", prevalence: 39 },
];

export interface TimeSeriesData {
  month: string;
  evaluaciones: number;
  altoRiesgo: number;
}

export const mockTimeSeriesData: TimeSeriesData[] = [
  { month: "Ene", evaluaciones: 980, altoRiesgo: 186 },
  { month: "Feb", evaluaciones: 1120, altoRiesgo: 213 },
  { month: "Mar", evaluaciones: 1340, altoRiesgo: 241 },
  { month: "Abr", evaluaciones: 1580, altoRiesgo: 284 },
  { month: "May", evaluaciones: 1720, altoRiesgo: 327 },
];
