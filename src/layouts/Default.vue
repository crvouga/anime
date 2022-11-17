<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <div>
    <header class="container py-2">
      <strong class="row align-items-center">
        <g-link class="h2 col" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>

    <slot />
  </div>
</template>

<style scoped>
.logo {
  font-weight: 900;
}
</style>
