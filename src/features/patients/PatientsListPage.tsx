import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Patient {
  id: string;
  code: string;
  name: string;
  age: number;
  sex: string;
  bmi: number;
  lastEvaluation: string;
  riskLevel: "Bajo" | "Medio" | "Alto";
  region: string;
}

const mockPatients: Patient[] = [
  { id: "1", code: "PAC-0001", name: "María González", age: 45, sex: "F", bmi: 28.5, lastEvaluation: "2024-05-15", riskLevel: "Medio", region: "Lima" },
  { id: "2", code: "PAC-0002", name: "Juan Pérez", age: 52, sex: "M", bmi: 32.1, lastEvaluation: "2024-05-14", riskLevel: "Alto", region: "Piura" },
  { id: "3", code: "PAC-0003", name: "Ana Torres", age: 38, sex: "F", bmi: 24.2, lastEvaluation: "2024-05-13", riskLevel: "Bajo", region: "Arequipa" },
  { id: "4", code: "PAC-0004", name: "Carlos Ramírez", age: 61, sex: "M", bmi: 29.8, lastEvaluation: "2024-05-12", riskLevel: "Alto", region: "Trujillo" },
  { id: "5", code: "PAC-0005", name: "Rosa Medina", age: 42, sex: "F", bmi: 26.4, lastEvaluation: "2024-05-11", riskLevel: "Medio", region: "Cusco" },
  { id: "6", code: "PAC-0006", name: "Pedro Sánchez", age: 55, sex: "M", bmi: 31.5, lastEvaluation: "2024-05-10", riskLevel: "Alto", region: "Chiclayo" },
  { id: "7", code: "PAC-0007", name: "Lucía Vargas", age: 34, sex: "F", bmi: 23.8, lastEvaluation: "2024-05-09", riskLevel: "Bajo", region: "Iquitos" },
  { id: "8", code: "PAC-0008", name: "Miguel Ángel Castro", age: 48, sex: "M", bmi: 30.2, lastEvaluation: "2024-05-08", riskLevel: "Alto", region: "Tacna" },
];

export function PatientsListPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRisk, setFilterRisk] = useState<string>("all");

  const filteredPatients = mockPatients.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          patient.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = filterRisk === "all" || patient.riskLevel === filterRisk;
    return matchesSearch && matchesRisk;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Alto": return { bg: "#ffdad6", text: "#93000a" };
      case "Medio": return { bg: "#ffddb3", text: "#624000" };
      case "Bajo": return { bg: "#82f9be", text: "#005235" };
      default: return { bg: "#e1e2e4", text: "#191c1e" };
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top App Bar */}
      <header
        className="sticky top-0 z-50 px-6 h-16 flex justify-between items-center w-full"
        style={{ backgroundColor: "#f8f9fb", borderBottom: "1px solid #c3c6d6" }}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold" style={{ color: "#003d9b" }}>
            Lista de Pacientes
          </h2>
        </div>
        <div className="flex items-center gap-4" style={{ color: "#003d9b" }}>
          <button className="p-2 rounded-full transition-colors hover:bg-gray-50">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 rounded-full transition-colors hover:bg-gray-50">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      <div className="p-6 space-y-6 max-w-[1440px] mx-auto w-full">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#dae2ff" }}>
                <span className="material-symbols-outlined" style={{ color: "#003d9b" }}>group</span>
              </div>
              <span className="text-3xl font-bold">{mockPatients.length}</span>
            </div>
            <p className="text-sm" style={{ color: "#434654" }}>Total Pacientes</p>
          </div>

          <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#ffdad6" }}>
                <span className="material-symbols-outlined" style={{ color: "#ba1a1a" }}>warning</span>
              </div>
              <span className="text-3xl font-bold">{mockPatients.filter(p => p.riskLevel === "Alto").length}</span>
            </div>
            <p className="text-sm" style={{ color: "#434654" }}>Riesgo Alto</p>
          </div>

          <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#ffddb3" }}>
                <span className="material-symbols-outlined" style={{ color: "#5e3c00" }}>info</span>
              </div>
              <span className="text-3xl font-bold">{mockPatients.filter(p => p.riskLevel === "Medio").length}</span>
            </div>
            <p className="text-sm" style={{ color: "#434654" }}>Riesgo Medio</p>
          </div>

          <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#82f9be" }}>
                <span className="material-symbols-outlined" style={{ color: "#006c47" }}>check_circle</span>
              </div>
              <span className="text-3xl font-bold">{mockPatients.filter(p => p.riskLevel === "Bajo").length}</span>
            </div>
            <p className="text-sm" style={{ color: "#434654" }}>Riesgo Bajo</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-xl" style={{ border: "1px solid #c3c6d6" }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-base" style={{ color: "#737685" }}>search</span>
                <input
                  type="text"
                  placeholder="Buscar por nombre o código..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:outline-none"
                  style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6", minWidth: "280px" }}
                />
              </div>

              <select
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm focus:ring-2 focus:outline-none"
                style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6" }}
              >
                <option value="all">Todos los riesgos</option>
                <option value="Alto">Alto</option>
                <option value="Medio">Medio</option>
                <option value="Bajo">Bajo</option>
              </select>
            </div>

            <button
              onClick={() => navigate("/evaluacion")}
              className="px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all active:scale-95"
              style={{ backgroundColor: "#003d9b", color: "#ffffff" }}
            >
              <span className="material-symbols-outlined">add</span>
              Nueva Evaluación
            </button>
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-xl overflow-hidden" style={{ border: "1px solid #c3c6d6" }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6", borderBottom: "1px solid #c3c6d6" }}>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Código</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Nombre</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Edad</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Sexo</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>IMC</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Región</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Última Eval.</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Riesgo</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#434654" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr
                    key={patient.id}
                    className="transition-colors hover:bg-gray-50"
                    style={{ borderBottom: index < filteredPatients.length - 1 ? "1px solid #e1e2e4" : "none" }}
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm font-bold" style={{ color: "#003d9b" }}>{patient.code}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium" style={{ color: "#191c1e" }}>{patient.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm" style={{ color: "#434654" }}>{patient.age}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm" style={{ color: "#434654" }}>{patient.sex}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm" style={{ color: "#191c1e" }}>{patient.bmi.toFixed(1)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm" style={{ color: "#434654" }}>{patient.region}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm" style={{ color: "#434654" }}>{patient.lastEvaluation}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: getRiskColor(patient.riskLevel).bg,
                          color: getRiskColor(patient.riskLevel).text
                        }}
                      >
                        {patient.riskLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/resultados/${patient.code}`)}
                          className="p-2 rounded-lg transition-colors"
                          style={{ color: "#003d9b" }}
                          title="Ver detalles"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                        <button
                          onClick={() => navigate("/evaluacion")}
                          className="p-2 rounded-lg transition-colors"
                          style={{ color: "#006c47" }}
                          title="Nueva evaluación"
                        >
                          <span className="material-symbols-outlined text-lg">add_circle</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredPatients.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl mb-4" style={{ color: "#c3c6d6" }}>search_off</span>
            <p className="text-lg font-medium" style={{ color: "#434654" }}>No se encontraron pacientes</p>
          </div>
        )}
      </div>
    </div>
  );
}
