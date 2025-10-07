import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/assets'),
    },
  },
})
