// @ts-check
const groq = require("groq");
const SanityClient = require("@sanity/client");

/** @returns {import('./interface').CMS} */
const SanityCMS = () => {
  const sanityClient =
    //   @ts-ignore
    SanityClient({
      projectId: "rj21h13r",
      dataset: "production",
      useCdn: false,
      apiVersion: "2021-03-25",
    });
  return {
    fetchSiteSettings: async () => {
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
      return siteSettings;
    },

    fetchCategories: async () => {
      const categories = await sanityClient.fetch(groq`
        *[_type == "category"]{
          _id,
          title,
          "posts": *[_type == "post" && references(^._id)]{
            _id,
          }
        }
      `);
      return categories;
    },

    fetchAuthors: async () => {
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
      return authors;
    },

    fetchPosts: async () => {
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
      return posts;
    },
  };
};

module.exports = {
  SanityCMS,
};
