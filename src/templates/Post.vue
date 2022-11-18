<script>
import AspectRatio from "../components/AspectRatio";

export default {
  components: {
    AspectRatio,
  },
};
</script>
<template>
  <Layout>
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6 border rounded p-0">
          <AspectRatio w="16" h="9">
            <img class="w-100 h-100" :src="$page.post.mainImage" />
          </AspectRatio>
          <div class="p-4 border-top">
            <h1>
              {{ $page.post.title }}
            </h1>
            <div class="d-flex category-gap">
              <div
                v-for="category in $page.post.categories"
                v-bind:key="category.id"
                class="badge badge-primary"
              >
                {{ category.title }}
              </div>
            </div>
            <div>
              <b-avatar :src="$page.post.author.image" />
              <p class="d-block">
                {{ $page.post.author.name }}
              </p>
            </div>
            <h6>
              {{ new Date($page.post.publishedAt).toDateString() }}
            </h6>
          </div>
          <div class="border-top p-4">
            <p>
              {{ $page.post.body }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query getPost($id: ID!) {
  post(id: $id) {
    id
    title
    mainImage
    slug
    body
    publishedAt
    categories {
      id
      title
    }
    author {
      id
      name
      image
      slug
      bio
    }
  }
}

</page-query>

<style scoped>
.category-gap {
  gap: 0.333rem;
}
</style>
