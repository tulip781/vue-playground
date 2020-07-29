<template>
  <div class="home">
    <Slideshow/>
    <SearchBar :search="search" v-bind:books="filteredList"/>
    <ShopCard v-bind:books="data['allBooks']"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue';
import ShopCard from '@/components/ShopCard.vue';
import SearchBar from '@/components/SearchBar.vue';
export default {
  name: 'Home',
  props: ['data'],
  components: {
    Slideshow,
    ShopCard,
    SearchBar
  },
  computed: {
    filteredList() {
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  data(){
    return {
      search: ''
    }
  }

}
</script>
