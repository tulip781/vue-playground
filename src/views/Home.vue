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
      search: '',
      books: [
        {title: 'before sunrise', director: 'richard linklater', image: '/images/bs.jpg', id: '1'},
        {title: 'before midnight', director: 'richard linklater', image: '/images/bm.jpg', id: '2'},
        {title: 'before sunset', director: 'richard linklater', image: '/images/bss.jpg', id: '3'},
        {title: 'donnie darko', director: 'richard kelly', image: '/images/dd.jpg', id: '4'},
        {title: 'her', director: 'spike jonze', image: '/images/h.jpg', id: '5'},
        {title: 'la haine', director: 'director name', image: '/images/lh.jpg', id: '6'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/lh2.jpg', id: '7'},
        {title: 'Lost In Translation', director: 'gaspar noe', image: '/images/lost.jpg', id: '8'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/love.jpg', id: '9'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ls.jpg', id: '10'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ls2.jpg', id: '11'},
        {title: 'Mood For Love', director: 'gaspar noe', image: '/images/ml.jpg', id: '12'},
        {title: 'Mullholland Drive', director: 'gaspar noe', image: '/images/Mullholland Drive.jpg', id: '13'},
        {title: 'Parasite', director: 'gaspar noe', image: '/images/paraiaiia.jpg', id: '14'},
        {title: 'Parasite', director: 'gaspar noe', image: '/images/parasite 2.jpg', id: '15'},
        {title: 'Roma', director: 'gaspar noe', image: '/images/Roma 2.jpg', id: '16'},

      ]
    }
  }

}
</script>
