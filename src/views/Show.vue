<template>
  <div class="about">
    <img v-bind:src="book.image" alt="Avatar" style="width:100%">
      <div class="container">
        <h4>{{book.title}}</h4>
        <p>{{book.director}}</p>
      </div>
    <h1>This is an show page</h1>
    <h1>{{book.title}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Show',
  components: {
  },
  props: ['book']
}

</script>

<style lang="scss">

</style>
