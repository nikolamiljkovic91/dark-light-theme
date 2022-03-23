import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dark-light-theme/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/variables.scss";`,
      },
    },
  },
});
