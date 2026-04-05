import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/tala-web/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dark: resolve(__dirname, 'index-min.html'),
      },
    },
  },
})
