const { z } = require("zod");

const HeroSchema = z.object({
  actionHref: z.string(),
  actionLabel: z.string(),
  title: z.string(),
  body: z.string(),
  subBody: z.string(),
});

/**
 * @typedef {z.infer<typeof HeroSchema>} Hero
 */

const SiteSettingsSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  hero: HeroSchema,
});

/**
 * @typedef {z.infer<typeof SiteSettingsSchema>} SiteSettings
 */

const CategorySchema = z.object({
  _id: z.string(),
  title: z.string(),
  posts: z.array(
    z.object({
      _id: z.string(),
    })
  ),
});

/**
 * @typedef {z.infer<typeof CategorySchema>} Category
 */

const AuthorSchema = z.object({
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

/**
 * @typedef {z.infer<typeof AuthorSchema>} Author
 */

const PostSchema = z.object({
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

/**
 * @typedef {z.infer<typeof PostSchema>} Post
 */

/**
 * @typedef {{
 *   fetchSiteSettings: () => Promise<SiteSettings>;
 *   fetchCategories: () => Promise<Category[]>;
 *   fetchAuthors: () => Promise<Author[]>;
 *   fetchPosts: () => Promise<Post[]>;
 * }} CMS
 */

module.exports = {
  HeroSchema,
  SiteSettingsSchema,
  CategorySchema,
  AuthorSchema,
  PostSchema,
};
