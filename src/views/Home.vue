<template>
  <div class="home">
    <Slideshow/>
    <SearchBar :search="search" v-bind:books="filteredList"/>
    <ShopCard v-bind:books="filteredList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue';
import ShopCard from '@/components/ShopCard.vue';
import SearchBar from '@/components/SearchBar.vue';
export default {
  name: 'Home',
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
      search: '',
      books: [
        {title: 'before sunrise', director: 'richard linklater', image: '/images/bs.jpg'},
        {title: 'before midnight', director: 'richard linklater', image: '/images/bm.jpg'},
        {title: 'before sunset', director: 'richard linklater', image: '/images/bss.jpg'},
        {title: 'donnie darko', director: 'richard kelly', image: '/images/dd.jpg'},
        {title: 'her', director: 'spike jonze', image: '/images/h.jpg'},
        {title: 'la haine', director: 'director name', image: '/images/lh.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/lh2.jpg'},
        {title: 'Lost In Translation', director: 'gaspar noe', image: '/images/lost.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/love.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ls.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ls2.jpg'},
        {title: 'Mood For Love', director: 'gaspar noe', image: '/images/ml.jpg'},
        {title: 'Mullholland Drive', director: 'gaspar noe', image: '/images/Mullholland Drive.jpg'},
        {title: 'Parasite', director: 'gaspar noe', image: '/images/paraiaiia.jpg'},
        {title: 'Parasite', director: 'gaspar noe', image: '/images/parasite 2.jpg'},
        {title: 'Roma', director: 'gaspar noe', image: '/images/Roma 2.jpg'},

      ]
    }
  }

}
</script>
