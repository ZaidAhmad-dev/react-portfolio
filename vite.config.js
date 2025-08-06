// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'             // ← default import

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://zaidahmaddev.com',
      dynamicRoutes: [
        '/',
        '/courses',
        '/clients',
        '/projects',
      ],                                              // :contentReference[oaicite:0]{index=0}
      // 2️⃣ Exclude any asset paths you don't want in the sitemap:
      exclude: ['/images/**', '/favicon.png']         // :contentReference[oaicite:1]{index=1}
    })
  ]
})
