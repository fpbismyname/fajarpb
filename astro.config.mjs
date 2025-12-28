// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  image: {
      remotePatterns: [new URL("https://dummyimage.com/**")],
  },

  integrations: [alpinejs(), icon()],
});