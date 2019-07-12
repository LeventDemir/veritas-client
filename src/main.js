import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'

import router from './router/router'
import store from './store/store'

import App from './App.vue'


Vue.use(VueFlashMessage)


const audio = new Audio('/src/assets/audio/audio.mp3')
audio.loop = true
audio.play()


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
