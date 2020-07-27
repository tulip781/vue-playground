<template>
<div class="shop">
  <p class="searchBar__spacer">{{books.length}} results</p>
  <input type="text" v-model="search" class="searchBar__spacer"/>
  <button class="searchBar__spacer">Search</button>
</div>
</template>

<script>
export default {
  name: 'Searchbar',
  props: ['books', 'search'],
  mounted () {
    this.searchForResult = this.search;
  },
  data() {
    return {
      searchForResult: ''
    }
  },
  watch:{
    searchForResult(val){
      this.$emit('search', val);
    }
  }
}

</script>

<style scoped lang="scss">
.shop {
  display: flex;
}
.searchBar__spacer {
  margin: 10px;
}
</style>
