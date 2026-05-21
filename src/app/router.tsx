import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { AppLayout } from "@/components/layout/AppLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { LandingPage } from "@/features/landing/LandingPage";
import { LoginPage } from "@/features/auth/LoginPage";
import { PatientsListPage } from "@/features/patients/PatientsListPage";
import { EvaluationPage } from "@/features/evaluation/EvaluationPage";
import { ResultsPage } from "@/features/results/ResultsPage";
import { PopulationDashboardPage } from "@/features/population-dashboard/PopulationDashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "pacientes",
        element: <PatientsListPage />,
      },
      {
        path: "evaluacion",
        element: <EvaluationPage />,
      },
      {
        path: "resultados/:id",
        element: <ResultsPage />,
      },
      {
        path: "dashboard/poblacional",
        element: <PopulationDashboardPage />,
      },
    ],
  },
]);
