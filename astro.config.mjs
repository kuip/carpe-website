// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carpe.provable.dev',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
