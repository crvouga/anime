<page-query>
{
  anime {
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
}
</page-query>

<script setup>
import PosterCard from "../components/PosterCard.vue";
const allMedia = ($page) => $page.anime.Page.media;
</script>

<template>
  <Layout>
    <div class="container">
      <div class="row p-0">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 p-2"
          v-for="media in allMedia($page)"
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
