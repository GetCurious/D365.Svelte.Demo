import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $assets: path.resolve('./src/assets'),
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: `WebResources/new_test_js.js`,
        assetFileNames: `WebResources/new_test_css.[ext]`
      }
    }
  }
})
