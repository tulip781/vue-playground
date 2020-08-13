<template>
  <div class="home">
    <Lander/>
  </div>
</template>

<script>

import Lander from '@/components/Lander.vue';

export default {
  name: 'Landing',
  props: ['data'],
  components: {
    Lander
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
