import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/variables.scss";`,
      },
    },
  },
});
