import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { // config to use an IP that can be reachable by my private plausible analytics service
    host: `testwebsite.pokus.io`,
    // port: 5174,
    // host: `0.0.0.0`,
    // origin: `testwebsite.pokus.io`,
    cors: {
      origin: `testwebsite.pokus.io, github.com`
    },
  },
  plugins: [preact()],
})
