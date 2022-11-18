<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      activePath: this.$router.currentRoute.path,
    };
  },
};
</script>

<template>
  <!-- why? https://stackoverflow.com/questions/1417934/how-to-prevent-scrollbar-from-repositioning-web-page -->
  <div style="padding-left: calc(100vw - 100%);">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="position-sticky top-0 z-index-nav"
    >
      <b-container>
        <b-navbar-brand>
          <g-link class="text-white font-bold" to="/">
            {{ $static.metadata.siteName }}
          </g-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :active="activePath === '/'">
              <g-link class="text-inherit font-semi-bold" to="/">
                Home
              </g-link>
            </b-nav-item>

            <b-nav-item :active="activePath === '/post'">
              <g-link class="text-inherit font-semi-bold" to="/post">
                Posts
              </g-link>
            </b-nav-item>

            <b-nav-item :active="activePath === '/author'">
              <g-link class="text-inherit font-semi-bold" to="/author">
                Authors
              </g-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </b-container>
    </b-navbar>

    <slot />

    <footer class="container foot">
      <g-link class="link" to="https://www.chrisvouga.dev/">
        Made with ❤️ by Chris Vouga
      </g-link>
      <g-link class="link" to="https://animechrisvouga.sanity.studio/">
        Sanity Studio
      </g-link>
    </footer>
  </div>
</template>

<style scoped>
.z-index-nav {
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
  flex-direction: column;
  gap: 1rem;
}

.font-bold {
  font-weight: 900;
}

.font-semi-bold {
  font-weight: 700;
}

.text-inherit {
  color: inherit;
}
</style>
