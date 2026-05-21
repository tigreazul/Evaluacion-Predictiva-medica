import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f5f7" }}>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(to bottom right, #ffffff, #f8f9fb)" }}>
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: "#dae2ff", color: "#0040a2" }}>
              <span className="material-symbols-outlined text-base">shield</span>
              Salud Preventiva con IA
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#191c1e" }}>
              Predicción temprana de riesgo metabólico mediante inteligencia artificial
            </h1>

            <p className="text-base leading-relaxed" style={{ color: "#434654" }}>
              Sistema web basado en machine learning para estimar el riesgo de obesidad, diabetes tipo 2 e hipertensión utilizando variables no invasivas.
            </p>

            <div className="flex gap-3 pt-2">
              <Link to="/login">
                <button className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-sm transition-all hover:shadow-md" style={{ backgroundColor: "#003d9b", color: "#ffffff" }}>
                  Iniciar Sesión
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </Link>

              <Link to="/resultados/RES-0001">
                <button className="bg-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-50" style={{ border: "1px solid #c3c6d6", color: "#191c1e" }}>
                  Ver funcionamiento
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Tablet Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-4" style={{ border: "1px solid #e1e2e4" }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: "linear-gradient(to bottom right, #1e293b, #0f172a)" }}>
                <img
                  src="https://placehold.co/800x600/1e293b/64748b?text=Dashboard+Analytics"
                  alt="Dashboard Predictivo"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* Floating Precision Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[200px]" style={{ border: "1px solid #e1e2e4" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-xl" style={{ color: "#006c47" }}>verified</span>
                <span className="font-bold text-3xl" style={{ color: "#006c47" }}>98%</span>
              </div>
              <p className="text-xs leading-tight" style={{ color: "#434654" }}>
                Precisión del modelo en validación clínica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#191c1e" }}>
              Desafío de Salud Pública en Perú
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#434654" }}>
              La detección temprana es la clave para reducir la carga de enfermedades crónicas en el sistema de salud nacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Red/Error */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #e1e2e4" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#ffdad6", color: "#ba1a1a" }}>
                <span className="material-symbols-outlined">group</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#191c1e" }}>62.4% de adultos</h3>
              <p className="text-sm mb-6" style={{ color: "#434654" }}>
                Adultos peruanos presentan exceso de peso, un factor crítico para el desarrollo de enfermedades metabólicas.
              </p>
              <div>
                <div className="flex justify-between text-xs mb-2 font-semibold" style={{ color: "#434654" }}>
                  <span>Exceso de Peso</span>
                  <span>62.4%</span>
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#e1e2e4" }}>
                  <div className="h-full rounded-full" style={{ width: "62.4%", backgroundColor: "#ba1a1a" }}></div>
                </div>
              </div>
            </div>

            {/* Card 2 - Blue/Primary */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #e1e2e4" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#dae2ff", color: "#003d9b" }}>
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#191c1e" }}>Solo 11% IA</h3>
              <p className="text-sm mb-6" style={{ color: "#434654" }}>
                De los modelos de IA desarrollados logran desplegarse efectivamente en plataformas reales de atención clínica.
              </p>
              <div>
                <div className="flex justify-between text-xs mb-2 font-semibold" style={{ color: "#434654" }}>
                  <span>Adopción Tecnológica</span>
                  <span>11%</span>
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#e1e2e4" }}>
                  <div className="h-full rounded-full" style={{ width: "11%", backgroundColor: "#003d9b" }}></div>
                </div>
              </div>
            </div>

            {/* Card 3 - Primary Blue Background */}
            <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden" style={{ backgroundColor: "#003d9b", color: "#ffffff" }}>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                  <span className="material-symbols-outlined">emergency</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Necesidad Urgente</h3>
                <p className="text-sm mb-6" style={{ color: "#dae2ff" }}>
                  La detección temprana mediante variables no invasivas reduce drásticamente las complicaciones a largo plazo y costos hospitalarios.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="material-symbols-outlined text-lg" style={{ color: "#82f9be" }}>trending_up</span>
                  <span className="text-xs font-bold uppercase tracking-wide">ALTA PRIORIDAD CLÍNICA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fb)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: "#191c1e" }}>
            Nuestro Proceso de Análisis
          </h2>

          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5" style={{ backgroundColor: "#c3c6d6" }}></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-all shadow-sm relative z-10" style={{ border: "2px solid #e1e2e4" }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#003d9b" }}>grid_view</span>
                </div>
                <span className="text-xs font-bold mb-2 tracking-wider" style={{ color: "#003d9b" }}>PASO 1</span>
                <h4 className="font-semibold mb-2" style={{ color: "#191c1e" }}>Registro de Datos</h4>
                <p className="text-xs" style={{ color: "#434654" }}>
                  Ingreso de edad, peso, IMC y perímetros corporales.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-all shadow-sm relative z-10" style={{ border: "2px solid #e1e2e4" }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#003d9b" }}>psychology</span>
                </div>
                <span className="text-xs font-bold mb-2 tracking-wider" style={{ color: "#003d9b" }}>PASO 2</span>
                <h4 className="font-semibold mb-2" style={{ color: "#191c1e" }}>Procesamiento IA</h4>
                <p className="text-xs" style={{ color: "#434654" }}>
                  Análisis multivariado por algoritmos de clasificación.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-all shadow-sm relative z-10" style={{ border: "2px solid #e1e2e4" }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#003d9b" }}>bar_chart</span>
                </div>
                <span className="text-xs font-bold mb-2 tracking-wider" style={{ color: "#003d9b" }}>PASO 3</span>
                <h4 className="font-semibold mb-2" style={{ color: "#191c1e" }}>Predicción de Riesgo</h4>
                <p className="text-xs" style={{ color: "#434654" }}>
                  Probabilidad de diabetes tipo 2 e hipertensión.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-all shadow-sm relative z-10" style={{ border: "2px solid #e1e2e4" }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#003d9b" }}>visibility</span>
                </div>
                <span className="text-xs font-bold mb-2 tracking-wider" style={{ color: "#003d9b" }}>PASO 4</span>
                <h4 className="font-semibold mb-2" style={{ color: "#191c1e" }}>Explicación XAI</h4>
                <p className="text-xs" style={{ color: "#434654" }}>
                  Transparencia sobre qué factores influyen en el riesgo.
                </p>
              </div>

              {/* Step 5 - Green/Teal Background */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md relative z-10" style={{ backgroundColor: "#82f9be", border: "2px solid #006c47" }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#005235" }}>verified</span>
                </div>
                <span className="text-xs font-bold mb-2 tracking-wider" style={{ color: "#006c47" }}>PASO 5</span>
                <h4 className="font-semibold mb-2" style={{ color: "#191c1e" }}>Recomendaciones</h4>
                <p className="text-xs" style={{ color: "#434654" }}>
                  Guías clínicas inmediatas basadas en el perfil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #003d9b 0%, #0052cc 50%, #006c47 100%)" }}></div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                ¿Listo para transformar la prevención metabólica?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#dae2ff" }}>
                Únase a los profesionales que están utilizando IA para salvar vidas antes de que aparezcan los síntomas clínicos.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/login">
                  <button className="bg-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl" style={{ color: "#003d9b" }}>
                    Iniciar Sesión
                  </button>
                </Link>

                <button className="px-8 py-3.5 rounded-xl font-bold transition-all" style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "2px solid rgba(255,255,255,0.3)", color: "#ffffff" }}>
                  Solicitar Demo Clínica
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6" style={{ borderTop: "1px solid #e1e2e4" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold mb-1" style={{ color: "#003d9b" }}>MetabolicHealth AI</div>
            <p className="text-xs" style={{ color: "#434654" }}>
              © 2024 MetabolicHealth AI. Innovación en Cuidado Preventivo de Precisión.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sm transition-colors" style={{ color: "#434654" }} onMouseEnter={(e) => e.currentTarget.style.color = "#003d9b"} onMouseLeave={(e) => e.currentTarget.style.color = "#434654"}>
              Privacidad
            </a>
            <a href="#" className="text-sm transition-colors" style={{ color: "#434654" }} onMouseEnter={(e) => e.currentTarget.style.color = "#003d9b"} onMouseLeave={(e) => e.currentTarget.style.color = "#434654"}>
              Términos
            </a>
            <a href="#" className="text-sm transition-colors" style={{ color: "#434654" }} onMouseEnter={(e) => e.currentTarget.style.color = "#003d9b"} onMouseLeave={(e) => e.currentTarget.style.color = "#003d9b"}>
              Metodología
            </a>
            <a href="#" className="text-sm transition-colors" style={{ color: "#434654" }} onMouseEnter={(e) => e.currentTarget.style.color = "#003d9b"} onMouseLeave={(e) => e.currentTarget.style.color = "#434654"}>
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
