import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 The base path must exactly match your repo name
  base: '/RentSecure/',
  build: {
    outDir: 'docs',       // GitHub Pages expects files here
    emptyOutDir: true,    // Clears old files before rebuild
  },
})
