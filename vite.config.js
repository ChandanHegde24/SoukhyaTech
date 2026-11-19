import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom') ||
              id.includes('@remix-run') ||
              id.includes('scheduler')
            ) {
              return 'vendor-core';
            }
          }
        },
      },
      onwarn(warning, warn) {
        const isFramerMotionDirectiveWarning =
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.id?.includes('node_modules/framer-motion/') &&
          warning.message.includes('"use client"');

        if (isFramerMotionDirectiveWarning) {
          return;
        }

        warn(warning);
      },
    },
  },
});
