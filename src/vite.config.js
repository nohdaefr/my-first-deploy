import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: '/path/to/your/index.html' // Replace this with the path to your entry HTML file
    }
  }
});
