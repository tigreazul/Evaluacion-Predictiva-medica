import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, TrendingUp, Info } from "lucide-react";
import type { Recommendation } from "@/data/mockRecommendations";

export interface RecommendationCardProps {
  recommendation: Recommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const priorityConfig = {
    high: { variant: "danger" as const, icon: AlertCircle, label: "Alta" },
    medium: { variant: "warning" as const, icon: TrendingUp, label: "Media" },
    low: { variant: "primary" as const, icon: Info, label: "Hábito Preventivo" },
  };

  const config = priorityConfig[recommendation.priority];
  const Icon = config.icon;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${
          recommendation.priority === "high" ? "bg-error-container" :
          recommendation.priority === "medium" ? "bg-tertiary-fixed" :
          "bg-primary-fixed"
        }`}>
          <Icon className={`w-5 h-5 ${
            recommendation.priority === "high" ? "text-error" :
            recommendation.priority === "medium" ? "text-tertiary" :
            "text-primary"
          }`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-on-surface">{recommendation.title}</h4>
            <Badge variant={config.variant}>{config.label}</Badge>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {recommendation.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
