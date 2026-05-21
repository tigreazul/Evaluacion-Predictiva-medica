export interface SpecificRisk {
  name: string;
  score: number;
  label: string;
  level: "low" | "medium" | "high";
}

export interface XaiFactor {
  name: string;
  impact: number;
  direction: "positive" | "negative";
}

export interface PredictionResult {
  id: string;
  patientCode: string;
  evaluationDate: string;
  globalRisk: number;
  globalRiskLabel: string;
  specificRisks: SpecificRisk[];
  xaiFactors: XaiFactor[];
}

export const mockResult: PredictionResult = {
  id: "RES-0001",
  patientCode: "PAC-0001",
  evaluationDate: "2024-05-24",
  globalRisk: 38,
  globalRiskLabel: "Riesgo Bajo-Medio",
  specificRisks: [
    {
      name: "Obesidad",
      score: 22,
      label: "Normal",
      level: "low",
    },
    {
      name: "Diabetes Tipo 2",
      score: 54,
      label: "Precaución",
      level: "medium",
    },
    {
      name: "Hipertensión",
      score: 71,
      label: "Alto",
      level: "high",
    },
  ],
  xaiFactors: [
    {
      name: "Sedentarismo",
      impact: 18,
      direction: "positive",
    },
    {
      name: "IMC elevado",
      impact: 15,
      direction: "positive",
    },
    {
      name: "Perímetro abdominal",
      impact: 12,
      direction: "positive",
    },
    {
      name: "Edad",
      impact: 11,
      direction: "positive",
    },
    {
      name: "Antecedentes familiares",
      impact: 10,
      direction: "positive",
    },
    {
      name: "Presión arterial",
      impact: 9,
      direction: "positive",
    },
    {
      name: "Estrés",
      impact: 8,
      direction: "positive",
    },
    {
      name: "Calidad del sueño",
      impact: 8,
      direction: "positive",
    },
    {
      name: "Actividad física",
      impact: 10,
      direction: "negative",
    },
  ],
};
