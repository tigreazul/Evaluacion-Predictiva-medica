import { Badge } from "@/components/ui/Badge";
import type { RiskLevel } from "@/lib/risk";

export interface RiskBadgeProps {
  level: RiskLevel;
  label: string;
}

export function RiskBadge({ level, label }: RiskBadgeProps) {
  const variantMap: Record<RiskLevel, "success" | "warning" | "danger"> = {
    low: "success",
    medium: "warning",
    high: "danger",
  };

  return <Badge variant={variantMap[level]}>{label}</Badge>;
}
