import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  build: {
    client: './dist/server/client'
  },
  adapter: node({
    mode: "standalone"
  }),
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});