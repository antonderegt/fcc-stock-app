import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'

import store from './store'

// Socket IO
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, process.env.IO_URL);

Vue.use(VueRouter)
import Home from './components/Home.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
