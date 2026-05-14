import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      serif: ["Gabarito Variable", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: ["0.875rem", "1.125rem"],
      sm: ["1rem", "1.25rem"],
      base: ["1.125rem", "1.625rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "1.813rem"],
      "2xl": ["1.75rem", "2.125rem"],
      "3xl": ["2rem", "2.375rem"],
      "4xl": ["2.25rem", "2.688rem"],
      "5xl": ["2.5rem", "3rem"],
      "6xl": ["3rem", "3.625rem"],
      "7xl": ["3.75rem", "1"],
      "8xl": ["4.5rem", "4.875rem"],
      "9xl": ["6rem", "6.625rem"],
    },
    extend: {
      letterSpacing: {
        tightest: "-2px",
        tighter: "-1px",
        tight: "-0.25px",
      },
      colors: {
        primary: "#D4AF37", // Dorado suave (acentos y estrellas)
        sage: "#B2AC88", // Verde Sage (acentos secundarios)
        space: "#080812", // Negro Espacial Profundo (fondo)
        nebula: "#1a1a3a", // Azul Nebulosa
        cream: "#F5F5DC", // Crema/Arena (texto principal)
        midnight: "#050508", // Negro absoluto para sombras profundas
        white: "#FAF9F6", // Blanco roto
        gold: "#D4AF37",
      },
      transitionDuration: {
        DEFAULT: "500ms",
      },
      boxShadow: {
        aura: "0 0 30px 5px rgba(212, 175, 55, 0.25)",
        "aura-lg": "0 0 50px 10px rgba(212, 175, 55, 0.35)",
        cosmic: "0 0 40px rgba(178, 172, 136, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "0.6",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "translate(-50%, -50%) scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
