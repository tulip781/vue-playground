<template>
  <div class="lander__wrapper">

    <div class="lander_featured" ref="bg" v-for="blog in blogs" :key="blog.id">

    </div>
    <div class="lander_featured">

    </div>
    <div class="lander_featured">

    </div>
  </div>
</template>

<script>

  export default {
    name: 'Lander',
    props: [ 'blogs' ],
    beforeMount() {
      // const imgs = ['/images/lost.jpg', '/images/space.jpg', '/images/ml.jpg']

     console.log(this.$refs);

      // forEach((bg) => {
      //   console.log(bg);
      //   bg.style.backgroundImage = `url(${imgs.pop})`;
      // })
    }

  }
</script>

<style scoped lang="scss">

.lander__wrapper {
  position: relative;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
  margin-top: 20px;
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
