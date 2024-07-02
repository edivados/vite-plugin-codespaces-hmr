Make sure to change port visibility to public. Forwarded address will be printed to the console.

```js
import { defineConfig } from "vite";
import codespacesHMR from "vite-plugin-codespaces-hmr";

export default defineConfig({
  plugins: [codespacesHMR({ port: 3001 })]
});
```

Reference: https://github.com/vitejs/vite/issues/8666#issuecomment-1315694497
