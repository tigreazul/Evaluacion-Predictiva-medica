import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                    isCompleted
                      ? "bg-primary border-primary text-on-primary"
                      : isActive
                      ? "bg-primary border-primary text-on-primary"
                      : "bg-surface-container border-outline-variant text-on-surface-variant"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium text-center max-w-[80px]",
                    isActive ? "text-primary" : "text-on-surface-variant"
                  )}
                >
                  {step}
                </span>
              </div>
              {!isLast && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 mt-[-20px]",
                    isCompleted ? "bg-primary" : "bg-outline-variant"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
