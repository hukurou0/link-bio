import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const plugins = [react(), tailwindcss(), jsxLocPlugin()];

function resolveBasePath() {
  const configuredBase = process.env.BASE_PATH || process.env.VITE_BASE_PATH;
  if (configuredBase) {
    return configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`;
  }

  if (process.env.GITHUB_ACTIONS === "true") {
    const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
    if (repository) {
      return `/${repository}/`;
    }
  }

  return "/";
}

export default defineConfig({
  base: resolveBasePath(),
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
