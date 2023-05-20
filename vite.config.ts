import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import dns from 'dns'
import vue from '@vitejs/plugin-vue'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/_variables.scss";`
      }
    }
  },
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 3000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
