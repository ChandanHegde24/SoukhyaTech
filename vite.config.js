import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
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
