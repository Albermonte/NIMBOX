import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $store: path.resolve('./src/store'),
      $utils: path.resolve('./src/utils'),
      src: path.resolve('./src'),
    }
  }
})
