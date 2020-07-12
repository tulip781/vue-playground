<template>
  <div class="home">
    <Nav/>
    <Slideshow/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
import Slideshow from '@/components/Slideshow.vue';

export default {
  name: 'Home',
  components: {
    Slideshow,
    Nav
  }
}
</script>
