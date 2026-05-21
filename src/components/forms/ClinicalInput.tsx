import React from "react";
import { cn } from "@/lib/utils";

export interface ClinicalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  unit?: string;
}

export const ClinicalInput = React.forwardRef<HTMLInputElement, ClinicalInputProps>(
  ({ label, error, helperText, unit, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-on-surface mb-1.5">
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              "w-full px-3 py-2 bg-surface-container-lowest border rounded-lg text-on-surface",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "disabled:bg-surface-container disabled:cursor-not-allowed",
              error ? "border-error" : "border-outline-variant",
              unit && "pr-12",
              className
            )}
            {...props}
          />
          {unit && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant">
              {unit}
            </span>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-on-surface-variant">{helperText}</p>
        )}
      </div>
    );
  }
);

ClinicalInput.displayName = "ClinicalInput";
