<template>
  <div>
    <div class="cardShow">
      <h1>{{bookShowTitle.title}}</h1>
      <h1>{{bookShowTitle.director}}</h1>
      <h1>{{bookShowTitle.description}}</h1>
      <img v-bind:src="bookShowTitle.image.url" alt="">
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Show',
  data(){
    return {
      bookShowTitle: {}
    }
  },
  components: {
  },
  props: ['data'],
  beforeMount(){
    if (this.data) {
      const bookId = this.$route.params.id;
      this.data['allBooks'].forEach(book => {
        if (book.id === bookId) {
          this.bookShowTitle = book;
          console.log(book.image.url);
          return
        }
      });
    }
  }
}

</script>

<style lang="scss">
.cardShow {
  margin-top: 60px;
  width: 50%;
  img {
    width: 100%;
  }
}
</style>
