<template>
  <div id="app">
    <Nav />
    <SideBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import SideBar from '@/components/SideBar.vue';
  export default {
  name: 'App',
    components: {
      Nav,
      SideBar
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
