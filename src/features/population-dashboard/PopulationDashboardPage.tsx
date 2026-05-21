import { PeruHeatMap } from "@/components/maps/PeruHeatMap";

export function PopulationDashboardPage() {
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
            Análisis de Salud Poblacional
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 rounded-full px-4 py-1.5" style={{ backgroundColor: "#edeef0", border: "1px solid #c3c6d6" }}>
            <span className="material-symbols-outlined text-base" style={{ color: "#737685" }}>search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none"
              placeholder="Buscar datos poblacionales..."
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

      <div className="p-6 space-y-6 max-w-[1440px] mx-auto w-full">
        {/* Filters & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ backgroundColor: "#f3f4f6", border: "1px solid #c3c6d6" }}>
              <span className="material-symbols-outlined text-base" style={{ color: "#737685" }}>calendar_month</span>
              <select className="bg-transparent border-none text-xs focus:ring-0">
                <option>Últimos 30 días</option>
                <option>Q3 2023</option>
                <option>Año a la fecha</option>
              </select>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ backgroundColor: "#f3f4f6", border: "1px solid #c3c6d6" }}>
              <span className="material-symbols-outlined text-base" style={{ color: "#737685" }}>location_on</span>
              <select className="bg-transparent border-none text-xs focus:ring-0">
                <option>Costa Peruana (Todas)</option>
                <option>Lima Metropolitana</option>
                <option>Piura</option>
                <option>La Libertad</option>
              </select>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ backgroundColor: "#f3f4f6", border: "1px solid #c3c6d6" }}>
              <span className="material-symbols-outlined text-base" style={{ color: "#737685" }}>groups</span>
              <select className="bg-transparent border-none text-xs focus:ring-0">
                <option>Todas las etnias</option>
                <option>Mestizo</option>
                <option>Quechua</option>
                <option>Afroperuano</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-4 py-2 rounded-lg transition-colors active:scale-95" style={{ color: "#003d9b", border: "1px solid #003d9b" }}>
              <span className="material-symbols-outlined">download</span>
              <span className="text-sm">Exportar CSV</span>
            </button>
            <button className="flex items-center gap-1 px-4 py-2 rounded-lg transition-opacity active:scale-95" style={{ backgroundColor: "#003d9b", color: "#ffffff" }}>
              <span className="material-symbols-outlined">picture_as_pdf</span>
              <span className="text-sm">Resumen PDF</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Evaluations */}
          <div className="bg-white p-6 rounded-xl transition-shadow hover:shadow-md" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#dae2ff" }}>
                <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>analytics</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ color: "#006c47", backgroundColor: "#82f9be" }}>+12.4%</span>
            </div>
            <p className="text-sm" style={{ color: "#434654" }}>Evaluaciones Totales</p>
            <h3 className="text-3xl font-semibold mt-1">14.282</h3>
            <div className="mt-4 w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#edeef0" }}>
              <div className="h-full" style={{ width: "75%", backgroundColor: "#003d9b" }}></div>
            </div>
          </div>

          {/* High Risk Count */}
          <div className="bg-white p-6 rounded-xl transition-shadow hover:shadow-md" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#ffdad6" }}>
                <span className="material-symbols-outlined" style={{ color: "#ba1a1a" }}>warning</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ color: "#ba1a1a", backgroundColor: "#ffdad6" }}>+2.1%</span>
            </div>
            <p className="text-sm" style={{ color: "#434654" }}>Casos de Alto Riesgo</p>
            <h3 className="text-3xl font-semibold mt-1">2.856</h3>
            <div className="mt-4 w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#edeef0" }}>
              <div className="h-full" style={{ width: "20%", backgroundColor: "#ba1a1a" }}></div>
            </div>
          </div>

          {/* Risk Distribution Summary */}
          <div className="bg-white p-6 rounded-xl col-span-1 md:col-span-2" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm" style={{ color: "#434654" }}>Distribución de Riesgo (B / M / A)</p>
              <span className="material-symbols-outlined cursor-help" style={{ color: "#737685" }} title="Bajo / Medio / Alto">info</span>
            </div>
            <div className="flex h-12 w-full rounded-lg overflow-hidden" style={{ border: "1px solid #c3c6d6" }}>
              <div className="flex items-center justify-center text-xs font-bold" style={{ width: "45%", backgroundColor: "#006c47", color: "#ffffff" }}>45% Bajo</div>
              <div className="flex items-center justify-center text-xs font-bold" style={{ width: "35%", backgroundColor: "#ffb950", color: "#191c1e" }}>35% Med</div>
              <div className="flex items-center justify-center text-xs font-bold" style={{ width: "20%", backgroundColor: "#ba1a1a", color: "#ffffff" }}>20% Alto</div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider" style={{ color: "#737685" }}>Tendencia</span>
                <span className="text-2xl font-semibold" style={{ color: "#006c47" }}>Estabilizándose</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs uppercase tracking-wider" style={{ color: "#737685" }}>Meta Trimestral</span>
                <span className="text-2xl font-semibold" style={{ color: "#003d9b" }}>85% Eval.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Regional Map Heatmap */}
          <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden flex flex-col" style={{ border: "1px solid #c3c6d6" }}>
            <div className="p-6 flex justify-between items-center" style={{ borderBottom: "1px solid #c3c6d6" }}>
              <div>
                <h4 className="text-2xl font-semibold">Distribución Epidemiológica</h4>
                <p className="text-sm" style={{ color: "#737685" }}>Densidad de riesgo metabólico en regiones costeras del Perú</p>
              </div>
              <button className="text-sm font-bold hover:underline" style={{ color: "#003d9b" }}>Ver Detalles Regionales</button>
            </div>
            <div className="flex-1 relative min-h-[450px] overflow-hidden" style={{ backgroundColor: "#f3f4f6" }}>
              <PeruHeatMap />
              {/* Legend Overlay */}
              <div className="absolute bottom-4 left-4 p-4 rounded-lg max-w-[200px] z-[1000]" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)", border: "1px solid #c3c6d6", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}>
                <span className="text-xs font-bold mb-2 block">Concentración de Riesgo</span>
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ba1a1a" }}></div>
                  <span className="text-xs">Crítico (&gt;15%)</span>
                </div>
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffb950" }}></div>
                  <span className="text-xs">Alto (10-15%)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#006c47" }}></div>
                  <span className="text-xs">Base (&lt;10%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Demographics */}
          <div className="flex flex-col gap-6">
            {/* Primary Risk Factor */}
            <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-4" style={{ color: "#434654" }}>Principal Factor de Riesgo</p>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#dae2ff", color: "#0052cc" }}>
                  <span className="material-symbols-outlined">monitor_weight</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold leading-none">IMC &gt; 30</h3>
                  <span className="text-xs" style={{ color: "#737685" }}>62% de casos de Alto Riesgo</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img alt="Paciente A" className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#f8f9fb" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1VRTHDUQC4O1bXqU0FvBam2zdrCMDmwws6xp04cRx0JtIMY17FUs2yx3K0l2GWVccPHfRVrIdYnR3U9DN9hgYR1ZHpi_GCWY0xKPZ2avlQHtOPfAhzLeUr18ORM-DHCKL3R6f9pFtuLEQZkcy5phdlmy1kVhJ_9Efi4OzEQsQMm3A4CRcBmrT6HyUI1ePoqbt8NjeVbsZbF9XcoS3MyM5PzULaXnzLzbg3D2BwkXAeZQ7kXJNThb9qsz49WVDf8EFttZdh3FWzTM" />
                  <img alt="Paciente B" className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#f8f9fb" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ONtmryNCZR5u4VEGgqSOHrCPaAEQzVxgSdhuheT7tAl8YbOpY-SvjNQt2LLASKDmYbELO_tvzDRvD-yh8-Da9R_azwfzKcPqFNU7HWs2Wa7NYfk7hlGiE_qWTbTG4gJDa6UPPpa3k3z4LDvjXb6_8eACwffVdXEDWHrkh2fnZnb7WUVRZhM-3UZ05ktA7W--KUXzlWHh0kEsa78bkfoPBrMOQeHwE2Fsp0t6fSE2-M_i774zpWNYVsNUxj32BVonm0oGsnCvZE8" />
                  <img alt="Paciente C" className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#f8f9fb" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUiIDwRUH0wVHu_3NM0Qdw5fbBeBpA-cNCZ5RAwFD-taUHBOIld4hr66f8_-NL3lcWELEdqR9Zcdd_7Zgzj1wYDV-CGPqd1XAES4nlTmoN-h9pzixtHSkxq73X3Sjwzw18ZlTBXffi86UFBMXQf3o_wiWN7XRkYQjNLz4AG_rjl6EEY0gmkHhMG2ZdEhNUfhg5ESR7ZBb_pvkHTadQcrzRv2_3lRdPfHmJZLI1m92eD4EtBF9uo-r9qT4WePBPfW-voT8yF_b2V2c" />
                </div>
                <span className="text-xs" style={{ color: "#737685" }}>+8.4k pacientes impactados</span>
              </div>
            </div>

            {/* Risk by Age Group */}
            <div className="bg-white p-6 rounded-xl flex-1" style={{ border: "1px solid #c3c6d6" }}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-6" style={{ color: "#191c1e" }}>Riesgo por Grupo Etario</h4>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>18 - 35</span>
                    <span className="font-bold">12% Alto Riesgo</span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#edeef0" }}>
                    <div className="h-full" style={{ width: "12%", backgroundColor: "#006c47" }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>36 - 55</span>
                    <span className="font-bold">28% Alto Riesgo</span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#edeef0" }}>
                    <div className="h-full" style={{ width: "28%", backgroundColor: "#ffb950" }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>55+</span>
                    <span className="font-bold">42% Alto Riesgo</span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#edeef0" }}>
                    <div className="h-full" style={{ width: "42%", backgroundColor: "#ba1a1a" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="bg-white p-6 rounded-xl flex-1" style={{ border: "1px solid #c3c6d6" }}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-6" style={{ color: "#191c1e" }}>Distribución por Género</h4>
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="48" cy="48" r="40" fill="transparent" stroke="#e7e8ea" strokeWidth="8"></circle>
                      <circle cx="48" cy="48" r="40" fill="transparent" stroke="#003d9b" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="115"></circle>
                    </svg>
                    <span className="absolute text-sm font-bold">54%</span>
                  </div>
                  <span className="text-xs font-medium">Femenino</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="48" cy="48" r="40" fill="transparent" stroke="#e7e8ea" strokeWidth="8"></circle>
                      <circle cx="48" cy="48" r="40" fill="transparent" stroke="#65dca4" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="135"></circle>
                    </svg>
                    <span className="absolute text-sm font-bold">46%</span>
                  </div>
                  <span className="text-xs font-medium">Masculino</span>
                </div>
              </div>
              <div className="mt-6 pt-4 flex justify-center" style={{ borderTop: "1px solid #c3c6d6" }}>
                <span className="text-xs italic" style={{ color: "#737685" }}>Tamaño de muestra: n=14.282</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Prediction Insight */}
        <div className="p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-lg" style={{ backgroundColor: "#0052cc", color: "#c4d2ff", border: "1px solid rgba(0, 61, 155, 0.2)" }}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2" style={{ color: "#dae2ff" }}>
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="text-xs font-bold uppercase tracking-widest">Información Predictiva de IA</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Oportunidad de Intervención Preventiva</h3>
            <p className="text-base mb-6" style={{ color: "rgba(196, 210, 255, 0.9)" }}>
              Nuestros modelos sugieren que una educación metabólica dirigida en la <b>región de Piura</b> para personas de 35 a 45 años podría reducir los resultados regionales de alto riesgo en un <b>12% durante los próximos 18 meses</b>.
            </p>
            <button className="px-6 py-3 rounded-xl font-bold flex items-center gap-4 transition-colors active:scale-95" style={{ backgroundColor: "#c4d2ff", color: "#0052cc" }}>
              <span>Generar Plan de Intervención</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="hidden md:block w-72 h-52 rounded-xl overflow-hidden relative" style={{ backgroundColor: "rgba(0, 61, 155, 0.2)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <img
              className="w-full h-full object-cover mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDLqSVNQ0HkfI6RFakO88ALrnCKgEoGmgAUeRmvNXfIginlEfBQwpjBanmZRuM5MoRAUTdxolKSmptigsJK5c9gPpznOGdb2q3hVti1pLWAIA4xDCG20V4K82SPfd28B8ON7H5cUM0_9rYH_865aUs15kPin1cuEJYSWBLZd_bUSMyHsH0_w2MNqYNXaBkGZIh80QKygFvN-6rzyVp8x7C45WIxcUlNBkVKafi-ApbX_flLCBkjChtEOQaDmHDmvaJHylCtgXx-uI"
              alt="Gráfico predictivo"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0, 82, 204, 0.8), transparent)" }}></div>
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
        <nav className="flex flex-wrap gap-6">
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Política de Privacidad</a>
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Términos de Servicio</a>
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Metodología</a>
          <a className="text-xs transition-colors hover:text-primary" style={{ color: "#434654" }} href="#">Contacto</a>
        </nav>
      </footer>
    </div>
  );
}
