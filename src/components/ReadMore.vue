<script setup>
import { computed, ref } from "vue";

defineProps({
  content: String,
  maxLength: Number,
});
const isCollapsed = ref(true);
</script>

<template>
  <div>
    <p
      class="m-0"
      v-if="isCollapsed"
      v-html="`${content.slice(0, maxLength)}...`"
    ></p>
    <p class="m-0" v-else v-html="content"></p>
    <b-button
      v-if="content.length > maxLength"
      variant="primary"
      size="sm"
      class="mt-1 mx-auto d-block"
      style="margin:auto"
      @click="isCollapsed = !isCollapsed"
    >
      <b-icon-chevron-down v-if="isCollapsed" />
      <b-icon-chevron-up v-else />
      {{ isCollapsed ? "Show More" : "Show Less" }}
    </b-button>
  </div>
</template>
