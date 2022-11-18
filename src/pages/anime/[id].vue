<script>
import { gql } from "graphql-request";
import { animeClient } from "../../anime-client";
import AspectRatio from "../../components/AspectRatio.vue";
import LoadingImage from "../../components/LoadingImage.vue";
import PosterCard from "../../components/PosterCard.vue";
import ReadMore from "../../components/ReadMore.vue";

export default {
  components: {
    AspectRatio,
    PosterCard,
    ReadMore,
    LoadingImage,
  },
  data() {
    return {
      data: null,
      error: null,
      pending: false,
    };
  },
  computed: {
    media() {
      return this.data?.Page.media[0];
    },
    bannerImage() {
      return this.media?.bannerImage ?? "";
    },
    coverImage() {
      return this.media?.coverImage?.extraLarge ?? "";
    },
    title() {
      return this.media?.title.english ?? this.media?.title.native;
    },
    description() {
      return this.media?.description;
    },
    genres() {
      return this.media?.genres;
    },
    relations() {
      return this.media?.relations.nodes;
    },
    dateRange($page) {
      const start = this.media?.startDate.year;
      const end = this.media?.endDate.year ?? "Current";
      if (start === end) {
        return start;
      }
      return `${start} to ${end}`;
    },
  },

  watch: {
    $route() {
      this.load();
    },
  },

  methods: {
    async load() {
      const query = gql`
        query GetAnime($id: Int) {
          Page {
            media(id: $id) {
              id
              bannerImage
              description
              coverImage {
                extraLarge
              }
              startDate {
                year
              }
              endDate {
                year
              }
              title {
                english
                native
              }
              episodes
              genres
              relations {
                nodes {
                  id
                  title {
                    english
                    native
                  }
                  coverImage {
                    extraLarge
                  }
                  startDate {
                    year
                  }
                }
              }
            }
          }
        }
      `;

      const variables = {
        id: parseInt(this.$route.params.id),
      };

      this.pending = true;
      const data = await animeClient.request(query, variables);
      this.data = data;
      this.pending = false;
    },
  },

  async mounted() {
    this.load();
  },
};
</script>

<template>
  <Layout>
    <main v-if="pending" class="container p-0">
      <b-skeleton-img aspect="21:9"> </b-skeleton-img>

      <div class="p-5 d-flex justify-content-center align-items-center">
        <b-spinner variant="primary" />
      </div>
    </main>
    <main v-else-if="data" class="container p-0">
      <LoadingImage :w="21" :h="9" :src="bannerImage || coverImage" />

      <section class="container">
        <h1 class="mb-0">{{ title }}</h1>
        <p class="h6 text-muted mb-0">{{ dateRange }}</p>
        <div class="d-flex genre-gap mt-1 flex-wrap">
          <b-badge
            pill
            variant="primary"
            v-for="genre in genres"
            v-bind:key="genre"
          >
            {{ genre }}
          </b-badge>
        </div>
        <ReadMore
          class="text-muted mt-2"
          :max-length="200"
          :content="description ?? ''"
        />
      </section>

      <section class="container mt-3">
        <h5>Related Titles</h5>
        <div class="d-flex overflow-x-scroll poster-gap">
          <div
            class="poster-container"
            v-for="relation in relations"
            v-bind:key="relation.id"
          >
            <g-link class="link" :to="`/anime/${relation.id}`">
              <PosterCard
                class="w-100"
                :src="relation.coverImage.extraLarge"
                :title="relation.title.english ?? relation.title.native"
                :subtitle="relation?.startDate.year"
              />
            </g-link>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<style scoped>
.genre-gap {
  gap: calc(0.33rem);
}
.object-cover {
  object-fit: cover;
}
.overflow-x-scroll {
  overflow-x: scroll;
}

.poster-container {
  max-width: 150px;
  min-width: 150px;
}
.poster-gap {
  gap: 0.5rem;
}
</style>
