import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Updated import syntax
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        injectHtml: `<base href="/task-app-react/" />` // Add this line to inject the base tag
      }
    })
  ]
})
