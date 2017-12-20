
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';
import './mock/mockServer';
import ElementUI from 'element-ui'
Vue.use(ElementUI);


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
