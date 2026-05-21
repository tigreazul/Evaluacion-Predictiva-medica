import { Link, Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f9fb" }}>
      {/* TopAppBar */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e1e2e4",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="flex justify-between items-center w-full px-6 h-16 max-w-[1440px] mx-auto">
          <Link to="/" className="text-2xl font-bold" style={{ color: "#003d9b" }}>
            MetabolicHealth AI
          </Link>

          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined p-2 rounded-full transition-colors cursor-pointer hover:bg-gray-50"
              style={{ color: "#434654" }}
            >
              notifications
            </span>
            <span
              className="material-symbols-outlined p-2 rounded-full transition-colors cursor-pointer hover:bg-gray-50"
              style={{ color: "#434654" }}
            >
              help
            </span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#003d9b", border: "1px solid #c3c6d6" }}
            >
              <span className="font-semibold text-sm" style={{ color: "#ffffff" }}>DS</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
