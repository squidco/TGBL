import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((mode) => {
  return {
    define: {
      "process.env": {},
    },
    // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});