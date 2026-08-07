import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts migrated from Gridsome. Frontmatter shape is validated here so a
// malformed post fails the build instead of silently breaking a page — the
// type-safe replacement for Gridsome's untyped GraphQL nodes.
const posts = defineCollection({
  // Key entries by filename, not by the `slug` frontmatter. Two posts share
  // slug "software-craft-avant-propos" (different dates → distinct URLs under
  // Gridsome); without this the glob loader would collide their ids and drop
  // one. The URL is still computed from date + slug in src/lib/posts.ts.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Every migrated post carries `published`; default true for safety.
    published: z.boolean().default(true),
    // e.g. "fr-fr" (55 posts) or "en-gb" (5 posts).
    locale: z.string().default('fr-fr'),
    // Optional custom slug (24 posts have one); otherwise the slug is derived
    // from the filename in the article route (see src/lib/posts.ts).
    slug: z.string().optional(),
    // Vestigial Jekyll-ism on a single post; Gridsome ignored it, we keep it
    // for reference but do not route on it.
    permalink: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
