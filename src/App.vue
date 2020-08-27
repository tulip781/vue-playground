<template>
  <div id="app">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      Something bad happened!
    </div>
    <div v-else>
      <Nav />
      <SideBar />
      <transition name="fade" mode="out-in">
        <router-view :data="data"/>
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import { request } from "./api/datocms";
  import SideBar from '@/components/SideBar.vue';
  import Footer from '@/components/Footer.vue';
  const HOMEPAGE_QUERY = `query MyQuery {
    allBooks(orderBy: _createdAt_ASC) {
      description
      director
      title
      id
      image {
        url
      }
      image2 {
        url
      }
    }
    allBlogposts(orderBy: _createdAt_ASC) {
      id
      featuredTextMini
      featuredTitle
      textBody
      coverimage {
        url
      }
    }
  }`;
  export default {
  name: 'App',
  data: () => ({
    data: null,
    error: null,
    loading: true,
  }),
  components: {
    Nav,
    SideBar,
    Footer
  },
  async mounted() {
    try {
      this.data = await request({
        query: HOMEPAGE_QUERY
      });
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  }
}

</script>

<style lang="scss">
@font-face {
  font-family: "FavoritPro-Regular";
  src: url(./assets/FavoritPro-Regular.otf);
}

#app {
  font-family: FavoritPro-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}



</style>
