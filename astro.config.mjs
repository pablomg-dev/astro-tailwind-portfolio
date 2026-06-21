// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

const siteUrl = "https://pablomgdev.lat";

export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  site: siteUrl,
  devToolbar: {
    enabled: false,
  },
  security: {
    CSP: {
      directives: {
        defaultSrc: ["'none'"],
        connectSrc: ["'self'", "https://www.google-analytics.com", "https://analytics.google.com"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://www.googletagmanager.com",
          "https://www.google-analytics.com",
          "https://cdn.jsdelivr.net"
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
          "https://cdn.jsdelivr.net"
        ],
        imgSrc: [
          "'self'",
          "data:",
          "https://pablomgdev.lat",
          "https://*.github.com",
          "https://*.netlify.app"
        ],
        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com",
          "https://fonts.googleapis.com"
        ],
        frameSrc: [
          "'self'",
          "https://www.google.com"
        ],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        workerSrc: ["'self'", "blob:"],
        manifestSrc: ["'self'"],
      },
      // Aplicar CSP solo en producción
      ...(process.env.NODE_ENV === 'production' ? {} : { strictDynamic: false }),
    },
  },
});
