<script setup>
defineProps(["w", "h"]);
</script>

<template>
  <div class="position-relative">
    <svg
      width="100%"
      height="100%"
      :viewBox="['0', '0', String(w), String(h)].join(' ')"
    ></svg>
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
