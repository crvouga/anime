// const { z } = require("zod");
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const SanityClient = require("@sanity/client");

//
//
// sanity example https://github.com/codewithkristian/sanity-blog-schema
//
//

const sanityClient = SanityClient({
  projectId: "rj21h13r",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});

module.exports = function(api) {
  api.loadSource(async ({ addCollection, store }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const typeName = {
      Category: "Category",
      Author: "Author",
      Post: "Post",
    };

    //
    //
    //
    //
    //
    //
    //

    const categoryCol = addCollection(typeName.Category);

    const categories = await sanityClient.fetch(`
      *[_type == "category"]{
        _id,
        title,
        description,
      }
    `);

    for (const category of categories) {
      categoryCol.addNode({
        id: category._id,
        title: category.title,
        description: category.description,
      });
    }

    //
    //
    //
    //
    //
    //
    //

    const authorCol = addCollection(typeName.Author);

    const authors = await sanityClient.fetch(`
      *[_type == "author"]{
        _id,
        name,
        "image": image.asset->{
          url,
          metadata
        },
        "slug": slug.current,
        bio,
      }
    `);

    for (const author of authors) {
      authorCol.addNode({
        id: author._id,
        name: author.name,
        image: author.image.url,
        slug: author.slug,
        bio: author.bio,
      });
    }

    //
    //
    //
    //
    //
    //

    const postsCol = addCollection(typeName.Post);

    const posts = await sanityClient.fetch(`
      *[_type == "post"]{
        _id,
        title,
        publishedAt,
        "mainImage": mainImage.asset->{
          url,
          metadata,
        },
        "slug": slug.current,
        body,
        "categories": categories[]->{
          _id
        },
        "author": author->{
          _id
        },
      }
    `);

    for (const post of posts) {
      postsCol.addNode({
        id: post._id,
        title: post.title,
        mainImage: post.mainImage.url,
        slug: post.slug,
        body: post.body,
        publishedAt: post.publishedAt,
        categories: store.createReference(
          typeName.Category,
          post.categories.map((category) => category._id)
        ),
        author: store.createReference(typeName.Author, post.author._id),
      });
    }
  });

  // idk how to make redirects work
  // https://gridsome.org/docs/dynamic-routing/#generating-rewrite-rules
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
