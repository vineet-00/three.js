import { defineConfig } from 'vite';
import restart from 'vite-plugin-restart';

export default defineConfig({
  root: 'src/',
  publicDir: '../static/',
  base: './',
  
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
  },
  
  build: {
    outDir: '../dist',      // Outputs to 11-haunted-house/dist
    emptyOutDir: true,
    sourcemap: true,
  },
  
  plugins: [
    restart({ restart: ['../static/**'] }),
  ],
});
