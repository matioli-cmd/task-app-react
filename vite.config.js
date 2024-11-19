import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/task-app-react/', // Ensure this matches your subdirectory
  plugins: [react()],
});
