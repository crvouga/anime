<script>
import { gql } from "graphql-request";
import PosterCard from "../components/PosterCard.vue";
import { animeClient } from "../anime-client";
export default {
  components: {
    PosterCard,
  },
  data() {
    return {
      error: null,
      data: null,
      pending: false,
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

<template>
  <Layout>
    <div class="container">
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
              :subtitle="media.seasonYear"
            />
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
