<template>
  <div id="app">
    <Nav />
    <SideBar />
    <div id="nav">
      <router-link :to="'home'">Home</router-link>
    </div>
    <transition name ="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
