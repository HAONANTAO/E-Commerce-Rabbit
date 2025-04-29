/*
 * @Date: 2025-04-20 21:08:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-22 21:24:34
 * @FilePath: /E-Commerce-Rabbit/frontend/vite.config.js
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  // 别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
