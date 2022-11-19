<script>
export default {
  props: {
    to: {
      type: String,
    },
  },
};
</script>

<template>
  <b-breadcrumb-item :to="to" router-component-name="g-link">
    <slot />
  </b-breadcrumb-item>
</template>
