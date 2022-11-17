<script setup>
import AspectRatio from "./AspectRatio.vue";
defineProps(["src"]);
</script>

<template>
  <AspectRatio w="18" h="24">
    <b-img-lazy alt="poster" class="object-cover w-100 h-100" :src="src" />
  </AspectRatio>
</template>

<style scoped>
.object-cover {
  object-fit: cover;
}
</style>
