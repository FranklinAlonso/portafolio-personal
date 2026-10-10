// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Adds the fence meta `title="..."` as a data-title attribute so CSS can label the block.
 * @type {import('shiki').ShikiTransformer}
 */
const codeTitle = {
  name: 'code-title',
  pre(node) {
    const m = /title="([^"]+)"/.exec(this.options.meta?.__raw ?? '');
    if (m) node.properties['data-title'] = m[1];
  },
};

export default defineConfig({
  site: 'https://franklinalonso.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', transformers: [codeTitle] },
  },
});
