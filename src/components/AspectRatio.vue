<script>
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
  },
  computed: {
    viewBox() {
      return [0, 0, this.w, this.h].join(" ");
    },
  },
};
</script>

<template>
  <div class="position-relative">
    <svg width="100%" height="100%" :viewBox="viewBox"></svg>
    <div class="position-absolute w-100 h-100 top-0 left-0">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.top-0 {
  top: 0;
}
.bottom-0 {
  top: 0;
}
</style>
