<template>
  <header class="navbar-wrapper font-color">
      <ul>
        <li>SCREENPRINTS</li>
      </ul>
      <ul class="web-navbar">
        <li><a href="./index.html">home</a></li>
        <li><a href="">journal</a></li>
        <li><a href="">products</a></li>
        <li><a href="./about.html">about</a></li>
      </ul>
      <ul class="mobile-navbar">
        <div class="hamburger hamburger--collapse">
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
        </div>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'Nav',
  mounted(){
    const initNavBarMovement = () => {
      var prevScrollpos = window.pageYOffset;
      window.addEventListener('scroll', () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.querySelector(".navbar-wrapper").style.top = "0";
        } else if (prevScrollpos == currentScrollPos) {
          document.querySelector(".navbar-wrapper").style.top = "0";
        } else {
          document.querySelector(".navbar-wrapper").style.top = "-55px";
        }
        prevScrollpos = currentScrollPos;
      });
    }
    initNavBarMovement();
  }
}

</script>

<style scoped lang="scss">

.hamburger {
  height: 10px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: black;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  outline: none !important;
}

.hamburger:hover {
  opacity: 0.7;
  outline: none !important;
}

.hamburger.is-active:hover {
  opacity: 0.7;
  outline: none !important;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: black;
  outline: none !important;
  .hamburger-box {
    top: -200px;
  }
}

.hamburger-box {
  width: 25px;
  height: 25px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 20px;
  height: 2px;
  background-color: black;
  border-radius: 1px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -12px;
}

.hamburger-inner::after {
  bottom: 0;
}

.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 7px;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse .hamburger-inner::after {
  top: -6px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
}
.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--collapse.is-active .hamburger-inner::after {
  top: 10;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
}

.hamburger--collapse.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

header {
  height: 52px;
  padding: 0px 40px;
  position: fixed;
  top: 0;
  width: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  background-color: white;
  z-index: 30;
  transition: top 0.3s;
  ul {
    list-style: none;
    padding-left: 0px;
    li {
      display: inline;
      margin-left: 20px;
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
  ul > li:first-of-type {
    margin-left: 0px;
  }
}

.web-navbar {
  display: none;
}
.burger-icon {
  width: 25px;
}

@media (min-width: 768px) {
  .burger-icon {
    width: 25px;
  }
  .web-navbar {
    display: inline;
  }
  .mobile-navbar {
    display: none;
    background-color: pink;
  }
}

</style>
