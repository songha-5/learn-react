import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CSS가 어디에 적용됬는지 알 수 있음 (아직 완성된 기술 아님)
  css: {
    devSourcemap: true,
  },
  // 서버 포트, 서버 바로 열리는지
  server: {
    port: 3000,
    open: false
  },
  // alias 설정
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }

})
