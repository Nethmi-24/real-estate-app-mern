import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {                              //Whenever you see /api
        target: "http://localhost:3000",     //Add this http 3000 before it
        secure: false,
      },
    },
  },
  plugins: [react()],
});
