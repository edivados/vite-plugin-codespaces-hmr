# Vite Plugin Codespaces HMR

Vite plugin to get HMR working in GitHub Codespaces.

Reference: https://github.com/vitejs/vite/issues/8666#issuecomment-1315694497

## Usage

```js
import { defineConfig } from "vite";
import codespacesHMR from "vite-plugin-codespaces-hmr";

export default defineConfig({
  plugins: [codespacesHMR()]
});
```

## Run the example

Run the example in a GitHub Codespace.

```
pnpm i
pnpm -F example dev
```

