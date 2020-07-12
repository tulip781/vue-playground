<template>
  <div class="home">

    <Slideshow/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue';

export default {
  name: 'Home',
  components: {
    Slideshow
  }
}
</script>
