<template>
  <div class="home">
    <Lander :blogs='simpleBlogs'/>
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
      return this.data["allBlogposts"]
    }
    
  },
  

}
</script>

<style lang="scss">


</style>
