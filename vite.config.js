import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   // Set base for GitHub Pages: https://<user>.github.io/<repo>/
  base: '/https://kowshick-kumar.github.io/RentSecure//',
})
})

