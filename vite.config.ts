import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",        // Listen on all IPv6 interfaces
    port: 8080,        // Change port if needed (default is 5173)
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Only use tagger in dev
  ].filter(Boolean), // Filters out 'false' (if mode !== 'development')

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Use "@/..." to reference ./src
    },
  },

  // Optional: Add base config for deployment (Vercel uses "/")
  base: "/",
}));
