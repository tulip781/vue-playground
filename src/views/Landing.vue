<template>
  <div class="home">
    <Lander :blogs='simpleBlogs' :featuredBooks='featuredBooks'/>
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
  data: function(){
    return {
      blogs: []
    }
  },
  computed: {
    simpleBlogs: function() {
      return this.data["allBlogposts"];
    },
    featuredBooks: function() {
      const result = this.data["allBooks"].filter(book => book.image2 != null);

      return result
    }

  },
  beforeMount: function(){
    console.log(this.data)
  }


}
</script>

<style lang="scss">


</style>
