import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ children, padding = "md", className, ...props }: CardProps) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-surface-container-lowest border border-outline-variant rounded-card shadow-sm",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
