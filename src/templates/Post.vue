<template>
  <Layout>
    <main>
      <pre>
      {{ JSON.stringify($page, null, 4) }}
      </pre>
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
