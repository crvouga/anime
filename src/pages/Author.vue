<page-query>
{
  allAuthor {
    edges {
      node {
        id
        name
        image
        slug
        bio
      }
    }
  }
}

</page-query>
<script>
import PostCard from "../components/PostCard.vue";
import AspectRatio from "../components/AspectRatio.vue";

export default {
  components: {
    PostCard,
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
            <BreadcrumbItem to="/">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem>
              Authors
            </BreadcrumbItem>
          </b-breadcrumb>
        </div>
      </div>

      <h2 class="row m-0 text-center d-block">
        Authors
      </h2>
      <div class="row justify-content-center">
        <div
          class="col-lg-3 col-md-4 col-12 p-2"
          v-for="edge of $page.allAuthor.edges"
          v-bind:key="edge.node.id"
        >
          <Link :to="`/author/${edge.node.id}`" class="link">
            <div
              class="rounded border d-flex align-items-center justify-content-center flex-column w-100 p-4"
            >
              <b-avatar class="avatar-size" :src="edge.node.image" />
              <h3 class="mt-2">
                {{ edge.node.name }}
              </h3>
              <p class="text-muted text-truncate">
                {{ edge.node.bio }}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  </Layout>
</template>

<style scoped>
.avatar-size {
  width: 9rem;
  height: 9rem;
}
</style>
