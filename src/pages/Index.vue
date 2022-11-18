<script>
import { gql } from "graphql-request";
import PosterCard from "../components/PosterCard.vue";
import { animeClient } from "../anime-client";
import { string } from "prop-types";
import AspectRatio from "../components/AspectRatio.vue";
export default {
  components: {
    PosterCard,
    AspectRatio,
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
      <h1 class="row px-2">
        Posts
      </h1>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12"
          v-for="edge of $page.allPost.edges"
          v-bind:key="edge.node.id"
        >
          <div>
            <AspectRatio w="16" h="9">
              <img class="w-100 h-100" :src="edge.node.mainImage" />
            </AspectRatio>
            <h5>
              {{ edge.node.title }}
            </h5>
            <h6>
              {{ edge.node.publishedAt }}
            </h6>
            <div class="container">
              <div class="row">
                <AspectRatio class="col-2" w="1" h="1">
                  <img class="w-100 h-100" :src="edge.node.author.image" />
                </AspectRatio>
                <p class="col-10">{{ edge.node.author.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="pending" class="container">
      <h1 class="row px-2">
        Anime
      </h1>
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

    <section v-else class="container">
      <h1 class="row px-2">
        Anime
      </h1>
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
