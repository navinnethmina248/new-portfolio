import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Deploying to GitHub Pages under a repo path? Set `base: "/your-repo-name/"`.
export default defineConfig({
  plugins: [react()],
});
