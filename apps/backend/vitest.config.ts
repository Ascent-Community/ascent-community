import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    alias: {
      "@": "/src",
      "@tests": "/tests",
    },
  },
  plugins: [swc.vite()],
});
