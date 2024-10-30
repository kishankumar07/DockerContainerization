import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enables polling, which is more compatible with Docker
    },
    host: true,          // Allows Vite to be accessible externally
    port: 5173,          // Ensures consistent port usage
  },
})
