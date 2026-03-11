import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-accent": "var(--brand-accent)",
        "steel-graphite": "var(--steel-graphite)",
        "deep-carbon": "var(--deep-carbon)",
        "light-industrial": "var(--light-industrial)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        "muted-foreground": "var(--muted-foreground)",
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        body: "var(--font-body)",
      },
      backgroundImage: {
        "gradient-metallic":
          "linear-gradient(135deg, #ffffff 0%, #e6e8ea 50%, #e6e8ea 100%)",
        "gradient-carbon":
          "linear-gradient(180deg, #5f676e 0%, #2c2f33 100%)",
        "gradient-carbon-dark":
          "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      },
      boxShadow: {
        metal: "0 2px 8px 0 rgba(44, 47, 51, 0.08), 0 1px 2px 0 rgba(44, 47, 51, 0.06)",
        "metal-lg":
          "0 8px 24px -4px rgba(44, 47, 51, 0.12), 0 2px 6px -2px rgba(44, 47, 51, 0.08)",
        glow: "0 0 16px rgba(3, 105, 161, 0.22)",
        "glow-strong": "0 0 24px rgba(3, 105, 161, 0.3)",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease-out 0.75s forwards",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
