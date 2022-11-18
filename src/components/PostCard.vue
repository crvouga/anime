<script>
import { formatFromNow } from "../utils/format-from-now";
import AspectRatio from "./AspectRatio.vue";

export default {
  props: {
    image: String,
    title: String,
    publishedAt: String,
    authorImage: String,
    authorName: String,
  },
  methods: {
    formatFromNow(date) {
      return formatFromNow(date);
    },
  },
  components: { AspectRatio },
};
</script>

<template>
  <AspectRatio w="1" h="1" class="rounded border">
    <AspectRatio w="16" h="9">
      <img class="w-100 h-100 object-cover" :src="image" />
    </AspectRatio>
    <div class="border-top p-3">
      <h5 class="text-truncate mb-0">
        {{ title }}
      </h5>
      <h6 class="text-muted mb-2">
        {{ formatFromNow(publishedAt) }}
      </h6>
      <div class="d-flex align-items-center">
        <b-avatar class="mr-2" :src="authorImage" />
        <p class="m-0">{{ authorName }}</p>
      </div>
    </div>
  </AspectRatio>
</template>

<style scoped>
.object-cover {
  object-fit: cover;
}
</style>
