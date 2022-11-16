<template>
  <div class="container">
    <header class="row align-items-center py-4">
      <strong class="col-9">
        <g-link class="h2" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>

      <nav class="col-3 container">
        <div class="row">
          <g-link class="col-6" to="/">Home</g-link>
          <g-link class="col-6" to="/about/">About</g-link>
        </div>
      </nav>
    </header>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
