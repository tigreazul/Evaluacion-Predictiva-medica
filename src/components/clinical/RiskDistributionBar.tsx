import { ProgressBar } from "@/components/ui/ProgressBar";
import { getRiskLevel } from "@/lib/risk";
import { RiskBadge } from "./RiskBadge";

export interface RiskItem {
  name: string;
  score: number;
  label: string;
}

export interface RiskDistributionBarProps {
  risks: RiskItem[];
}

export function RiskDistributionBar({ risks }: RiskDistributionBarProps) {
  return (
    <div className="space-y-4">
      {risks.map((risk) => {
        const level = getRiskLevel(risk.score);
        const variantMap = {
          low: "success" as const,
          medium: "warning" as const,
          high: "danger" as const,
        };

        return (
          <div key={risk.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-on-surface">{risk.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-on-surface-variant">
                  {risk.score}%
                </span>
                <RiskBadge level={level} label={risk.label} />
              </div>
            </div>
            <ProgressBar value={risk.score} variant={variantMap[level]} height="md" />
          </div>
        );
      })}
    </div>
  );
}
