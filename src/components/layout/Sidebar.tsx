import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { path: "/pacientes", label: "Inicio", icon: "home" },
    { path: "/evaluacion", label: "Evaluación de Riesgo", icon: "clinical_notes" },
    { path: "/resultados/RES-0001", label: "Panel Predictivo", icon: "analytics" },
    { path: "/dashboard/poblacional", label: "Estadísticas Poblacionales", icon: "bar_chart" },
  ];

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-72 p-6 flex flex-col justify-between"
      style={{ backgroundColor: "#edeef0", borderRight: "1px solid #c3c6d6" }}
    >
      <div>
        {/* Profile Section */}
        <div className="flex items-center gap-3 p-4 mb-6 rounded-xl" style={{ backgroundColor: "#ffffff", border: "1px solid #c3c6d6" }}>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#003d9b", border: "2px solid #c3c6d6" }}
          >
            <span className="material-symbols-outlined" style={{ color: "#ffffff" }}>person</span>
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: "#191c1e" }}>{user?.name || "Usuario"}</p>
            <p className="text-xs" style={{ color: "#737685" }}>Especialista Metabólico</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                style={{
                  backgroundColor: isActive ? "#82f9be" : "transparent",
                  color: isActive ? "#005235" : "#434654",
                  fontWeight: isActive ? 700 : 500
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "#f8f9fb";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="space-y-3">
        <button
          onClick={() => navigate("/evaluacion")}
          className="w-full px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          style={{ backgroundColor: "#003d9b", color: "#ffffff" }}
        >
          <span className="material-symbols-outlined">add</span>
          Nueva Evaluación
        </button>

        <button
          onClick={handleLogout}
          className="w-full px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ backgroundColor: "transparent", color: "#ba1a1a", border: "1px solid #ba1a1a" }}
        >
          <span className="material-symbols-outlined">logout</span>
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
