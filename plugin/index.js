export default function plugin(options) {
	let hostname;
	return process.env["CODESPACES"]
		? {
				name: "vite-plugin-codespaces-hmr",
				apply: "serve",
				config() {
					return {
						server: {
							hmr: {
								...(options?.port ? { port: options.port } : {}),
								protocol: 'wss',
								clientPort: 443
							}
						}
					}
				},
				configResolved(config) {
					hostname = `${process.env["CODESPACE_NAME"]}-${config.server.hmr.port}.app.github.dev`;
					console.log(`Make sure to change port visibility of ${hostname} to public.`);
				},
				transform(code, id) {
					if 
					(
						id.endsWith("/vite/dist/client/client.mjs") ||
						id.endsWith("/vite/dist/client/env.mjs")
					) 
					{
						return code.replace("__HMR_HOSTNAME__", JSON.stringify(hostname));
					}
				},
			} 
		: undefined;
}