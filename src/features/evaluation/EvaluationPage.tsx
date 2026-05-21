import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function EvaluationPage() {
  const [currentStep] = useState(0);
  const [sex, setSex] = useState("masculino");
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(175);
  const [waist, setWaist] = useState(92);
  const [activity, setActivity] = useState("3-4");
  const [sleepQuality, setSleepQuality] = useState(3);
  const [stress, setStress] = useState(4);
  const [emotionalEating, setEmotionalEating] = useState("A veces");
  const [medicalHistory, setMedicalHistory] = useState(["Hipertensión"]);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  const steps = ["Demografía", "Antropometría", "Estilo de Vida", "Salud Mental", "Clínica"];

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/resultados/RES-0001");
  };

  const toggleMedicalHistory = (condition: string) => {
    setMedicalHistory(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  return (
    <div>
      <main className="p-6" style={{ backgroundColor: "#f8f9fb" }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <section className="mb-8">
            <h1 className="text-3xl font-semibold mb-2" style={{ color: "#191c1e" }}>
              Evaluación Clínica del Paciente
            </h1>
            <p style={{ color: "#434654" }}>
              Complete la evaluación no invasiva para generar perfiles de riesgo metabólico. Utilice datos precisos para mejorar el modelado predictivo.
            </p>
          </section>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Stepper */}
            <div className="flex items-center justify-between px-4 py-3 bg-white rounded-xl overflow-x-auto" style={{ border: "1px solid #e1e2e4" }}>
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: idx === currentStep ? "#003d9b" : "#e1e2e4",
                        color: idx === currentStep ? "#ffffff" : "#737685"
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: idx === currentStep ? "#003d9b" : "#737685",
                        fontWeight: idx === currentStep ? 700 : 400
                      }}
                    >
                      {step}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-12 h-px mx-4" style={{ backgroundColor: "#c3c6d6" }}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-6">
                {/* Demographics */}
                <div className="bg-white p-8 rounded-xl shadow-sm" style={{ border: "1px solid #e1e2e4" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>person</span>
                    <h2 className="text-2xl font-semibold">Datos Demográficos</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Edad (años)</label>
                      <input
                        type="number"
                        placeholder="Ej. 45"
                        className="w-full rounded-lg p-4 focus:ring-2 focus:outline-none"
                        style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}
                        {...register("age")}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Sexo Biológico</label>
                      <div className="flex p-1 rounded-xl" style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}>
                        <button
                          type="button"
                          onClick={() => setSex("masculino")}
                          className="flex-1 py-2 text-sm rounded-lg font-bold transition-all"
                          style={{
                            backgroundColor: sex === "masculino" ? "#ffffff" : "transparent",
                            color: sex === "masculino" ? "#003d9b" : "#434654",
                            boxShadow: sex === "masculino" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                          }}
                        >
                          Masculino
                        </button>
                        <button
                          type="button"
                          onClick={() => setSex("femenino")}
                          className="flex-1 py-2 text-sm rounded-lg transition-all"
                          style={{
                            backgroundColor: sex === "femenino" ? "#ffffff" : "transparent",
                            color: sex === "femenino" ? "#003d9b" : "#434654",
                            boxShadow: sex === "femenino" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                          }}
                        >
                          Femenino
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Nivel Educativo</label>
                      <select
                        className="w-full rounded-lg p-4 focus:ring-2 focus:outline-none"
                        style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6", color: "#191c1e" }}
                        {...register("education")}
                      >
                        <option>Educación Superior</option>
                        <option>Secundaria</option>
                        <option>Primaria</option>
                        <option>Sin estudios</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Etnia</label>
                      <input
                        type="text"
                        placeholder="Especificar..."
                        className="w-full rounded-lg p-4 focus:ring-2 focus:outline-none"
                        style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}
                        {...register("ethnicity")}
                      />
                    </div>
                  </div>
                </div>

                {/* Anthropometry */}
                <div className="bg-white p-8 rounded-xl shadow-sm" style={{ border: "1px solid #e1e2e4" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>straighten</span>
                    <h2 className="text-2xl font-semibold">Antropometría</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex gap-6">
                        <div className="flex-1 space-y-2">
                          <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Peso (kg)</label>
                          <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full text-2xl font-bold bg-transparent outline-none py-2"
                            style={{ borderBottom: "2px solid #c3c6d6", color: "#003d9b" }}
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Talla (cm)</label>
                          <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full text-2xl font-bold bg-transparent outline-none py-2"
                            style={{ borderBottom: "2px solid #c3c6d6", color: "#003d9b" }}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Perímetro Abdominal (cm)</label>
                        <div className="p-6 rounded-xl" style={{ backgroundColor: "#f8f9fb", border: "1px solid #e1e2e4" }}>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold" style={{ color: "#003d9b" }}>
                              {waist} <span className="text-sm font-normal" style={{ color: "#434654" }}>cm</span>
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#ffdad6", color: "#ba1a1a" }}>
                              Riesgo Elevado
                            </span>
                          </div>
                          <input
                            type="range"
                            min="60"
                            max="150"
                            value={waist}
                            onChange={(e) => setWaist(Number(e.target.value))}
                            className="w-full h-2 rounded-full appearance-none cursor-pointer"
                            style={{ backgroundColor: "#e1e2e4", accentColor: "#003d9b" }}
                          />
                          <div className="flex justify-between text-xs mt-2" style={{ color: "#737685" }}>
                            <span>60cm</span>
                            <span>105cm (Umbral)</span>
                            <span>150cm</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center p-8 rounded-2xl text-center space-y-4" style={{ backgroundColor: "#dae2ff" }}>
                      <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-lg" style={{ border: "4px solid #003d9b" }}>
                        <p className="text-3xl font-bold" style={{ color: "#003d9b" }}>{bmi}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#0040a2" }}>IMC Calculado</p>
                        <p className="text-sm" style={{ color: "#0040a2" }}>Rango: Sobrepeso Leve</p>
                      </div>
                      <div className="w-full h-2 rounded-full overflow-hidden flex" style={{ backgroundColor: "#e1e2e4" }}>
                        <div className="h-full" style={{ width: "18.5%", backgroundColor: "#006c47" }}></div>
                        <div className="h-full" style={{ width: "25%", backgroundColor: "#003d9b" }}></div>
                        <div className="h-full" style={{ width: "56.5%", backgroundColor: "#ba1a1a" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lifestyle */}
                <div className="bg-white p-8 rounded-xl shadow-sm" style={{ border: "1px solid #e1e2e4" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>fitness_center</span>
                    <h2 className="text-2xl font-semibold">Estilo de Vida</h2>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Actividad Física (días/semana)</label>
                      <div className="flex justify-between gap-2">
                        {["0", "1-2", "3-4", "5+"].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setActivity(option)}
                            className="flex-1 h-12 rounded-xl flex items-center justify-center transition-all font-bold"
                            style={{
                              border: activity === option ? "1px solid #003d9b" : "1px solid #c3c6d6",
                              backgroundColor: activity === option ? "#003d9b" : "transparent",
                              color: activity === option ? "#ffffff" : "#191c1e"
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Consumo de Tabaco y Alcohol</label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all" style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}>
                            <input type="checkbox" className="w-5 h-5 rounded" style={{ accentColor: "#003d9b" }} />
                            <span className="text-sm font-medium">Fumador Activo</span>
                          </label>
                          <label className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all" style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}>
                            <input type="checkbox" className="w-5 h-5 rounded" style={{ accentColor: "#003d9b" }} />
                            <span className="text-sm font-medium">Consumo frecuente de alcohol</span>
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Ingesta de Frutas y Verduras</label>
                        <div className="p-8 rounded-xl h-full flex flex-col justify-center" style={{ backgroundColor: "#f8f9fb", border: "1px solid #e1e2e4" }}>
                          <div className="flex items-center justify-between mb-4">
                            <span className="material-symbols-outlined" style={{ color: "#006c47" }}>nutrition</span>
                            <span className="text-sm font-bold uppercase" style={{ color: "#006c47" }}>Alta</span>
                          </div>
                          <input
                            type="range"
                            className="w-full h-2 rounded-full appearance-none cursor-pointer"
                            style={{ backgroundColor: "#e1e2e4", accentColor: "#006c47" }}
                            defaultValue="80"
                          />
                          <div className="flex justify-between text-xs mt-2" style={{ color: "#737685" }}>
                            <span>Nula</span>
                            <span>Óptima</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 space-y-6">
                {/* Mental Health */}
                <div className="bg-white p-8 rounded-xl shadow-sm" style={{ border: "1px solid #e1e2e4" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>psychology</span>
                    <h2 className="text-2xl font-semibold">Salud Mental</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: "#f8f9fb", border: "1px solid #e1e2e4" }}>
                      <p className="text-xs font-bold uppercase mb-4" style={{ color: "#737685" }}>Calidad del Sueño</p>
                      <div className="flex justify-between">
                        {[1, 2, 3, 4].map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setSleepQuality(level)}
                            className="material-symbols-outlined transition-all text-3xl"
                            style={{
                              color: sleepQuality === level ? "#003d9b" : "#c3c6d6",
                              fontVariationSettings: sleepQuality === level ? "'FILL' 1" : "'FILL' 0"
                            }}
                          >
                            {level === 1 ? "sentiment_very_dissatisfied" : level === 2 ? "sentiment_neutral" : level === 3 ? "sentiment_satisfied" : "sentiment_very_satisfied"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Escala de Estrés (1-10)</label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={stress}
                        onChange={(e) => setStress(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{ backgroundColor: "#e1e2e4", accentColor: "#003d9b" }}
                      />
                      <div className="flex justify-between text-xs" style={{ color: "#737685" }}>
                        <span>Bajo</span>
                        <span>Crítico</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Comedor Emocional</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Nunca", "A veces"].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setEmotionalEating(option)}
                            className="py-2 rounded-lg text-sm transition-all"
                            style={{
                              border: emotionalEating === option ? "1px solid #003d9b" : "1px solid #c3c6d6",
                              backgroundColor: emotionalEating === option ? "#dae2ff" : "transparent",
                              color: emotionalEating === option ? "#003d9b" : "#191c1e",
                              fontWeight: emotionalEating === option ? 700 : 400
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Indicators */}
                <div className="bg-white p-8 rounded-xl shadow-sm" style={{ border: "1px solid #e1e2e4" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>clinical_notes</span>
                    <h2 className="text-2xl font-semibold">Indicadores Clínicos</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Presión Arterial (S/D)</label>
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          placeholder="120"
                          className="w-full rounded-lg p-4 text-center font-bold text-2xl focus:ring-2 focus:outline-none"
                          style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}
                        />
                        <span className="text-2xl" style={{ color: "#c3c6d6" }}>/</span>
                        <input
                          type="text"
                          placeholder="80"
                          className="w-full rounded-lg p-4 text-center font-bold text-2xl focus:ring-2 focus:outline-none"
                          style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}
                        />
                        <span className="text-xs font-bold" style={{ color: "#737685" }}>mmHg</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Antecedentes Médicos</label>
                      <div className="flex flex-wrap gap-2">
                        {["Diabetes", "Hipertensión", "ECV"].map((condition) => (
                          <button
                            key={condition}
                            type="button"
                            onClick={() => toggleMedicalHistory(condition)}
                            className="px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all"
                            style={{
                              backgroundColor: medicalHistory.includes(condition) ? "#003d9b" : "#edeef0",
                              color: medicalHistory.includes(condition) ? "#ffffff" : "#191c1e",
                              border: `1px solid ${medicalHistory.includes(condition) ? "#003d9b" : "#c3c6d6"}`,
                              fontWeight: medicalHistory.includes(condition) ? 500 : 400
                            }}
                          >
                            {condition}
                            {medicalHistory.includes(condition) && (
                              <span className="material-symbols-outlined text-base">close</span>
                            )}
                          </button>
                        ))}
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg text-sm transition-all"
                          style={{ border: "1px dashed #c3c6d6", color: "#003d9b" }}
                        >
                          + Agregar
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase" style={{ color: "#737685" }}>Historia Familiar (1er Grado)</label>
                      <textarea
                        className="w-full rounded-lg p-4 focus:ring-2 focus:outline-none resize-none"
                        style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}
                        placeholder="Nota sobre condiciones metabólicas hereditarias..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row justify-end gap-4 pt-6" style={{ borderTop: "1px solid #c3c6d6" }}>
              <button
                type="button"
                className="px-8 py-3 font-bold rounded-xl transition-all active:scale-95"
                style={{ border: "1px solid #c3c6d6", color: "#434654" }}
              >
                Guardar Borrador
              </button>
              <button
                type="submit"
                className="px-8 py-3 font-bold rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                style={{ backgroundColor: "#003d9b", color: "#ffffff" }}
              >
                <span className="material-symbols-outlined">analytics</span>
                Generar Análisis Predictivo
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
