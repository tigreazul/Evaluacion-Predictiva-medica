export function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top App Bar */}
      <header
        className="sticky top-0 z-50 px-6 h-16 flex justify-between items-center w-full"
        style={{ backgroundColor: "#f8f9fb", borderBottom: "1px solid #c3c6d6" }}
      >
        <div className="flex items-center gap-4">
          <span className="lg:hidden material-symbols-outlined" style={{ color: "#003d9b" }}>menu</span>
          <h2 className="text-2xl font-semibold" style={{ color: "#003d9b" }}>
            Resultados de Evaluación Predictiva
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 rounded-full px-4 py-1.5" style={{ backgroundColor: "#edeef0", border: "1px solid #c3c6d6" }}>
            <span className="material-symbols-outlined text-base" style={{ color: "#737685" }}>search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none"
              placeholder="Buscar registros..."
              type="text"
              style={{ color: "#191c1e" }}
            />
          </div>
          <div className="flex items-center gap-4" style={{ color: "#003d9b" }}>
            <button className="p-2 rounded-full transition-colors hover:bg-gray-50">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 rounded-full transition-colors hover:bg-gray-50">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-8 max-w-[1440px] mx-auto w-full">
        {/* Dashboard Header */}
        <div>
          <h1 className="text-3xl font-semibold mb-1" style={{ color: "#191c1e" }}>
            Informe de Análisis Metabólico
          </h1>
          <p className="text-base" style={{ color: "#434654" }}>
            Análisis completado satisfactoriamente el 24 de Mayo, 2024.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Global Risk Score */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Global Risk Card */}
            <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-8" style={{ color: "#434654" }}>
                Puntaje de Riesgo Metabólico Global
              </h2>
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    fill="transparent"
                    stroke="#e7e8ea"
                    strokeWidth="20"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    fill="transparent"
                    stroke="#006c47"
                    strokeWidth="20"
                    strokeDasharray="691"
                    strokeDashoffset="428"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold" style={{ color: "#191c1e" }}>38%</span>
                  <span className="text-sm font-bold px-4 py-1 rounded-full mt-2" style={{ color: "#006c47", backgroundColor: "#82f9be" }}>
                    Riesgo Bajo-Medio
                  </span>
                </div>
              </div>
              <p className="text-base mt-8 max-w-xs leading-relaxed" style={{ color: "#434654" }}>
                Tu perfil metabólico muestra una estabilidad general con áreas específicas de atención preventiva para optimizar la salud a largo plazo.
              </p>
            </div>

            {/* Specific Risks Card */}
            <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-6" style={{ color: "#434654" }}>
                Riesgos Específicos Detectados
              </h3>
              <div className="space-y-6">
                {/* Obesity */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>monitor_weight</span>
                      <span className="text-sm font-semibold">Obesidad</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ color: "#006c47", backgroundColor: "#82f9be" }}>
                      22% - Normal
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#e7e8ea" }}>
                    <div className="h-full rounded-full" style={{ width: "22%", backgroundColor: "#006c47" }}></div>
                  </div>
                </div>

                {/* Diabetes */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ color: "#5e3c00" }}>bloodtype</span>
                      <span className="text-sm font-semibold">Diabetes Tipo 2</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ color: "#7d5200", backgroundColor: "#ffddb3" }}>
                      54% - Precaución
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#e7e8ea" }}>
                    <div className="h-full rounded-full" style={{ width: "54%", backgroundColor: "#5e3c00" }}></div>
                  </div>
                </div>

                {/* Hypertension */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ color: "#ba1a1a" }}>ecg_heart</span>
                      <span className="text-sm font-semibold">Hipertensión</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ color: "#93000a", backgroundColor: "#ffdad6" }}>
                      71% - Alto
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#e7e8ea" }}>
                    <div className="h-full rounded-full" style={{ width: "71%", backgroundColor: "#ba1a1a" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: XAI & Recommendations */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* XAI Section */}
            <div className="bg-white p-8 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-semibold" style={{ color: "#191c1e" }}>Factores de Influencia de IA</h3>
                  <p className="text-sm" style={{ color: "#434654" }}>Análisis de importancia de variables (XAI)</p>
                </div>
                <span
                  className="material-symbols-outlined cursor-help"
                  style={{ color: "#737685" }}
                  title="Este gráfico muestra cómo cada variable clínica afecta el puntaje final de riesgo."
                >
                  info
                </span>
              </div>
              <div className="space-y-6 relative">
                {/* Vertical Baseline Guide */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-px z-0" style={{ backgroundColor: "#c3c6d6" }}></div>

                {/* Feature: Sedentary lifestyle */}
                <div className="grid grid-cols-12 items-center gap-4 relative z-10">
                  <span className="col-span-5 text-sm" style={{ color: "#191c1e" }}>Estilo de vida sedentario</span>
                  <div className="col-span-7 flex items-center gap-2">
                    <div className="flex-1 flex justify-end">
                      <div className="h-8 rounded-l-sm" style={{ width: "50%", backgroundColor: "#ba1a1a" }} title="Incrementa Riesgo"></div>
                    </div>
                    <div className="w-2 flex justify-center"></div>
                    <div className="flex-1"></div>
                    <span className="text-sm font-mono w-12 text-right" style={{ color: "#ba1a1a", fontVariantNumeric: "tabular-nums" }}>+0.42</span>
                  </div>
                </div>

                {/* Feature: Abdominal circumference */}
                <div className="grid grid-cols-12 items-center gap-4 relative z-10">
                  <span className="col-span-5 text-sm" style={{ color: "#191c1e" }}>Circunferencia abdominal</span>
                  <div className="col-span-7 flex items-center gap-2">
                    <div className="flex-1 flex justify-end">
                      <div className="h-8 rounded-l-sm" style={{ width: "75%", backgroundColor: "#ba1a1a" }} title="Incrementa Riesgo"></div>
                    </div>
                    <div className="w-2 flex justify-center"></div>
                    <div className="flex-1"></div>
                    <span className="text-sm font-mono w-12 text-right" style={{ color: "#ba1a1a", fontVariantNumeric: "tabular-nums" }}>+0.68</span>
                  </div>
                </div>

                {/* Feature: Sleep quality */}
                <div className="grid grid-cols-12 items-center gap-4 relative z-10">
                  <span className="col-span-5 text-sm" style={{ color: "#191c1e" }}>Calidad del sueño</span>
                  <div className="col-span-7 flex items-center gap-2">
                    <div className="flex-1"></div>
                    <div className="w-2 flex justify-center"></div>
                    <div className="flex-1 flex justify-start">
                      <div className="h-8 rounded-r-sm" style={{ width: "33%", backgroundColor: "#006c47" }} title="Reduce Riesgo"></div>
                    </div>
                    <span className="text-sm font-mono w-12 text-right" style={{ color: "#006c47", fontVariantNumeric: "tabular-nums" }}>-0.15</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between text-xs font-bold uppercase tracking-tight" style={{ color: "#c3c6d6" }}>
                <span style={{ color: "#ba1a1a" }}>Incrementa Riesgo</span>
                <span style={{ color: "#434654" }}>Línea Base</span>
                <span style={{ color: "#006c47" }}>Reduce Riesgo</span>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold" style={{ color: "#191c1e" }}>Recomendaciones Clínicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1: Nutrición */}
                <div className="bg-white p-6 rounded-xl flex flex-col gap-4 group transition-all hover:border-primary" style={{ border: "1px solid #c3c6d6" }}>
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "#dae2ff" }}>
                      <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>restaurant</span>
                    </div>
                    <span className="text-xs font-bold uppercase" style={{ color: "#0052cc" }}>Nutrición</span>
                  </div>
                  <p className="text-base font-medium" style={{ color: "#191c1e" }}>
                    Reducir sodio y azúcares procesados para estabilizar presión arterial.
                  </p>
                  <button className="mt-auto flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#003d9b" }}>
                    Ver Plan <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>

                {/* Card 2: Actividad */}
                <div className="bg-white p-6 rounded-xl flex flex-col gap-4 group transition-all" style={{ border: "1px solid #c3c6d6" }}>
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "#82f9be" }}>
                      <span className="material-symbols-outlined" style={{ color: "#006c47" }}>directions_run</span>
                    </div>
                    <span className="text-xs font-bold uppercase" style={{ color: "#00734c" }}>Actividad</span>
                  </div>
                  <p className="text-base font-medium" style={{ color: "#191c1e" }}>
                    Caminata diaria de 30 min para mejorar perfil lipídico.
                  </p>
                  <button className="mt-auto flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#006c47" }}>
                    Rutinas <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>

                {/* Card 3: Seguimiento */}
                <div className="bg-white p-6 rounded-xl flex flex-col gap-4 group transition-all" style={{ border: "1px solid #c3c6d6" }}>
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "#ffddb3" }}>
                      <span className="material-symbols-outlined" style={{ color: "#5e3c00" }}>medical_services</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tight" style={{ color: "#624000" }}>Seguimiento</span>
                  </div>
                  <p className="text-base font-medium" style={{ color: "#191c1e" }}>
                    Agendar panel metabólico completo en los próximos 15 días.
                  </p>
                  <button className="mt-auto flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#5e3c00" }}>
                    Agendar <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-6 mt-auto flex flex-col md:flex-row justify-between items-center gap-4" style={{ backgroundColor: "#e1e2e4", borderTop: "1px solid #c3c6d6" }}>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold" style={{ color: "#191c1e" }}>MetabolicRisk AI</span>
          <span className="text-xs" style={{ color: "#434654" }}>
            © 2024 MetabolicRisk AI. Cuidado preventivo a través de precisión clínica.
          </span>
        </div>
        <nav className="flex gap-6">
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Política de Privacidad</a>
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Términos de Servicio</a>
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Metodología</a>
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Contacto</a>
        </nav>
      </footer>
    </div>
  );
}
