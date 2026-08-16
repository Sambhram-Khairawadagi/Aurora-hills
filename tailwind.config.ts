import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#06150E",
          900: "#0A1F14",
          800: "#102C1E",
          700: "#183F2B",
          600: "#22553B",
          500: "#2D6A4F",
          400: "#40916C",
          300: "#52B788",
          200: "#74C69D",
          100: "#D8F3DC",
          50: "#F0F9F4",
        },
        gold: {
          600: "#9A741E",
          500: "#B8860B",
          400: "#C89B3C",
          300: "#D4AF37",
          200: "#E6CA65",
          100: "#F4E7B5",
          50: "#FAF6E8",
        },
        maroon: {
          900: "#450A14",
          800: "#60101D",
          700: "#7B1123",
          600: "#9A192F",
          500: "#B3263E",
          100: "#FCE7EB",
          50: "#FFF5F6",
        },
        sand: {
          900: "#2A2521",
          800: "#4A423A",
          200: "#E3DAC9",
          100: "#F2EDE4",
          50: "#FBF9F5",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        kannada: ["var(--font-kannada)", "Noto Sans Kannada", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-subtle": "pulseSubtle 3s infinite ease-in-out",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
