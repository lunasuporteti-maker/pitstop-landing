// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pitstop.iaqueatende.com.br',
  output: 'static',
  integrations: [
    sitemap({
      // /404 nao deve aparecer no sitemap (Dev Notes da Story 5.3).
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
