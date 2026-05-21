import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  children: React.ReactNode;
}

export function Badge({ variant = "neutral", className, children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-fixed text-primary border-primary/20",
    secondary: "bg-secondary-fixed text-secondary border-secondary/20",
    success: "bg-secondary-container text-secondary border-secondary/20",
    warning: "bg-tertiary-fixed text-tertiary border-tertiary/20",
    danger: "bg-error-container text-error border-error/20",
    neutral: "bg-surface-container text-on-surface-variant border-outline-variant",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
