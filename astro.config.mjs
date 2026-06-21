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

});
