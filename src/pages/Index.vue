<script setup>
import PosterCard from "../components/PosterCard.vue";
</script>

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

<template>
  <Layout>
    <div class="container p-0">
      <div class="row p-0">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 p-2"
          v-for="media in $page.anime.Page.media"
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
