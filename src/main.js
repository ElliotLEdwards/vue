import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import Todos from './components/Todos';
import Home from './components/Home';
import About from './components/About';
import Spotify from './components/Spotify.vue';
import Ip from './components/Ip.vue'
import Cv from './components/Cv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: Todos
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/Spotify',
    component: Spotify
  },
  {
    path: '/Ip',
    component: Ip
  },
  {
    path: '/CV',
    component: Cv
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
