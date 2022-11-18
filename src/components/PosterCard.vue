<script>
import AspectRatio from "./AspectRatio.vue";
import Poster from "./Poster.vue";

export default {
  components: {
    AspectRatio,
    Poster,
  },
  props: {
    src: String,
    title: String,
    subtitle: [String, Number],
    loading: Boolean,
  },
};
</script>

<template>
  <AspectRatio class="rounded border overflow-hidden" :w="18" :h="32">
    <Poster :loading="loading" :src="src" />
    <div class="p-2">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton class="mb-3" width="100%"></b-skeleton>
          <b-skeleton width="50%"></b-skeleton>
        </template>
        <h5 class="text-truncate">
          {{ title }}
        </h5>
        <h6 class="text-muted text-truncate">
          {{ subtitle }}
        </h6>
      </b-skeleton-wrapper>
    </div>
  </AspectRatio>
</template>
