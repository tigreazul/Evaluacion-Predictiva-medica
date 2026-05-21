import { CircularProgress } from "@/components/ui/CircularProgress";
import { getRiskLevel, getRiskLabel } from "@/lib/risk";
import { Card } from "@/components/ui/Card";
import { RiskBadge } from "./RiskBadge";

export interface CircularRiskScoreProps {
  score: number;
  title: string;
  description?: string;
}

export function CircularRiskScore({ score, title, description }: CircularRiskScoreProps) {
  const level = getRiskLevel(score);
  const label = getRiskLabel(level);

  const variantMap = {
    low: "success" as const,
    medium: "warning" as const,
    high: "danger" as const,
  };

  return (
    <Card className="text-center">
      <h3 className="text-lg font-semibold text-on-surface mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-on-surface-variant mb-6">{description}</p>
      )}
      <div className="flex justify-center mb-4">
        <CircularProgress
          value={score}
          size={140}
          strokeWidth={10}
          variant={variantMap[level]}
        />
      </div>
      <RiskBadge level={level} label={label} />
    </Card>
  );
}
