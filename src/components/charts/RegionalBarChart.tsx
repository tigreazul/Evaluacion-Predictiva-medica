import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface RegionalBarChartProps {
  data: Array<{ region: string; cases: number }>;
}

export function RegionalBarChart({ data }: RegionalBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e1e2e4" />
        <XAxis dataKey="region" stroke="#737685" angle={-45} textAnchor="end" height={100} />
        <YAxis stroke="#737685" />
        <Tooltip />
        <Bar dataKey="cases" fill="#003d9b" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
