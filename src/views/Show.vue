<template>
  <div class="showcontainer">
    <div class="cardShow">
      <h1 class="showtitle">{{bookShowTitle.title}}</h1>
      <h3 class="showdirector">{{bookShowTitle.director}}</h3>
      <p class="showbody">{{bookShowTitle.description}}</p>
    </div>
    <img v-bind:src="bookShowTitle.image.url" alt="">
    <h3 class="show__recomended">Recomended Screenplays</h3>
    <ShopCard class="show__reccomendlist" :books="bookList"></ShopCard>
  </div>

</template>

<script>
// @ is an alias to /src
import ShopCard from '@/components/ShopCard.vue';
export default {
  name: 'Show',
  data(){
    return {
      bookShowTitle: {},
      bookList: []
    }
  },
  components: {
    ShopCard,
  },
  props: ['data'],
  beforeMount(){
    if (this.data) {
      const bookId = this.$route.params.id;
      this.bookList = this.data['allBooks'].slice(0,5);
      this.data['allBooks'].forEach(book => {
        if (book.id === bookId) {
          this.bookShowTitle = book;
          return
        }
      });
    }
  }
}

</script>

<style lang="scss">
.cardShow {
  width: 50%;
  margin-top: 60px;
  width: 50%;
}
.showcontainer{
  margin-top: 30px;
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  img {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .showcontainer{
    flex-direction: column-reverse;
    align-items: center;

  img {
    width: 100%;
  }

  }
  .cardShow {
    width: 100%;
    font-size: 1vw;
  }
}

.showtitle {
  font-size: 4vw;
}

.showdirector {
  font-size: 1vw;
}

.showbody {
  width: 50%;
  margin: auto;
  font-size: 1vw;
}

.show__reccomendlist {
  margin: auto;
  width: 80%;
  justify-items: center;
}

.show__recomended {
  width: 100%;
  text-align: left;
  padding-left: 10px;
  font-size: 2vw;
}
</style>
