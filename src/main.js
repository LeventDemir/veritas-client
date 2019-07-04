import Vue from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'

import router from './router/router'
import store from './store/store'

import App from './App.vue'


Vue.use(CKEditor);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
