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
  data(){
    return {
      books: [
        {title: 'before sunrise', director: 'richard linklater', image: '/images/bs.jpg'},
        {title: 'before midnight', director: 'richard linklater', image: '/images/bm.jpg'},
        {title: 'before sunset', director: 'richard linklater', image: '/images/bss.jpg'},
        {title: 'donnie darko', director: 'richard kelly', image: '/images/dd.jpg'},
        {title: 'her', director: 'spike jonze', image: '/images/h.jpg'},
        {title: 'la haine', director: 'director name', image: '/images/lh.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/lh2.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/lost.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/love.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ls.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ls2.jpg'},
        {title: 'enter the void', director: 'gaspar noe', image: '/images/ml.jpg'},
        {title: 'Mullholland Drive', director: 'gaspar noe', image: '/images/Mullholland Drive.jpg'},
        {title: 'Parasite', director: 'gaspar noe', image: '/images/paraiaiia.jpg'},
        {title: 'Parasite', director: 'gaspar noe', image: '/images/parasite 2.jpg'},
        {title: 'Roma', director: 'gaspar noe', image: '/images/Roma 2.jpg'},

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding-top: 20px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: .5rem;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
