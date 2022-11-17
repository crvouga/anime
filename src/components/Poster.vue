<script>
import AspectRatio from "./AspectRatio.vue";

export default {
  components: {
    AspectRatio,
  },
  props: {
    src: String,
    loading: Boolean,
  },
};
</script>

<template>
  <b-skeleton-img v-if="loading" aspect="18:24" />
  <AspectRatio v-else w="18" h="24">
    <b-img-lazy alt="poster" class="object-cover w-100 h-100" :src="src" />
  </AspectRatio>
</template>

<style scoped>
.object-cover {
  object-fit: cover;
}
</style>
