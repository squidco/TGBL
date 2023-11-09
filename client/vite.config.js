import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "@babel/helper-module-imports",
        "babel-plugin-macros"
        ],
      },
  },
  plugins: [react()],
})
