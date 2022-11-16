// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Anime",
  plugins: [
    // docs: https://gridsome.org/plugins/@gridsome/source-graphql
    {
      use: "@gridsome/source-graphql",
      options: {
        url: "https://graphql.anilist.co/",
        fieldName: "anime",
      },
    },
  ],
};
