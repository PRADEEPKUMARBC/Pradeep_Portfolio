import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#08090D",
          deep: "#050608",
          subtle: "#0D0F15",
          elevated: "#12151E",
          card: "#161924",
          cardHover: "#1B202E",
        },
        surface: {
          DEFAULT: "#12151E",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(96, 165, 250, 0.3)",
          glow: "rgba(96, 165, 250, 0.15)",
        },
        brand: {
          blue: "#3B82F6",
          blueLight: "#60A5FA",
          cyan: "#38BDF8",
          cyanGlow: "#67E8F9",
          violet: "#8B5CF6",
          violetLight: "#A78BFA",
          accent: "#6C7CFF",
        },
        content: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(96, 165, 250, 0.15), transparent 70%)",
        "radial-hero": "radial-gradient(circle at top right, rgba(96, 165, 250, 0.12), rgba(167, 139, 250, 0.06), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
