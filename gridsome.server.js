// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.createPages(({ createPage }) => {
      createPage({
        path: '/en/notes',
        component: './src/templates/Notes.vue',
        context: {lang: 'en'} });
    });

  api.createPages(({ createPage }) => {
      createPage({
        path: '/fr/notes',
        component: './src/templates/Notes.vue',
        context: {lang: 'fr'} });
    });
  // api.loadSource(({ addCollection }) => {
  //   const collection = addCollection('Notes');

  //   collection.addNode({
  //     'lang': 'en'
  //   });
  //   collection.addNode({
  //     'lang': 'fr'
  //   });
  //   const collection_2 = addCollection('Posts');
  //   collection_2.addNode({
  //     'lang': 'en'
  //   });
  //   collection_2.addNode({
  //     'lang': 'fr'
  //   });

  // })
}
