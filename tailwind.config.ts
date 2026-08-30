import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0C9253",
          primaryHover: "#0A7D46",
          accent: "#0067E3",
          accentDark: "#0654A5",
          navy: "#122447",
          navyDeep: "#0A192F",
          navyGlow: "#223D74",
          tint: "#E5F0FC",
          greenTint: "#E7F7EE",
          gold: "#F59E0B",
        },
        dark: "#232323",
        muted: "#5B6B85",
        line: "#E2E8F0",
        priceGreen: "#16A34A",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-poppins)", "var(--font-dm-sans)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        pill: "9999px",
        card: "18px",
        section: "28px",
        tag: "10px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(12, 146, 83, 0.08)",
        "glass-card": "0 10px 40px -10px rgba(0, 0, 0, 0.07)",
        "glow-green": "0 0 30px rgba(12, 146, 83, 0.28)",
        "glow-blue": "0 0 30px rgba(0, 103, 227, 0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
