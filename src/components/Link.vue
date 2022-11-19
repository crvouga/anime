<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    clicked() {
      this.$router.push(this.to);
    },
  },
};
</script>

<template>
  <span class="cursor-pointer" @click="clicked">
    <slot />
  </span>
</template>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
