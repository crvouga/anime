<script setup>
import AspectRatio from "./AspectRatio.vue";
import Poster from "./Poster.vue";

defineProps(["src", "title", "subtitle"]);
</script>

<template>
  <AspectRatio class="rounded border overflow-hidden" w="18" h="32">
    <Poster :src="src" />
    <div class="container pt-2">
      <div class="row">
        <h5 class="col-12 text-truncate">
          {{ title }}
        </h5>
        <h6 class="col-12 text-muted text-truncate">
          {{ subtitle }}
        </h6>
      </div>
    </div>
  </AspectRatio>
</template>
