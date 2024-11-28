import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  // base: '/who-am-i/',
  css: { 
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
