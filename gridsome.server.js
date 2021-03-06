// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
    api.createPages(({ createPage }) => {
        createPage({
          path: '/',
          component: './src/templates/Landing.vue',
          context: {'id': 'landing_fr'}
        });
      });
    api.createPages(({ createPage }) => {
        createPage({
          path: '/resume',
          component: './src/templates/Resume.vue',
          context: {'id': 'resume_fr'}
        });
      });
    api.createPages(({ createPage }) => {
        createPage({
          path: '/about',
          component: './src/pages/fr/About.vue'
        });
      });
}
