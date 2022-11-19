<script>
/**
 *
 *
 *
 * This component is a hack because <g-link /> was not working in production
 *
 *
 *
 */
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
  <span class="cursor-pointer" @click.stop="clicked">
    <slot />
  </span>
</template>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
