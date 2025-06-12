import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'extension',
  build: {
    outDir: 'extension/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: 'extension/index.html'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [react()]
});