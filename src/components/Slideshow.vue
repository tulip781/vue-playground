<template>
  <div class="carousel__wrapper">
    <h1 class="carousel__title">Screenplays. In print.</h1>
    <div class="flux">
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
          'fade',
      ],
    })
  }
</script>

<style scoped lang="scss">
.flux {
  position: relative;
  max-height: 50vh;
  overflow: hidden;
}
.carousel__title{
  position: absolute;
  top: 50%;
  right: 50%;
  z-index: 10;
  transform: translate(50%, -50%);
  color: white;
  background-color: black;
  padding: 5px 10px;
  font-size: 4vw;
}

.carousel__wrapper {
  position: relative;
}
</style>
