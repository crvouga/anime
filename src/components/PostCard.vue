<script>
import AspectRatio from "./AspectRatio.vue";
import Link from "./Link.vue";

export default {
  props: {
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
  components: {
    AspectRatio,
    Link,
  },
};
</script>

<template>
  <AspectRatio :w="7" :h="8" class="rounded border">
    <div class="d-flex flex-column w-100 h-100">
      <AspectRatio class="w-100" :w="16" :h="9">
        <b-img-lazy class="w-100 h-100 object-cover" :src="image" />
      </AspectRatio>
      <div class="border-top p-3 h-100 d-flex flex-column flex-1">
        <h5 class="text-truncate mb-0">
          {{ title }}
        </h5>
        <h6 class="text-muted mb-2">
          {{ new Date(publishedAt).toDateString() }}
        </h6>
        <div class="d-flex badge-gap flex-wrap">
          <Link
            v-for="category in categories"
            v-bind:key="category.id"
            class="link badge badge-primary"
            :to="`/category/${category.id}`"
          >
            {{ category.title }}
          </Link>
        </div>
        <Link
          :to="`/author/${authorId}`"
          class="link d-flex align-items-center text-decoration-none margin-top-auto"
        >
          <b-avatar class="mr-2" :src="authorImage" />
          <p class="m-0">{{ authorName }}</p>
        </Link>
      </div>
    </div>
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
