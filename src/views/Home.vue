<template>
  <div class="home">
    <Slideshow/>
    <ShopCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue';
import ShopCard from '@/components/ShopCard.vue';

export default {
  name: 'Home',
  components: {
    Slideshow,
    ShopCard
  }
}
</script>
