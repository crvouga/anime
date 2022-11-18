<script>
import { gql } from "graphql-request";
import PosterCard from "../components/PosterCard.vue";
import { animeClient } from "../anime-client";
import AspectRatio from "../components/AspectRatio.vue";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PosterCard,
    AspectRatio,
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
  allPost{
    edges{
      node{
        id
        title
        publishedAt
        mainImage
        author{
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
    <section class="container">
      <h2 class="row px-2">
        Posts
      </h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12"
          v-for="edge of $page.allPost.edges"
          v-bind:key="edge.node.id"
        >
          <PostCard
            :title="edge.node.title"
            :image="edge.node.mainImage"
            :publishedAt="edge.node.publishedAt"
            :authorName="edge.node.author.name"
            :authorImage="edge.node.author.image"
          />
        </div>
      </div>
    </section>

    <section v-if="pending" class="container mt-5">
      <h2 class="row px-2">
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
          <g-link class="link" :to="`/anime/${media.id}`">
            <PosterCard
              :src="media.coverImage.extraLarge"
              :title="media.title.english ?? media.title.native"
              :subtitle="String(media.seasonYear)"
            />
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>
