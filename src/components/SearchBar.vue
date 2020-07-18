<template>
<div class="shop">
  <p>{{books.length}} results</p>
</div>
</template>

<script>
export default {
  name: 'Searchbar',
  props: ['books']
}

</script>

<style scoped lang="scss">
.shop {
  display: flex;
}
</style>
