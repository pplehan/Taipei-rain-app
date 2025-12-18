import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // 當前端呼叫 /rain-api 時，轉發給本地的 Express 後端 (8080)
      '/rain-api': {
        target: 'http://localhost:8080',
        changeOrigin: true,

      }
    }
  }
})