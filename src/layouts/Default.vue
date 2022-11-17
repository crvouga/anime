<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <div>
    <nav class="nav position-sticky top-0 bg-white z-index-100">
      <div class="container py-2">
        <g-link class="logo h3 m-0" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </div>
    </nav>

    <slot />

    <footer class="container foot">
      <g-link class="link" to="https://www.chrisvouga.dev/">
        Made with ❤️ by Chris Vouga
      </g-link>
    </footer>
  </div>
</template>

<style scoped>
.z-index-100 {
  z-index: 100;
}
.logo {
  font-weight: 900;
}
.top-0 {
  top: 0;
}

.foot {
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
