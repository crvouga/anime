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
      }
    }
  }
}

</page-query>

<script setup>
import AspectRatio from "../components/AspectRatio.vue";
import ReadMore from "../components/ReadMore.vue";

/**
 *
 * @typedef Title
 * @type {object}
 * @prop english {string}
 * @prop native {string}
 *
 * @typedef Date
 * @type {object}
 * @prop year {number | null}
 *
 * @typedef Media
 * @type {object}
 * @prop {number} id
 * @prop {string} bannerImage
 * @prop {string} description
 * @prop {Title} title
 * @prop {Date} startDate
 * @prop {Date} endDate
 * @prop {number} episodes
 * @prop {string[]} genres
 *
 */

/**
 * @return {Media}
 */
const media = ($page) => $page.anime.Page.media[0];
const bannerImage = ($page) => media($page).bannerImage ?? "";
const title = ($page) =>
  media($page).title.english ?? media($page).title.native;
const startYear = ($page) => media($page).startDate.year;
const endYear = ($page) => media($page).endDate.year ?? "Current";
const dateRange = ($page) => {
  return `${startYear($page)} to ${endYear($page)}`;
};
const description = ($page) => media($page).description;
const genres = ($page) => media($page).genres;
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
        <div class="d-flex gap-2 mt-1">
          <div
            class="badge badge-pill badge-primary"
            v-for="genre in genres($page)"
            v-bind:key="genre"
          >
            {{ genre }}
          </div>
        </div>
        <ReadMore class="text-muted mt-2" :content="description($page)" />
      </section>
    </main>
  </Layout>
</template>

<style scoped>
.gap-2 {
  gap: calc(0.25rem * 2);
}
.object-cover {
  object-fit: cover;
}
</style>
