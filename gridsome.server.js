const { z } = require("zod");
const groq = require("groq");
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
      SiteSettings: "SiteSettings",
    };

    //
    //
    //
    // Site Settings
    //
    //
    //

    const siteSettingsCol = await addCollection(typeName.SiteSettings);

    const siteSettings = await sanityClient.fetch(groq`
      *[_type == "siteSettings"][0]{
        _id,
        title,
        description,
        hero {
          actionHref,
          actionLabel,
          title,
          body,
          subBody,
        }
      }
    `);

    const Hero = z.object({
      actionHref: z.string(),
      actionLabel: z.string(),
      title: z.string(),
      body: z.string(),
      subBody: z.string(),
    });

    const SiteSettings = z.object({
      _id: z.string(),
      title: z.string(),
      description: z.string(),
      hero: Hero,
    });

    const parsed = SiteSettings.parse(siteSettings);

    siteSettingsCol.addNode({
      id: parsed._id,
      title: parsed.title,
      description: parsed.description,
      hero: parsed.hero,
    });

    //
    //
    //
    //
    //
    //
    //

    const categoryCol = addCollection(typeName.Category);

    const categories = await sanityClient.fetch(groq`
      *[_type == "category"]{
        _id,
        title,
        "posts": *[_type == "post" && references(^._id)]{
          _id,
        }
      }
    `);

    const Category = z.object({
      _id: z.string(),
      title: z.string(),
      posts: z.array(
        z.object({
          _id: z.string(),
        })
      ),
    });

    const categoriesParsed = z.array(Category).parse(categories);

    for (const category of categoriesParsed) {
      categoryCol.addNode({
        id: category._id,
        title: category.title,
        description: category.description,
        posts: store.createReference(
          typeName.Post,
          category.posts.map((post) => post._id)
        ),
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

    const authors = await sanityClient.fetch(groq`
      *[_type == "author"]{
          _id,
          name,
          "image": image.asset->{
            url,
            metadata
          },
          "slug": slug.current,
          bio,
          "posts": *[_type == "post" && author._ref == ^._id]{
            _id,
          }
        }
    `);

    const Author = z.object({
      _id: z.string(),
      name: z.string(),
      image: z.object({
        url: z.string(),
      }),
      slug: z.string(),
      bio: z.string(),
      posts: z.array(
        z.object({
          _id: z.string(),
        })
      ),
    });

    const authorsParsed = z.array(Author).parse(authors);

    for (const author of authorsParsed) {
      authorCol.addNode({
        id: author._id,
        name: author.name,
        image: author.image.url,
        slug: author.slug,
        bio: author.bio,
        posts: store.createReference(
          typeName.Post,
          author.posts.map((post) => post._id)
        ),
      });
    }

    //
    //
    //
    //
    //
    //

    const postsCol = addCollection(typeName.Post);

    const posts = await sanityClient.fetch(groq`
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

    const Post = z.object({
      _id: z.string(),
      title: z.string(),
      publishedAt: z.string(),
      mainImage: z.object({
        url: z.string(),
      }),
      slug: z.string(),
      body: z.string(),
      categories: z.array(
        z.object({
          _id: z.string(),
        })
      ),
      author: z.object({
        _id: z.string(),
      }),
    });

    const postsParsed = z.array(Post).parse(posts);

    for (const post of postsParsed) {
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
  // api.afterBuild(({ redirects }) => {
  //   for (const rule of redirects) {
  //     // rule.from   - The dynamic path
  //     // rule.to     - The HTML file path
  //     // rule.status - 200 if rewrite rule
  //     console.log(rule);
  //   }
  // });

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
