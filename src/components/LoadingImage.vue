<script>
import AspectRatio from "./AspectRatio.vue";

export default {
  props: {
    w: {
      type: Number,
      required: true,
    },
    h: {
      type: Number,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    loaded() {
      this.loading = false;
    },
  },
  components: { AspectRatio },
};
</script>

<template>
  <AspectRatio :w="w" :h="h">
    <div
      v-if="loading"
      class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center"
    >
      <b-skeleton class="w-100 h-100" />
    </div>
    <img
      @load="loaded"
      class="w-100 h-100 object-cover"
      :class="{ 'opacity-0': loading }"
      :src="src"
    />
  </AspectRatio>
</template>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.object-cover {
  object-fit: cover;
}
.top-0 {
  top: 0;
}

.left-0 {
  top: 0;
}
</style>
