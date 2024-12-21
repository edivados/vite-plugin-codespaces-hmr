export default function plugin() {
  if (process.env["CODESPACES"]) {
    let hostname;
    return {
      name: "vite-plugin-codespaces-hmr",
      apply: "serve",
      config() {
        return {
          server: {
            hmr: {
              protocol: 'wss',
              clientPort: 443
            }
          }
        }
      },
      configureServer(server) {
        server.httpServer.once('listening', () => {
          const port = server.httpServer.address().port;
          const codespaceName = process.env["CODESPACE_NAME"];
          const forwardingDomain = process.env["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"];
          hostname = `${codespaceName}-${port}.${forwardingDomain}`;
        });
      },
      transform(code, id) {
        if (
          id.endsWith("/vite/dist/client/client.mjs") ||
          id.endsWith("/vite/dist/client/env.mjs")
        ) {
          return code.replace("__HMR_HOSTNAME__", JSON.stringify(hostname));
        }
      },
    };
  }
}