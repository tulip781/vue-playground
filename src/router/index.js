import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Spotlight from '../views/Spotlight.vue'
import Subscription from '../views/Subscription.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/spotlight',
    name: 'spotlight',
    component: Spotlight
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: Subscription
  }
]

const router = new VueRouter({
  routes
})

export default router
