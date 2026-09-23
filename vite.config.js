import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the same build works on Vercel and on GitHub Pages.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
