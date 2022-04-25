import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "jsToaster.css";
          return assetInfo.name;
        },
      },
    },
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: path.resolve("src/JSToaster.ts"),
      name: "FileManager",
      formats: ["es"],
      fileName:  () => "jsToaster.js",
    },
  },
})
