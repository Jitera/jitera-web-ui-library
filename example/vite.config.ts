import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve as pathResolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': pathResolve(__dirname, 'src')
    }
  }
})
