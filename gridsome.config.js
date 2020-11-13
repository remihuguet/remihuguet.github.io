module.exports = {
  siteName: 'Rémi Huguet',
  siteDescription: 'Freelance software engineer & consultant',
  siteUrl: 'https://remihuguet.dev',
  permalinks: {
    trailingSlash: false
  },
  templates: {
    Landing: '/:locale/:rawpath',
    Post: '/blog/:year/:month/:day/:title',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Landing',
        path: 'content/pages/landing/*.json',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        latest: true,
        feedOptions: {
          title: 'Rémi Huguet - Le Blog',
          description: 'Le flux du blog du site de Rémi Huguet, freelance software engineer.',
          feed_url: 'https://remihuguet.dev/rss.xml',
          site_url: 'https://remihuguet.dev'
        },
        feedItemOptions: node => ({
            title: node.title,
            description: node.description,
            url: 'https://remihuguet.dev' + node.path,
            date: node.date,
            author: node.author
        })
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
