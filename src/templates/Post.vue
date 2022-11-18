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
    <main class="container mt-2">
      <div class="row">
        <div class="col-12">
          <b-breadcrumb>
            <b-breadcrumb-item>
              <g-link class="link" to="/">
                Home
              </g-link>
            </b-breadcrumb-item>
            <b-breadcrumb-item>
              <g-link class="link" to="/post">
                Posts
              </g-link>
            </b-breadcrumb-item>
            <b-breadcrumb-item disabled class="text-truncate">
              {{ $page.post.title }}
            </b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6 border rounded p-0">
          <AspectRatio :w="16" :h="9">
            <img class="w-100 h-100" :src="$page.post.mainImage" />
          </AspectRatio>
          <div class="p-4 border-top">
            <h1>
              {{ $page.post.title }}
            </h1>
            <h6 class="text-muted">
              {{ new Date($page.post.publishedAt).toDateString() }}
            </h6>
            <div class="d-flex gap-1x3rem">
              <g-link
                v-for="category in $page.post.categories"
                v-bind:key="category.id"
                class="badge badge-primary badge-lg"
                :to="`/category/${category.id}`"
              >
                {{ category.title }}
              </g-link>
            </div>
            <g-link
              :to="`/author/${$page.post.author.id}`"
              class="link mt-2 d-flex align-items-center"
            >
              <b-avatar :src="$page.post.author.image" />
              <p class="ml-2 m-0 ">
                {{ $page.post.author.name }}
              </p>
            </g-link>
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
    }
  }
}

</page-query>

<style scoped>
.gap-1x3rem {
  gap: 0.333rem;
}
</style>
