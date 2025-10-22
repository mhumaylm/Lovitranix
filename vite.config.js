import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Change this to root for custom domain
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})