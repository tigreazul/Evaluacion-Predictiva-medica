export interface PatientRecord {
  code: string;
  age: number;
  sex: string;
  region: string;
  bmi: number;
  globalRisk: string;
  mainRisk: string;
  date: string;
}

export const mockPatients: PatientRecord[] = [
  {
    code: "EV-0001",
    age: 45,
    sex: "Masculino",
    region: "Lima",
    bmi: 28.4,
    globalRisk: "Medio",
    mainRisk: "Hipertensión",
    date: "2024-05-24",
  },
  {
    code: "EV-0002",
    age: 52,
    sex: "Femenino",
    region: "Piura",
    bmi: 31.2,
    globalRisk: "Alto",
    mainRisk: "Diabetes Tipo 2",
    date: "2024-05-23",
  },
  {
    code: "EV-0003",
    age: 36,
    sex: "Masculino",
    region: "La Libertad",
    bmi: 24.8,
    globalRisk: "Bajo",
    mainRisk: "Ninguno",
    date: "2024-05-22",
  },
  {
    code: "EV-0004",
    age: 61,
    sex: "Femenino",
    region: "Lambayeque",
    bmi: 33.6,
    globalRisk: "Alto",
    mainRisk: "Obesidad",
    date: "2024-05-22",
  },
  {
    code: "EV-0005",
    age: 29,
    sex: "Masculino",
    region: "Ica",
    bmi: 22.3,
    globalRisk: "Bajo",
    mainRisk: "Ninguno",
    date: "2024-05-21",
  },
  {
    code: "EV-0006",
    age: 48,
    sex: "Femenino",
    region: "Arequipa",
    bmi: 27.9,
    globalRisk: "Medio",
    mainRisk: "Diabetes Tipo 2",
    date: "2024-05-21",
  },
  {
    code: "EV-0007",
    age: 55,
    sex: "Masculino",
    region: "Lima",
    bmi: 29.8,
    globalRisk: "Alto",
    mainRisk: "Hipertensión",
    date: "2024-05-20",
  },
  {
    code: "EV-0008",
    age: 42,
    sex: "Femenino",
    region: "Piura",
    bmi: 26.1,
    globalRisk: "Medio",
    mainRisk: "Obesidad",
    date: "2024-05-20",
  },
];
