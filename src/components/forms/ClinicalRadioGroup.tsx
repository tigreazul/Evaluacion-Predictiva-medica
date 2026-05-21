import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: string;
}

export interface ClinicalRadioGroupProps {
  label: string;
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  name?: string;
}

export function ClinicalRadioGroup({
  label,
  options,
  value,
  onChange,
  error,
}: ClinicalRadioGroupProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-on-surface mb-2">
        {label}
      </label>
      <div className="flex gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex-1 px-4 py-2.5 rounded-lg border font-medium text-sm transition-all",
              value === option.value
                ? "bg-primary text-on-primary border-primary shadow-sm"
                : "bg-surface-container-lowest text-on-surface border-outline-variant hover:border-primary"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
}
