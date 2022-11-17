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
</style>
