import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-start justify-between mb-6", className)}>
      <div className="flex-1">
        {badge && (
          <div className="mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-fixed text-primary">
              {badge}
            </span>
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-on-surface tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-base text-on-surface-variant leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="ml-4">{action}</div>}
    </div>
  );
}
