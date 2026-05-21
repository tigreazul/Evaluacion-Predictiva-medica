import { cn } from "@/lib/utils";

export interface XaiFactorBarProps {
  name: string;
  impact: number;
  direction: "positive" | "negative";
}

export function XaiFactorBar({ name, impact, direction }: XaiFactorBarProps) {
  const isNegative = direction === "negative";

  return (
    <div className="flex items-center gap-3">
      <div className="w-40 text-sm font-medium text-on-surface text-right">
        {name}
      </div>
      <div className="flex-1 relative">
        <div className="h-8 bg-surface-container rounded-lg overflow-hidden">
          <div
            className={cn(
              "h-full rounded-lg transition-all duration-300",
              isNegative ? "bg-secondary" : "bg-primary"
            )}
            style={{ width: `${impact * 5}%` }}
          />
        </div>
      </div>
      <div className={cn(
        "w-16 text-sm font-mono font-semibold text-right",
        isNegative ? "text-secondary" : "text-primary"
      )}>
        {isNegative ? "-" : "+"}{impact}%
      </div>
    </div>
  );
}
