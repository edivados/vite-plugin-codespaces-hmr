import { defineConfig } from "@solidjs/start/config";
import codespacesHMR from "vite-plugin-codespaces-hmr";

export default defineConfig({
  vite({ router }) {
    if (router === "client") {
      return {
        plugins: [codespacesHMR({ port: 3001 })]
      }
    }
    return {};
  }
});
