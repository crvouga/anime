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
      // this.$router.push(this.to);
    },
  },
};
</script>

<template>
  <g-link class="cursor-pointer" :to="to" @click.stop="clicked">
    <slot />
  </g-link>
</template>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
