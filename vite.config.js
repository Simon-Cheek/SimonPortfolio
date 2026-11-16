import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Emotion's css prop is enabled per file via the
  // `/** @jsxImportSource @emotion/react */` pragma, so no Babel plugin is needed.
  plugins: [react()],
  base: "/",
});
