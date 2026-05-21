import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = (location.state as any)?.from?.pathname || "/pacientes";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const success = login(username, password);

      if (success) {
        navigate(from, { replace: true });
      } else {
        setError("Usuario o contraseña incorrectos");
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white p-8 rounded-2xl" style={{ border: "1px solid #c3c6d6", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)" }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#dae2ff" }}>
                <span className="material-symbols-outlined text-4xl" style={{ color: "#003d9b" }}>monitoring</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#003d9b" }}>MetabolicHealth AI</h1>
            <p className="text-sm" style={{ color: "#434654" }}>Sistema de Análisis Predictivo Metabólico</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: "#ffdad6", border: "1px solid #ba1a1a" }}>
                <span className="material-symbols-outlined" style={{ color: "#ba1a1a" }}>error</span>
                <span className="text-sm font-medium" style={{ color: "#93000a" }}>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "#434654" }}>
                Usuario
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#737685" }}>person</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-base focus:ring-2 focus:outline-none"
                  style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6", color: "#191c1e" }}
                  placeholder="Ingrese su usuario"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "#434654" }}>
                Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#737685" }}>lock</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-base focus:ring-2 focus:outline-none"
                  style={{ backgroundColor: "#f8f9fb", border: "1px solid #c3c6d6", color: "#191c1e" }}
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#003d9b", color: "#ffffff" }}
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  Iniciar Sesión
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-8 pt-6" style={{ borderTop: "1px solid #e1e2e4" }}>
            <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "#737685" }}>Credenciales de Prueba:</p>
            <div className="space-y-2 text-xs" style={{ color: "#434654" }}>
              <div className="flex justify-between p-2 rounded" style={{ backgroundColor: "#f8f9fb" }}>
                <span>Usuario:</span>
                <code className="font-mono font-bold">admin</code>
              </div>
              <div className="flex justify-between p-2 rounded" style={{ backgroundColor: "#f8f9fb" }}>
                <span>Contraseña:</span>
                <code className="font-mono font-bold">admin123</code>
              </div>
            </div>
          </div>
        </div>

        {/* Back to landing */}
        <div className="text-center mt-6">
          <a href="/" className="text-sm font-medium transition-colors" style={{ color: "#003d9b" }}>
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
