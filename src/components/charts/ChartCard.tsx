import { Card } from "@/components/ui/Card";

export interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ChartCard({ title, subtitle, children }: ChartCardProps) {
  return (
    <Card>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-on-surface">{title}</h3>
        {subtitle && (
          <p className="text-sm text-on-surface-variant mt-1">{subtitle}</p>
        )}
      </div>
      <div className="w-full">{children}</div>
    </Card>
  );
}
