<script>
import AspectRatio from "./AspectRatio.vue";
import LoadingImage from "./LoadingImage.vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array, // of { id: String, title: String }
      required: true,
    },
  },
  components: { AspectRatio, LoadingImage },
};
</script>

<template>
  <AspectRatio :w="1" :h="1" class="rounded border">
    <g-link
      :to="`/post/${id}`"
      class="w-100 h-100 d-flex flex-column link text-decoration-none"
    >
      <LoadingImage :w="16" :h="9" :src="image" />
      <div class="border-top p-3 flex-1 d-flex flex-column">
        <h5 class="text-truncate mb-0">
          {{ title }}
        </h5>
        <h6 class="text-muted mb-2">
          {{ new Date(publishedAt).toDateString() }}
        </h6>
        <div class="d-flex badge-gap">
          <g-link
            v-for="category in categories"
            v-bind:key="category.id"
            class="link badge badge-primary"
            :to="`/category/${category.id}`"
          >
            {{ category.title }}
          </g-link>
        </div>
        <div class="flex-1"></div>
        <g-link
          :to="`/author/${authorId}`"
          class="link d-flex align-items-center text-decoration-none"
        >
          <b-avatar class="mr-2" :src="authorImage" />
          <p class="m-0">{{ authorName }}</p>
        </g-link>
      </div>
    </g-link>
  </AspectRatio>
</template>

<style scoped>
.object-cover {
  object-fit: cover;
}
.flex-1 {
  flex: 1;
}
.margin-top-auto {
  margin-top: auto;
}

.badge-gap {
  gap: 0.333rem;
}
.text-decoration-none {
  text-decoration: none;
}
</style>
