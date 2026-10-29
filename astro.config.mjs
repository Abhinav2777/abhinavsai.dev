// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://abhinavsai.dev',
  trailingSlash: 'ignore',
  // Keep source whitespace: compression drops the space where a line of text meets an inline tag.
  compressHTML: false,
  integrations: [sitemap(), mdx()],
});
