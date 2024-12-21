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

## Overview

This plugin does the following:

- Set hmr protocol to wss and clientPort to 443.
- Replace \_\_HMR_HOSTNAME\_\_ in Vite's client.mjs and env.js with the forwarded address hostname.

## Run the example

Run the example in a GitHub Codespace.

```
pnpm i
pnpm -F example dev
```

