import { defineConfig } from 'vite';
import HtmlPlugin from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    HtmlPlugin({
      inject: {
        injectHtml: `
          <base href="/task-app-react/" />
        `
      }
    })
  ]
});
