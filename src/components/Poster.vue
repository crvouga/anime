<script>
import AspectRatio from "./AspectRatio.vue";
import LoadingImage from "./LoadingImage.vue";

export default {
  components: {
    AspectRatio,
    LoadingImage,
  },
  props: {
    src: String,
    loading: Boolean,
  },
};
</script>

<template>
  <b-skeleton-img v-if="loading" aspect="18:24" />
  <LoadingImage v-else :w="18" :h="24" :src="src" />
</template>

<style scoped>
.object-cover {
  object-fit: cover;
}
</style>
