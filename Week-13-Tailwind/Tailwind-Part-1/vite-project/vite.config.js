// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            blue: {
              200: "#8094ad",
              500: "#19406a",
              700: "#002b5b",
            },
            green: {
              400: "#36c6c0"
            },
          },
        },
      },
    }),
  ],
})
