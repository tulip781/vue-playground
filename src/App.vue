<template>
  <div id="app">
    <Nav/>
    <Slideshow title="Testing out the props"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Ollie First attempt at vue"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';
import Slideshow from './components/Slideshow.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
    Slideshow
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
