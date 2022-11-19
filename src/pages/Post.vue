<page-query>
{
  allCategory {
    edges {
      node {
        id
        title
      }
    }
  }
  allPost {
    edges {
      node {
        id
        title
        slug
        categories {
          id
          title
        }
        publishedAt
        mainImage
        author {
          id
          image
          name
        }
      }
    }
  }
}
</page-query>
<script>
import PostCard from "../components/PostCard.vue";

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
            <BreadcrumbItem>
              Posts
            </BreadcrumbItem>
          </b-breadcrumb>
        </div>
      </div>

      <h2 class="row d-block m-0 text-center">
        Categories
      </h2>
      <div class="row mt-2 justify-content-center">
        <div
          class="col-12 d-flex flex-wrap badge-gap justify-content-center w-100"
        >
          <Link
            :to="`/category/${edge.node.id}`"
            class="link"
            v-for="edge of $page.allCategory.edges"
            v-bind:key="edge.node.id"
          >
            <div class="badge badge-primary badge-size">
              {{ edge.node.title }}
            </div>
          </Link>
        </div>
      </div>

      <h2 class="row m-0 d-block mt-4 text-center">
        Posts
      </h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12 p-2"
          v-for="edge of $page.allPost.edges"
          v-bind:key="edge.node.id"
        >
          <Link :to="`/post/${edge.node.id}`" class="link">
            <PostCard
              :title="edge.node.title"
              :image="edge.node.mainImage"
              :categories="edge.node.categories"
              :publishedAt="edge.node.publishedAt"
              :authorName="edge.node.author.name"
              :authorImage="edge.node.author.image"
              :authorId="edge.node.author.id"
            />
          </Link>
        </div>
      </div>
    </main>
  </Layout>
</template>

<style scoped>
.overflow-x-scroll {
  overflow-x: scroll;
}

.badge-gap {
  gap: 0.5rem;
}

.badge-size {
  font-size: 1.25rem;
}
</style>
