<template>
  <Layout>
    <main class="root">
      <h1 class="title text-primary">
        404
      </h1>
      <Link to="/" class="btn btn-primary">
        <b-icon-house-fill />
        Go Home
      </Link>
    </main>
  </Layout>
</template>
<style scoped>
.root {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9rem 2rem;
}

.title {
  font-weight: 900;
  font-size: 4rem;
}
</style>
