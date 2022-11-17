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
    <button
      class="btn btn-primary btn-sm"
      style="margin:auto"
      @click="isCollapsed = !isCollapsed"
    >
      {{ isCollapsed ? "Show More" : "Show Less" }}
    </button>
  </div>
</template>
