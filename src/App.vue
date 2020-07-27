<template>
  <div id="app">
    <Nav />
    <SideBar />
    <transition name="fade" mode="out-in">
      <router-view :data="data"/>
    </transition>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import { request } from "./api/datocms";
  import SideBar from '@/components/SideBar.vue';
  const HOMEPAGE_QUERY = `query MyQuery {
    allBooks {
      director
      title
      description
      image {
        url
      }
      id
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
    SideBar
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
}

body {
  padding: 0;
  margin: 0;
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
