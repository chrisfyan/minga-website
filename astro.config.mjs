// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://minga.studio',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
