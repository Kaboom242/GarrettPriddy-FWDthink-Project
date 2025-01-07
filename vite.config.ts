import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' to the 'src' directory
      'bootstrap-icons': path.resolve(
        __dirname,
        'node_modules/bootstrap-icons/font'
      ),
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) =>
          ['title-bar', 'chip-button', 'resource-card'].includes(tag),
      },
    },
  },
});
