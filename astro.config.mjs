// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

const siteUrl = 'https://pablomgdev.xyz'

export default defineConfig({
  integrations: [tailwind()],
  site: siteUrl,
  // Static site; contact submissions are handled by the Vercel Function at /api/contact
  output: 'static',
  devToolbar: {
    enabled: false,
  },
})
