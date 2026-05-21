export interface Recommendation {
  id: string;
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  icon: string;
}

export const mockRecommendations: Recommendation[] = [
  {
    id: "rec-1",
    priority: "high",
    title: "Monitorear presión arterial",
    description: "Monitorear presión arterial durante las próximas semanas. Consultar a un especialista si los valores se mantienen elevados.",
    icon: "activity",
  },
  {
    id: "rec-2",
    priority: "high",
    title: "Reducir perímetro abdominal",
    description: "Enfocarse en reducir la grasa abdominal mediante ejercicio cardiovascular y alimentación balanceada.",
    icon: "target",
  },
  {
    id: "rec-3",
    priority: "medium",
    title: "Incrementar actividad física",
    description: "Incrementar actividad física progresivamente. Objetivo: 150 minutos semanales de actividad moderada.",
    icon: "trendingUp",
  },
  {
    id: "rec-4",
    priority: "medium",
    title: "Mejorar calidad alimentaria",
    description: "Reducir consumo de alimentos ultraprocesados y aumentar ingesta de frutas, verduras y proteínas magras.",
    icon: "apple",
  },
  {
    id: "rec-5",
    priority: "low",
    title: "Optimizar sueño",
    description: "Dormir entre 7 y 8 horas diarias. Mantener horarios regulares de sueño.",
    icon: "moon",
  },
  {
    id: "rec-6",
    priority: "low",
    title: "Hidratación adecuada",
    description: "Mantener hidratación adecuada. Consumir al menos 8 vasos de agua al día.",
    icon: "droplet",
  },
  {
    id: "rec-7",
    priority: "low",
    title: "Control periódico",
    description: "Controlar el perímetro abdominal periódicamente y registrar cambios.",
    icon: "ruler",
  },
];
