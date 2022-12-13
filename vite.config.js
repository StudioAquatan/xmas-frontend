import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginRequire from 'vite-plugin-require';

export default defineConfig({
  plugins: [react(), vitePluginRequire()],
  server: {
    proxy: {
      '/api': {
        target: 'https://xmas.aquatan.studio',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
