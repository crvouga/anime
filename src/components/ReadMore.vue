<script setup>
import { computed, ref } from "vue";

const props = defineProps(["content"]);
const isCollapsed = ref(true);
</script>

<template>
  <div>
    <p
      class="m-0"
      v-if="isCollapsed"
      v-html="`${content.slice(0, 200)}...`"
    ></p>
    <p class="m-0" v-else v-html="content"></p>
    <b-button
      variant="link"
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
