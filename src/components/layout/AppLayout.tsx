import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f9fb" }}>
      <Sidebar />
      <div className="ml-72">
        <Outlet />
      </div>
    </div>
  );
}
