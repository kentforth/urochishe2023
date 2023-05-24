import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import dns from 'dns'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/app.scss";`
      }
    }
  },
  plugins: [vue(), checker({ typescript: true })],
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
