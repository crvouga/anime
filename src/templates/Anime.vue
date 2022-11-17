<script setup>
import AspectRatio from "../components/AspectRatio.vue";
import ReadMore from "../components/ReadMore.vue";

const media = ($page) => $page.anime.Page.media[0];
const bannerImage = ($page) => media($page)?.bannerImage ?? "";
const title = ($page) =>
  media($page).title.english ?? media($page).title.native;
const startYear = ($page) => media($page).startDate.year;
const description = ($page) => media($page).description;
</script>

<template>
  <Layout>
    <main class="container p-0">
      <AspectRatio w="21" h="9">
        <img class="w-100 h-100 object-cover" :src="bannerImage($page)" />
      </AspectRatio>
      <section class="container">
        <h1 class="mb-0">{{ title($page) }}</h1>
        <p class="h6 text-muted">{{ startYear($page) }}</p>
        <ReadMore class="text-muted" :content="description($page)" />
      </section>
    </main>
  </Layout>
</template>

<style scoped>
.object-cover {
  object-fit: cover;
}
</style>

<page-query>
query ($id: Int) {
  anime {
    Page {
      media(id: $id) {
        id
        bannerImage
        description
        startDate {
          year
        }
        title {
          english
          native
        }
      }
    }
  }
}
</page-query>
