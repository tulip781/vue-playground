<template>
  <div class="about">
    <br>
    <br>
    <br>
    <h1>This is an about page</h1>
    <h1>{{about}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'About',
  props: ['data'],
  computed: {
    about: function() {
      return this.data.aboutpage.url
    }
  }

}
</script>
