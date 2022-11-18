<page-query>
{
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
    <main class="container mt-4">
      <h2 class="row m-0">
        Posts
      </h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12 p-2"
          v-for="edge of $page.allPost.edges"
          v-bind:key="edge.node.id"
        >
          <g-link :to="`/post/${edge.node.id}`" class="link">
            <PostCard
              :title="edge.node.title"
              :image="edge.node.mainImage"
              :categories="edge.node.categories"
              :publishedAt="edge.node.publishedAt"
              :authorName="edge.node.author.name"
              :authorImage="edge.node.author.image"
              :authorId="edge.node.author.id"
            />
          </g-link>
        </div>
      </div>
    </main>
  </Layout>
</template>
