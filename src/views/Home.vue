<template>
  <div class="home">
    <Slideshow/>
    <SearchBar v-bind:books="data['allBooks']" @searchresult="updateSearchVal"/>
    <ShopCard class="home__shopwrapper" v-bind:books="filteredBooks"/>
  </div>
</template>

<script>

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
    filteredBooks: function () {
      if (this.searchRequest != '') {
        return this.data['allBooks'].filter((el) => {
          return el.title.toLowerCase().indexOf(this.searchRequest.toLowerCase()) !== -1
        })
      }
      return this.data['allBooks']
    }
  },
  methods: {
    updateSearchVal: function (val) {
      this.searchRequest = val
    }
  },
  data(){
    return {
      searchRequest: ''
    }
  }

}
</script>

<style lang="scss">


</style>
