<template>
  <div class="side-navbar-container">
    <ul >
      <li class='menu-text pop-item'><router-link to="/">home</router-link></li>
      <li class='menu-text pop-item'><router-link to="/">shop</router-link></li>
      <li class='menu-text pop-item'><router-link to="/">journal</router-link></li>
      <li class='menu-text pop-item'><router-link to="/about">about</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    mounted(){
      const burger = document.querySelector('.hamburger');
      const sidebar = document.querySelector('.side-navbar-container');

      window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth >= 768 ) {
          burger.classList.remove('is-active');
          sidebar.classList.remove('is-active');
        }
      });

      burger.addEventListener('click', () =>{
        burger.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
      });
    }
  }
</script>

<style scoped lang="scss">
  .side-navbar-container {
  position: fixed;
  top: 60px;
  right: -330px;
  width: 300px;
  background-color: pink;
  transform-origin: center right;
  transition: right 1s ease;
  z-index: 10;
  ul {
    list-style: none;
    cursor: default;
    li {
      cursor: pointer;
      a {
        text-decoration: none;
        color: black;
      }
    }
    li:hover {
      text-decoration: underline;
    }
  }
}

.side-navbar-container.is-active {
  right: 0px;
}

@media (min-width: 768px) {
  .side-navbar-container {
    display: none;
  }
}
</style>
