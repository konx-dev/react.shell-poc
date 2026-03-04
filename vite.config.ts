import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  const SERVER_PORT = parseInt(env.SERVER_PORT) || 3000;

  return {
    plugins: [react()],
    server: {
      port: SERVER_PORT,
      strictPort: true,
    },
    preview: {
      port: SERVER_PORT,
      strictPort: true,
    },
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});