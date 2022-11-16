<script setup></script>

<page-query>
{
  anime {
    Page {
      media {
        id
        bannerImage
        title {
          english
        }
      }
    }
  }
}
</page-query>

<template>
  <Layout>
    <main class="container">
      <div class="row pb-4">
        <div
          class="col-lg-4 col-md-6 col-12 aspect-ratio-1x1"
          v-for="media in $page.anime.Page.media"
          :key="media.id"
        >
          <div class="card aspect-ratio-1x1">
            <img
              class="card-img-top aspect-ratio-16x9 object-cover"
              :src="media.bannerImage || ''"
              alt="banner image"
            />

            <div class="card-body">
              <h5 class="card-title">
                {{ media.title.english }}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted"></h6>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<style>
.aspect-ratio-1x1 {
  aspect-ratio: calc(1 / 1);
}
.aspect-ratio-16x9 {
  aspect-ratio: calc(16 / 9);
}
.object-cover {
  object-fit: cover;
}
</style>
