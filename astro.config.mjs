// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://NaHuynh22.github.io',
  base: '/nahuynh-astro',
  vite: {
    plugins: [tailwindcss()],
  },
});