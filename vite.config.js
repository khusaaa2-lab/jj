import { defineConfig } from "vite";
import { readFileSync } from "node:fs";

// File-based task previews read index.html without running Vite. Keep that entry
// self-contained; Vite alone uses the original editable source template.
const sourceTemplate = new URL("./src/index.vite.template", import.meta.url);
export default defineConfig({
  base: './',
  plugins: [{
    name: "serenity-source-entry",
    transformIndexHtml: {
      order: "pre",
      handler: () => readFileSync(sourceTemplate, "utf8"),
    },
  }],
  server: { host: "0.0.0.0", port: 5173, strictPort: true },
  preview: { host: "0.0.0.0", port: 4173, strictPort: true },
  build: {
    target: "es2022",
  },
});
