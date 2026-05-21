import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md active:scale-[0.98]",
    secondary: "bg-surface-container text-primary border border-outline-variant hover:bg-surface-container-high",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary-fixed",
    danger: "bg-error text-on-error hover:bg-error/90 shadow-sm",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
