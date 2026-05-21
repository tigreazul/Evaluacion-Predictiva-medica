import { cn } from "@/lib/utils";

export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  showValue?: boolean;
  label?: string;
  className?: string;
}

export function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = "primary",
  showValue = true,
  label,
  className,
}: CircularProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    primary: "#003d9b",
    secondary: "#b2c5ff",
    success: "#006c47",
    warning: "#7d5200",
    danger: "#ba1a1a",
  };

  return (
    <div className={cn("inline-flex flex-col items-center gap-2", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#edeef0"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={variantColors[variant]}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-on-surface">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
      {label && <span className="text-sm text-on-surface-variant">{label}</span>}
    </div>
  );
}
