import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // This is the v4 way

export default defineConfig({
  site: 'https://fionneom.github.io',
  base: '/',
  // Remove the integrations: [tailwind()] line entirely
  vite: {
    plugins: [tailwindcss()],
  },
});