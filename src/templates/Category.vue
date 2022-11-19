<page-query>
query getCategory($id: ID) {
  category(id: $id) {
    id
    title
    posts {
      id
      title
      mainImage
      slug
      publishedAt
      author {
        id
        image
        name
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
    <main class="container text-center py-2">
      <div class="row">
        <div class="col-12">
          <b-breadcrumb>
            <BreadcrumbItem to="/">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/post">
              Posts
            </BreadcrumbItem>
            <BreadcrumbItem disabled>
              <div class="badge badge-primary">
                {{ $page.category.title }}
              </div>
            </BreadcrumbItem>
          </b-breadcrumb>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="h6 m-0 text-muted">
            Category
          </p>
          <div class="mt-2" />
          <p class="h5 bg-primary text-white d-inline px-2 py-1 rounded m-0">
            {{ $page.category.title }}
          </p>
        </div>
      </div>

      <div class="row mt-2">
        <div
          class="col-lg-4 col-md-6 col-12 p-2"
          v-for="post of $page.category.posts"
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
    </main>
  </Layout>
</template>
