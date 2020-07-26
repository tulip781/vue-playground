<template>
  <div>
    <h1>HELLOOOOO SHOW</h1>
    <h1>HELLOOOOO SHOW</h1>
    <h1>HELLOOOOO SHOW</h1>
    {{ $route.params.id }}
      <div class="container">

      </div>
    <h1>This is an show page</h1>

    <div>User {{ $route.params.id }}</div>
    
  </div>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Show',
  components: {
  },
  props: ['books'],
  beforeMount(){
    const book = this.$route.params.id;
    console.log(book)
  }
}

</script>

<style lang="scss">

</style>
