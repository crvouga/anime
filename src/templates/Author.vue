<page-query>
query getAuthor($id: ID) {
  author(id: $id) {
    id
    name
    image
    slug
    bio
    posts {
      id
      title
      mainImage
      slug
      publishedAt
      body
      author {
        id
        name
        image
      }
      categories {
        id
        title
      }
    }
  }
}
</page-query>

<script>
import PostCard from "../components/PostCard";

export default {
  components: {
    PostCard,
  },
};
</script>

<template>
  <Layout>
    <main class="container mt-2">
      <div class="row">
        <div class="col-12">
          <b-breadcrumb>
            <BreadcrumbItem to="/">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/author">
              Authors
            </BreadcrumbItem>
            <BreadcrumbItem disabled>
              {{ $page.author.name }}
            </BreadcrumbItem>
          </b-breadcrumb>
        </div>
      </div>

      <div class="row justify-content-center">
        <div
          class="col-sm-10 col-md-8 col-lg-6 px-4 d-flex justify-content-center align-items-center flex-column"
        >
          <b-avatar class="avatar-size" :src="$page.author.image" />

          <h1 class="mt-2">
            {{ $page.author.name }}
          </h1>

          <p class="h5 m-0 text-muted">
            {{ $page.author.bio }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-8 container">
          <div class="row justify-content-center">
            <div class="col-12 mt-4">
              <h2 class="m-0 text-center">
                Posts
              </h2>
            </div>
            <div
              class="col-lg-6 col-md-6 col-12 p-2"
              v-for="post in $page.author.posts"
              v-bind:key="post.id"
            >
              <Link :to="`/post/${post.id}`" class="link">
                <PostCard
                  :title="post.title"
                  :image="post.mainImage"
                  :categories="post.categories"
                  :publishedAt="post.publishedAt"
                  :authorId="post.author.id"
                  :authorName="post.author.name"
                  :authorImage="post.author.image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<style scoped>
.avatar-size {
  width: 8rem;
  height: 8rem;
}
</style>
