import { getCollection, type CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

export type Post = CollectionEntry<'posts'>;

// Replicate Gridsome's slug rule so every existing article URL is preserved:
// use the `slug` frontmatter if present, otherwise strip a leading
// `YYYY-M(M)-D(D)-` date prefix from the filename (@gridsome/source-filesystem
// did this automatically).
export function postSlug(entry: Post): string {
  if (entry.data.slug) return entry.data.slug;
  return entry.id.replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '');
}

// URL parts derived from the `date` field, zero-padded — matches the Gridsome
// route `/blog/:year/:month/:day/:slug`. Use UTC getters so a YAML date parsed
// to UTC midnight never shifts a day on machines behind UTC.
export function postDateParts(entry: Post) {
  const d = entry.data.date;
  return {
    year: String(d.getUTCFullYear()),
    month: String(d.getUTCMonth() + 1).padStart(2, '0'),
    day: String(d.getUTCDate()).padStart(2, '0'),
  };
}

export function postPath(entry: Post): string {
  const { year, month, day } = postDateParts(entry);
  return `/blog/${year}/${month}/${day}/${postSlug(entry)}`;
}

// "YYYY-MM-DD" for the date column / meta line (design uses this format).
export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// "N min" reading estimate (Gridsome's `timeToRead` equivalent).
export function readingMinutes(body: string): string {
  const minutes = Math.max(1, Math.round(readingTime(body).minutes));
  return `${minutes} min`;
}

// All published posts, newest first — used by the index and RSS.
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => data.published);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Every post (incl. unpublished) — the article route still generates a page for
// each so no historical URL 404s, mirroring Gridsome's per-node page creation.
export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
