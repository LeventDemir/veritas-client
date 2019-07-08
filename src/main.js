import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'

import router from './router/router'
import store from './store/store'

import App from './App.vue'


Vue.use(VueFlashMessage)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
