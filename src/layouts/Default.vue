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
  methods: {
    push(path) {
      if (this.activePath === path) {
        // pushing a route in this condition throws an error in the console
        return;
      }

      this.$router.push(path);
    },
  },
};
</script>

<template>
  <div class="h-min-screen d-flex flex-column">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="scrollbar-jitter-fix position-sticky top-0 z-index-nav font-semi-bold"
    >
      <div class="container">
        <b-navbar-brand class="ml-3 font-weight-bold" @click="push('/')">
          {{ $static.metadata.siteName }}
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto text-center">
            <b-nav-item :active="activePath === '/'" @click="push('/')">
              Home
            </b-nav-item>

            <b-nav-item :active="activePath === '/post'" @click="push('/post')">
              Posts
            </b-nav-item>

            <b-nav-item
              :active="activePath === '/author'"
              @click="push('/author')"
            >
              Authors
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </div>
    </b-navbar>

    <div class="flex-1 scrollbar-jitter-fix">
      <slot />
    </div>

    <footer class=" bg-dark mt-5 scrollbar-jitter-fix">
      <div
        class="container d-flex flex-column justify-content-center align-items-center py-5 font-weight-bold"
      >
        <g-link class="link" to="https://animechrisvouga.sanity.studio/">
          Sanity Studio
        </g-link>
        <g-link class="link mt-4" to="https://www.chrisvouga.dev/">
          Made with ❤️ by Chris Vouga
        </g-link>
      </div>
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

.font-weight-bold {
  font-weight: bold;
}

.h-min-screen {
  min-height: 100vh;
}

.flex-1 {
  flex: 1;
}

/* why? https://stackoverflow.com/questions/1417934/how-to-prevent-scrollbar-from-repositioning-web-page */
.scrollbar-jitter-fix {
  padding-left: calc(100vw - 100%);
}
</style>
