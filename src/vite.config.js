import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/my-first-deploy/'  // This is correct and should match your GitHub Pages URL subpath
});

