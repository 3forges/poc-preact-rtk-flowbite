import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { // config to use an IP that can be reachable by my private plausible analytics service
    host: `testwebsite.pokus.io`,
    // host: `0.0.0.0`,
    origin: `testwebsite.pokus.io`,
  },
  plugins: [preact()],
})
