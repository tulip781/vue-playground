<template>
  <div class="flux">
    <h1 class="title">{{title}}</h1>
    <vue-flux
      :options="options"
      :images="images"
      :transitions="transitions"
    >
      <template v-slot:preloader>
          <flux-preloader />
      </template>
    </vue-flux>
  </div>
</template>

<script>
import { VueFlux, FluxPreloader } from 'vue-flux';
  export default {
    name: 'Slideshow',
    components: {
      VueFlux,
      FluxPreloader,
    },
    props: {
      title: String
    },
    data: () => ({
      options: {
          allowFullscreen: false,
          allowToSkipTransition: true,
          autohideTime: 2500,
          autoplay: true,
          bindKeys: false,
          delay: 3000,
          enableGestures: false,
          infinite: true,
          lazyLoad: true,
          lazyLoadAfter: 3,
      },
      images: [ '/images/love.jpg', '/images/space.jpg', '/images/lost.jpg' ],
      transitions: [
          'slide',
      ],
    })
  }
</script>

<style scoped lang="scss">
.flux {
  position: relative;
}
.title{
  position: absolute;
  z-index: 10;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
