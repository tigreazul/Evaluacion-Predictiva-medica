import React from "react";
import { cn } from "@/lib/utils";

export interface ClinicalSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const ClinicalSelect = React.forwardRef<HTMLSelectElement, ClinicalSelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-on-surface mb-1.5">
          {label}
        </label>
        <select
          ref={ref}
          className={cn(
            "w-full px-3 py-2 bg-surface-container-lowest border rounded-lg text-on-surface",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "disabled:bg-surface-container disabled:cursor-not-allowed",
            error ? "border-error" : "border-outline-variant",
            className
          )}
          {...props}
        >
          <option value="">Seleccionar...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

ClinicalSelect.displayName = "ClinicalSelect";
