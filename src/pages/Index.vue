<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="h1">Hello, world!</h1>

    <button class="btn btn-primary" @click="count++">
      Clicked {{ count }}
    </button>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
