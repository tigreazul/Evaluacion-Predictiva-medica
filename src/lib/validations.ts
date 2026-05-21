import { z } from "zod";

export const evaluationSchema = z.object({
  // Demographic
  age: z.number().min(18, "Edad mínima 18 años").max(100, "Edad máxima 100 años"),
  sex: z.enum(["masculino", "femenino"], {
    message: "Seleccione sexo biológico",
  }),
  educationLevel: z.string().min(1, "Seleccione nivel educativo"),
  ethnicity: z.string().optional(),
  region: z.string().min(1, "Seleccione región"),

  // Anthropometry
  weightKg: z.number().min(30, "Peso mínimo 30 kg").max(250, "Peso máximo 250 kg"),
  heightCm: z.number().min(100, "Talla mínima 100 cm").max(230, "Talla máxima 230 cm"),
  waistCm: z.number().min(50, "Perímetro mínimo 50 cm").max(180, "Perímetro máximo 180 cm"),

  // Lifestyle
  physicalActivity: z.string().min(1, "Seleccione nivel de actividad física"),
  sedentaryLevel: z.string().min(1, "Seleccione nivel de sedentarismo"),
  smoking: z.string().min(1, "Seleccione consumo de tabaco"),
  alcohol: z.string().min(1, "Seleccione consumo de alcohol"),
  dietQuality: z.string().min(1, "Seleccione calidad de alimentación"),
  sleepHours: z.number().min(0, "Horas mínimas 0").max(24, "Horas máximas 24"),

  // Mental Health
  stressLevel: z.string().min(1, "Seleccione nivel de estrés"),
  sleepQuality: z.string().min(1, "Seleccione calidad del sueño"),
  anxietyLevel: z.string().min(1, "Seleccione nivel de ansiedad"),

  // Clinical
  familyDiabetes: z.boolean(),
  familyHypertension: z.boolean(),
  systolicPressure: z.number().min(70).max(250).optional(),
  diastolicPressure: z.number().min(40).max(150).optional(),
  previousDiabetes: z.boolean(),
  previousHypertension: z.boolean(),
  currentMedication: z.string().optional(),
  clinicalNotes: z.string().optional(),
});

export type EvaluationFormData = z.infer<typeof evaluationSchema>;
