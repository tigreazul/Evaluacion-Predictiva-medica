import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  showLabel?: boolean;
  label?: string;
  height?: "sm" | "md" | "lg";
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  variant = "primary",
  showLabel = false,
  label,
  height = "md",
  className,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const variantStyles = {
    primary: "bg-primary",
    secondary: "bg-primary-fixed-dim",
    success: "bg-secondary",
    warning: "bg-tertiary",
    danger: "bg-error",
  };

  const heightStyles = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm text-on-surface-variant">
          <span>{label}</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-surface-container rounded-full overflow-hidden", heightStyles[height])}>
        <div
          className={cn("h-full rounded-full transition-all duration-300", variantStyles[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
