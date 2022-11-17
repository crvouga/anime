// const { z } = require("zod");
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.afterBuild(({ redirects }) => {
    for (const rule of redirects) {
      // rule.from   - The dynamic path
      // rule.to     - The HTML file path
      // rule.status - 200 if rewrite rule
      console.log(rule);
    }
  });

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    // docs: https://gridsome.org/docs/pages-api/#create-pages-from-graphql
    // const { data, error } = await graphql(`
    //   {
    //     anime {
    //       Page {
    //         media {
    //           id
    //         }
    //       }
    //     }
    //   }
    // `);
    // if (error) {
    //   console.error(error);
    //   return;
    // }
    // for (const media of data.anime.Page.media) {
    //   createPage({
    //     path: `/anime/${media.id}`,
    //     component: "./src/templates/Anime.vue",
    //     context: {
    //       id: media.id,
    //     },
    //     queryVariables: {
    //       id: media.id,
    //     },
    //   });
    // }
  });
};
