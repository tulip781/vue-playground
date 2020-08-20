<template>
  <div class="lander__wrapper">
    <vue-flux :options="options" :images="bookCovers" :transitions="transitions" >
      <template v-slot:preloader>
          <flux-preloader />
      </template>
    </vue-flux>
    <div class="lander_featured" v-for="book in featuredBooks" :key="book.id" :style="{ backgroundImage: 'url(' + book.image2.url + ')' }">
    </div>

    <div class="lander_featured" ref="bg" v-for="blog in blogs" :key="blog.id" :style="{ backgroundImage: 'url(' + blog.coverimage.url + ')' }">
      <h1>{{blog.featuredTitle}}</h1>
      <h3>{{blog.featuredTextMini}}</h3>
    </div>
    <div class="lander_featured">

    </div>
  </div>
</template>

<script>
import { VueFlux, FluxPreloader } from 'vue-flux';
  export default {
    name: 'Lander',
    components: {
      VueFlux,
      FluxPreloader,
    },
    props: [ 'blogs', 'featuredBooks' ],
    computed: {
      bookCovers: function(){
        let covers;
        this.featuredBooks.forEach((book) => {
          console.log(book)
          // covers.push(book.image2.url)
        })
        return covers;
      }
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
      transitions: [
          'fade',
      ],
    })

  }
</script>

<style scoped lang="scss">

.lander__wrapper {
  position: relative;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
  margin-top: 20px;

  h1 {
    margin: 0;
  }
}

.lander_featured {
  height: 100vh;
  width: 100vw;
  background-image: url('/images/lost.jpg');
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;
}
</style>
