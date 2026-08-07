// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://remihuguet.dev',
  // Gridsome used `permalinks.trailingSlash: false` — preserve that exactly so
  // every existing URL keeps resolving without a trailing slash.
  trailingSlash: 'never',
  integrations: [
    vue(),
    sitemap({
      // The one unpublished draft (published:false) keeps a page to preserve its
      // Gridsome URL, but carries noindex and must not be advertised in the map.
      filter: (page) =>
        !page.includes('/blog/2021/01/21/clean-archi-django-complete'),
    }),
  ],
  // Astro 7's default Markdown processor (Sätteri) drops remark/rehype + Shiki
  // config, so we opt back into the classic unified pipeline to keep parity
  // with Gridsome's remark behaviour and get dual-theme Shiki highlighting.
  markdown: {
    processor: unified({
      gfm: true, // GFM footnotes, replacing the old `remark-footnotes` plugin.
      // Preserve Gridsome: external links open in a new tab, rel-hardened.
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] },
        ],
      ],
      // Dual themes: Shiki emits both palettes as CSS variables and we switch
      // between them from the `data-theme` attribute (see src/styles/code.scss),
      // so highlighted code follows the dark/light toggle. Replaces Prism.
      shikiConfig: {
        themes: { light: 'github-light', dark: 'github-dark' },
        defaultColor: false,
        wrap: true,
      },
    }),
  },
  // NOTE (M1): the EN/FR switch is a client-side chrome-string toggle at the
  // same URL (faithful to the design prototype). Per-locale routing (Astro
  // native i18n) is deferred to a later milestone if separate URLs are wanted.
});
