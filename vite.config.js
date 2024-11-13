import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import { resolve } from "path";

export default defineConfig({
  root: "./",
  plugins: [
    liveReload(["./index.html", "./css/**/*.{less,css}", "./js/**/*.js"]),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true,
      },
    },
  },
});
