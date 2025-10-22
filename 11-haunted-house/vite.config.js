import { defineConfig } from 'vite';
import restart from 'vite-plugin-restart';

export default defineConfig(({ command, mode }) => {
  // 🧩 Allow environment overrides for GitHub Pages builds
  const outDir = process.env.OUT_DIR || '../dist';
  const base = process.env.BASE || './';

  return {
    root: 'src/',
    publicDir: '../static/',
    base, 
    server: {
      host: true,
      open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
    },
    build: {
      outDir,
      emptyOutDir: true,
      sourcemap: true,
    },
    plugins: [
      restart({ restart: ['../static/**'] }),
    ],
  };
});
