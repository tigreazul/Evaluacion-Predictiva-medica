import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface colors
        surface: "#f8f9fb",
        "surface-dim": "#d9dadc",
        "surface-bright": "#f8f9fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f4f6",
        "surface-container": "#edeef0",
        "surface-container-high": "#e7e8ea",
        "surface-container-highest": "#e1e2e4",
        "on-surface": "#191c1e",
        "on-surface-variant": "#434654",
        "inverse-surface": "#2e3132",
        "inverse-on-surface": "#f0f1f3",

        // Outline colors
        outline: "#737685",
        "outline-variant": "#c3c6d6",
        "surface-tint": "#0c56d0",

        // Primary colors
        primary: "#003d9b",
        "on-primary": "#ffffff",
        "primary-container": "#0052cc",
        "on-primary-container": "#c4d2ff",
        "inverse-primary": "#b2c5ff",
        "primary-fixed": "#dae2ff",
        "primary-fixed-dim": "#b2c5ff",
        "on-primary-fixed": "#001848",
        "on-primary-fixed-variant": "#0040a2",

        // Secondary colors
        secondary: "#006c47",
        "on-secondary": "#ffffff",
        "secondary-container": "#82f9be",
        "on-secondary-container": "#00734c",
        "secondary-fixed": "#82f9be",
        "secondary-fixed-dim": "#65dca4",
        "on-secondary-fixed": "#002113",
        "on-secondary-fixed-variant": "#005235",

        // Tertiary colors
        tertiary: "#5e3c00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#7d5200",
        "on-tertiary-container": "#ffca81",
        "tertiary-fixed": "#ffddb3",
        "tertiary-fixed-dim": "#ffb950",
        "on-tertiary-fixed": "#291800",
        "on-tertiary-fixed-variant": "#624000",

        // Error colors
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Background
        background: "#f8f9fb",
        "on-background": "#191c1e",
        "surface-variant": "#e1e2e4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        "display-lg": ["Inter"],
        "headline-lg": ["Inter"],
        "headline-md": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-md": ["Inter"],
        "label-sm": ["Inter"],
        "data-mono": ["JetBrains Mono"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "600" }],
        "data-mono": ["14px", { lineHeight: "20px", fontWeight: "500" }],
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        base: "4px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        gutter: "24px",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
