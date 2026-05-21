import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export interface RiskDonutChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#006c47", "#7d5200", "#ba1a1a"];

export function RiskDonutChart({ data }: RiskDonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
