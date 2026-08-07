import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { render } from 'astro:content';
import { getPublishedPosts, postPath } from '../lib/posts';

// Published-only feed at /rss.xml, preserving the Gridsome feed's shape:
// each item's description is `description + " - " + <rendered HTML>` (full
// content), so existing subscribers keep getting whole posts in their reader.
export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const container = await AstroContainer.create();

  const items = [];
  for (const post of posts) {
    const { Content } = await render(post);
    const html = await container.renderToString(Content);
    items.push({
      title: post.data.title,
      description: `${post.data.description} - ${html}`,
      link: postPath(post),
      pubDate: post.data.date,
    });
  }

  return rss({
    title: 'Rémi Huguet — blog',
    description: 'Notes on software, craft, teams, and the occasional rabbit hole.',
    site: context.site!,
    items,
  });
}
