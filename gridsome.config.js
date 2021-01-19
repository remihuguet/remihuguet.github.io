module.exports = {
  siteName: '🚀 Build better software, faster.',
  siteDescription: 'Software explorer - I can build better software and help teams level up.',
  siteUrl: 'https://remihuguet.dev',
  permalinks: {
    trailingSlash: false
  },
  templates: {
    Landing: '/:locale/:rawpath',
    Testimonies: '/:locale/:rawpath/testimonies',
    Resume: '/:locale/resume',
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
        typeName: 'Testimonies',
        path: 'content/pages/landing/*.json',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Resume',
        path: 'content/pages/resume/resume_*.json',
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
          title: 'Blog - Rémi Huguet, Software explorer',
          description: 'Feed for the blog of Rémi Huguet, software explorer.',
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
