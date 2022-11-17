<page-query>
query($id: Int) {
  anime {
    Page {
      media(id: $id) {
        id
        bannerImage
        description
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
}

</page-query>

<script setup>
import AspectRatio from "../components/AspectRatio.vue";
import PosterCard from "../components/PosterCard.vue";
import ReadMore from "../components/ReadMore.vue";

const media = ($page) => $page.anime.Page.media[0];
const bannerImage = ($page) => media($page).bannerImage ?? "";
const title = ($page) =>
  media($page).title.english ?? media($page).title.native;
const startYear = ($page) => media($page).startDate.year;
const endYear = ($page) => media($page).endDate.year ?? "Current";
const dateRange = ($page) => {
  const start = startYear($page);
  const end = endYear($page);
  if (start === end) {
    return start;
  }
  return `${start} to ${end}`;
};
const description = ($page) => media($page).description;
const genres = ($page) => media($page).genres;
const relations = ($page) => media($page).relations.nodes;
</script>

<template>
  <Layout>
    <main class="container p-0">
      <AspectRatio w="21" h="9" class="bg-dark">
        <img class="w-100 h-100 object-cover" :src="bannerImage($page)" />
      </AspectRatio>
      <section class="container">
        <h1 class="mb-0">{{ title($page) }}</h1>
        <p class="h6 text-muted mb-0">{{ dateRange($page) }}</p>
        <div class="d-flex genre-gap mt-1 flex-wrap">
          <b-badge
            pill
            variant="primary"
            v-for="genre in genres($page)"
            v-bind:key="genre"
          >
            {{ genre }}
          </b-badge>
        </div>
        <ReadMore
          class="text-muted mt-2"
          :max-length="200"
          :content="description($page)"
        />
      </section>

      <section class="container mt-3">
        <h5>
          Related Titles
        </h5>
        <div class="d-flex overflow-x-scroll poster-gap">
          <div
            class="poster-container"
            v-for="relation in relations($page)"
            v-bind:key="relation.id"
          >
            <g-link class="link" :to="`/anime/${relation.id}`">
              <PosterCard
                class="w-100"
                :src="relation.coverImage.extraLarge"
                :title="relation.title.english ?? relation.title.native"
                :subtitle="relation.startDate.year"
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
