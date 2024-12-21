import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import codespacesHMR from "vite-plugin-codespaces-hmr";

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    codespacesHMR(),
    solidPlugin()
  ],
});
