/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas, #f2f1ed)",
        paper: "var(--paper, #f8f7f4)",
        ink: {
          DEFAULT: "var(--ink, #161716)",
          muted: "var(--ink-muted, #686a64)",
          subtle: "var(--ink-subtle, #93968e)",
        },
        border: {
          light: "var(--border-light, #d8d8d1)",
          dark: "var(--border-dark, #3d3e3b)",
        },
        accent: {
          DEFAULT: "var(--accent, #d9532f)", // Cobre arquitetural de alto impacto
          hover: "var(--accent-hover, #bf4321)",
          light: "var(--accent-light, #faece7)",
          glow: "rgba(217, 83, 47, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-beam": "border-beam 6s linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
    },
  },
  plugins: [],
};

