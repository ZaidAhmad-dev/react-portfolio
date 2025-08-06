// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'             // ← default import

export default defineConfig({
  plugins: [
    react(),
    Sitemap({                                        // ← call it here
      hostname: 'https://zaidahmaddev.com',          // your live URL
      // optional: list any dynamic routes you have
      // dynamicRoutes: ['/courses', '/clients', '/projects'],
      // exclude: ['/404']
    })
  ]
})
