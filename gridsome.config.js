// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Anime",
  plugins: [
    // docs: https://gridsome.org/plugins/@gridsome/source-graphql
    // {
    //   use: "@gridsome/source-graphql",
    //   options: {
    //     url: "https://graphql.anilist.co/",
    //     fieldName: "anime",
    //   },
    // },
  ],
  // this doesn't work with gql source plugin
  // docs:https://gridsome.org/docs/templates/
  templates: {
    // Anime: [
    //   {
    //     component: "./src/templates/Anime.vue",
    //     path: "/anime/:id",
    //   },
    // ],
    Post: [
      {
        component: "./src/templates/Post.vue",
        path: "/post/:id",
      },
    ],
    Author: [
      {
        component: "./src/templates/Author.vue",
        path: "/author/:id",
      },
    ],
  },
};
