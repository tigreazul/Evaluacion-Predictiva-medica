# MetabolicHealth AI

Portal web profesional para predicción temprana de riesgo metabólico mediante inteligencia artificial.

## Tecnologías

- **React 19** + **TypeScript 6**
- **Vite 8**
- **TailwindCSS 4** con paleta clínica personalizada
- **React Router DOM** para navegación
- **React Hook Form** + **Zod** para formularios y validación
- **Recharts** para visualizaciones
- **Lucide React** para iconografía

## Estructura del Proyecto

```
src/
├── app/                    # Configuración de la aplicación
├── components/
│   ├── layout/            # Layouts (PublicLayout, AppLayout, Sidebar)
│   ├── ui/                # Componentes UI base (Button, Card, Badge, etc.)
│   ├── forms/             # Inputs clínicos
│   ├── clinical/          # Componentes especializados
│   └── charts/            # Gráficos con Recharts
├── features/
│   ├── landing/           # Página de inicio
│   ├── evaluation/        # Evaluación clínica
│   ├── results/           # Resultados predictivos
│   └── population-dashboard/  # Dashboard poblacional
├── data/                  # Datos mock
├── hooks/                 # Custom hooks
└── lib/                   # Utilidades
```

## Desarrollo

### Instalación
```bash
npm install
```

### Servidor de desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

**Nota:** Requiere Node.js 20.19+ o 22.12+. Node 21.7.3 no es compatible con Vite 8.

## Rutas

- `/` - Landing page
- `/evaluacion` - Formulario de evaluación clínica
- `/resultados/:id` - Resultados predictivos
- `/dashboard/poblacional` - Dashboard poblacional

## Características

- ✅ Formulario multi-paso con validación
- ✅ Cálculo automático de IMC
- ✅ Visualizaciones con Recharts
- ✅ Dashboard analítico
- ✅ Diseño responsive
- ✅ Componentes reutilizables
- ✅ TypeScript estricto

---

**MetabolicHealth AI** - Predicción de riesgo metabólico con IA
