import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface RiskLineChartProps {
  data: Array<{ month: string; evaluaciones: number; altoRiesgo: number }>;
}

export function RiskLineChart({ data }: RiskLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e1e2e4" />
        <XAxis dataKey="month" stroke="#737685" />
        <YAxis stroke="#737685" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="evaluaciones"
          stroke="#003d9b"
          strokeWidth={2}
          dot={{ fill: "#003d9b" }}
          name="Evaluaciones"
        />
        <Line
          type="monotone"
          dataKey="altoRiesgo"
          stroke="#ba1a1a"
          strokeWidth={2}
          dot={{ fill: "#ba1a1a" }}
          name="Alto Riesgo"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
