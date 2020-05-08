import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/HomePage'; 

const Portfolio = {
  template: "<div>Portfolio</div>"
}

const Contacts = {
  template: "<div>Contacts</div>"
}

const Blog = {
  template: "<div>Blog</div>"
}

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/contacts', component: Contacts },
  { path: '/blog', component: Blog }, 
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router;