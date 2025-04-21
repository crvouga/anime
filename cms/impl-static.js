// @ts-check

// Global constants for image URLs
const AUTHOR_IMAGE_URL = "https://picsum.photos/150";
const POST_IMAGE_URL = "https://picsum.photos/800/400";

/** @returns {import('./interface').CMS} */
const StaticCMS = () => {
  return {
    fetchSiteSettings: async () => {
      return {
        _id: "siteSettings",
        title: "Anime Blog",
        description: "A blog about anime and manga",
        hero: {
          actionHref: "/blog",
          actionLabel: "Read Blog",
          title: "Welcome to Anime Blog",
          body: "Discover the latest news and reviews about anime and manga",
          subBody: "Join our community of anime enthusiasts",
        },
      };
    },

    fetchCategories: async () => {
      return [
        {
          _id: "category-1",
          title: "Reviews",
          posts: [{ _id: "post-1" }, { _id: "post-2" }],
        },
        {
          _id: "category-2",
          title: "News",
          posts: [{ _id: "post-3" }],
        },
        {
          _id: "category-3",
          title: "Recommendations",
          posts: [{ _id: "post-4" }],
        },
      ];
    },

    fetchAuthors: async () => {
      return [
        {
          _id: "author-1",
          name: "John Doe",
          image: {
            url: AUTHOR_IMAGE_URL,
          },
          slug: "john-doe",
          bio: "Anime enthusiast and reviewer",
          posts: [{ _id: "post-1" }, { _id: "post-3" }],
        },
        {
          _id: "author-2",
          name: "Jane Smith",
          image: {
            url: AUTHOR_IMAGE_URL,
          },
          slug: "jane-smith",
          bio: "Manga artist and critic",
          posts: [{ _id: "post-2" }, { _id: "post-4" }],
        },
      ];
    },

    fetchPosts: async () => {
      return [
        {
          _id: "post-1",
          title: "Review: Attack on Titan Final Season",
          publishedAt: "2023-01-15",
          mainImage: {
            url: POST_IMAGE_URL,
          },
          slug: "attack-on-titan-review",
          body:
            "Attack on Titan's final season delivers an epic conclusion to the series...",
          categories: [{ _id: "category-1" }],
          author: {
            _id: "author-1",
          },
        },
        {
          _id: "post-2",
          title: "Review: Demon Slayer Season 2",
          publishedAt: "2023-02-10",
          mainImage: {
            url: POST_IMAGE_URL,
          },
          slug: "demon-slayer-review",
          body:
            "Demon Slayer continues to impress with stunning animation and character development...",
          categories: [{ _id: "category-1" }],
          author: {
            _id: "author-2",
          },
        },
        {
          _id: "post-3",
          title: "Upcoming Anime for Spring 2023",
          publishedAt: "2023-03-01",
          mainImage: {
            url: POST_IMAGE_URL,
          },
          slug: "spring-2023-anime",
          body:
            "Here's our list of the most anticipated anime coming this spring...",
          categories: [{ _id: "category-2" }],
          author: {
            _id: "author-1",
          },
        },
        {
          _id: "post-4",
          title: "Top 10 Manga for Beginners",
          publishedAt: "2023-03-15",
          mainImage: {
            url: POST_IMAGE_URL,
          },
          slug: "manga-for-beginners",
          body:
            "If you're new to manga, these ten series are perfect starting points...",
          categories: [{ _id: "category-3" }],
          author: {
            _id: "author-2",
          },
        },
      ];
    },
  };
};

module.exports = {
  StaticCMS,
};
