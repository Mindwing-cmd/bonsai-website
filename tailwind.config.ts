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
        "gradient-brand":
          "linear-gradient(90deg, #a388ee 0%, #7b5cd9 50%, #c4a0ff 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0b0812 0%, #12101a 40%, #000000 100%)",
        "gradient-carbon-dark":
          "linear-gradient(180deg, #12101a 0%, #0b0812 100%)",
        "gradient-metallic":
          "linear-gradient(135deg, #ffffff 0%, #e8e4f0 50%, #c4b5fd 100%)",
        "gradient-carbon":
          "linear-gradient(180deg, #2a2438 0%, #0b0812 100%)",
      },
      boxShadow: {
        metal: "0 2px 8px 0 rgba(11, 8, 18, 0.45), 0 1px 2px 0 rgba(163, 136, 238, 0.08)",
        "metal-lg":
          "0 8px 24px -4px rgba(11, 8, 18, 0.55), 0 2px 6px -2px rgba(163, 136, 238, 0.12)",
        glow: "0 0 16px rgba(163, 136, 238, 0.28)",
        "glow-strong": "0 0 24px rgba(163, 136, 238, 0.4)",
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
