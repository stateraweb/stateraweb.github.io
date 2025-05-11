import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";  // Using the standard Vite plugin for React
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "docs",  // The output folder for GitHub Pages
    emptyOutDir: true,  // Clear the output folder before building
  },
  plugins: [
    react(),  // Use the standard plugin for React
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Set up alias for the src directory
    },
  },
}));
