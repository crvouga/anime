<script>
import { gql } from "graphql-request";
import PosterCard from "../components/PosterCard.vue";
import { animeClient } from "../anime-client";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PosterCard,
    PostCard,
  },
  data() {
    return {
      error: null,
      data: null,
      pending: true,
    };
  },
  computed: {
    allMedia() {
      return this.data?.Page.media;
    },
  },

  async mounted() {
    const query = gql`
      {
        Page {
          media {
            id
            coverImage {
              extraLarge
            }
            title {
              english
              native
            }
            seasonYear
          }
        }
      }
    `;

    this.pending = true;
    const data = await animeClient.request(query);
    this.data = data;
    this.pending = false;
  },
};
</script>

<page-query>
{

  siteSettings(id:"siteSettings"){
    id
    title
    description
    hero{
      actionHref
      actionLabel
      body
      subBody
      title
    }
  }

  allPost {
    edges {
      node {
        id
        title
        slug
        categories {
          id
          title
        }
        publishedAt
        mainImage
        author {
          id
          image
          name
        }
      }
    }
  }
}
</page-query>

<template>
  <Layout>
    <section class="jumbotron">
      <div class="container p-0">
        <h1 class="display-4 font-weight-bold text-primary">
          {{ $page.siteSettings.hero.title }}
        </h1>
        <p class="lead">
          {{ $page.siteSettings.hero.body }}
        </p>
        <hr class="my-4" />
        <p>
          {{ $page.siteSettings.hero.subBody }}
        </p>
        <p class="lead">
          <Link
            class="btn btn-primary btn-lg"
            :to="$page.siteSettings.hero.actionHref"
            role="button"
          >
            {{ $page.siteSettings.hero.actionLabel }}
          </Link>
        </p>
      </div>
    </section>

    <section class="container mt-4">
      <h2 class="row m-0">
        Posts
      </h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12 p-2"
          v-for="edge of $page.allPost.edges"
          v-bind:key="edge.node.id"
        >
          <Link :to="`/post/${edge.node.id}`" class="link">
            <PostCard
              :title="edge.node.title"
              :image="edge.node.mainImage"
              :categories="edge.node.categories"
              :publishedAt="edge.node.publishedAt"
              :authorName="edge.node.author.name"
              :authorImage="edge.node.author.image"
              :authorId="edge.node.author.id"
            />
          </Link>
        </div>
      </div>
    </section>

    <section v-if="pending" class="container mt-5">
      <h2 class="row px-2 m-0">
        Anime
      </h2>
      <div class="row p-0">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 p-2"
          v-for="n in [...new Array(25)].map((_, i) => i)"
          :key="n"
        >
          <PosterCard loading />
        </div>
      </div>
    </section>

    <section v-else class="container mt-5">
      <h2 class="row px-2">
        Anime
      </h2>
      <div class="row p-0">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 p-2"
          v-for="media in allMedia"
          :key="media.id"
        >
          <Link class="link" :to="`/anime/${media.id}`">
            <PosterCard
              :src="media.coverImage.extraLarge"
              :title="media.title.english ?? media.title.native"
              :subtitle="String(media.seasonYear)"
            />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
</template>
