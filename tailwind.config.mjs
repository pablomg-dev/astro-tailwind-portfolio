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
        "slide-up": "slideUp 0.8s ease-out forwards",
        "bounce-slow": "bounce 2s infinite",
        "slide-in-left": "slideInLeft 1s ease-out forwards",
        "slide-in-right": "slideInRight 1s ease-out forwards",
        "rotate-scale": "rotateScale 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2s infinite",
        float: "float 3s ease-in-out infinite",
        "reveal-from-left": "revealFromLeft 1s ease-out forwards",
        "reveal-from-right": "revealFromRight 1s ease-out forwards",
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        flip: "flip 2s ease-in-out infinite",
        "rubber-band": "rubberBand 1s ease-in-out infinite",
        jello: "jello 1s ease-in-out infinite",
        "heart-beat": "heartBeat 1.5s ease-in-out infinite",
        "gradient-move": "gradientMove 3s linear infinite alternate",
        "text-glow": "textGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rotateScale: {
          "0%": { transform: "scale(0) rotate(-180deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0)", opacity: "1" },
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        flip: {
          "0%, 100%": {
            transform: "perspective(400px) rotateY(0)",
            animationTimingFunction: "ease-out",
          },
          "40%": {
            transform: "perspective(400px) translateZ(150px) rotateY(170deg)",
            animationTimingFunction: "ease-out",
          },
          "50%": {
            transform:
              "perspective(400px) translateZ(150px) rotateY(190deg) scale(1)",
            animationTimingFunction: "ease-in",
          },
        },
        rubberBand: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        jello: {
          "0%, 100%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, .95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        heartBeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        revealFromLeft: {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        revealFromRight: {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        textGlow: {
          "0%, 100%": {
            textShadow:
              "0 0 8px #fff, 0 0 16px var(--tw-gradient-from), 0 0 32px var(--tw-gradient-to)",
          },
          "50%": {
            textShadow:
              "0 0 16px #fff, 0 0 32px var(--tw-gradient-from), 0 0 64px var(--tw-gradient-to)",
          },
        },
      },
    },
  },
  plugins: [],
};
