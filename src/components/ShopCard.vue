<template>
  <div class="cards">
    <div v-for="book in books" v-bind:key="book.id" class="card">
      <img v-bind:src="book.image" alt="Avatar" style="width:100%">
      <div class="container">
        <h4>{{book.title}}</h4>
        <p>{{book.director}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCard',
  props: ['books']
}
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding-top: 20px;
  justify-content: center;
  background-color: rgb(245,246,247);
  margin: 0px 10px;
}
.card {
  /* Add shadows to create the "card" effect */

  transition: 0.3s;
  border-radius: 4px;
  padding: .5rem;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {

  text-align: left;

  h4, p {
    padding: 0;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
