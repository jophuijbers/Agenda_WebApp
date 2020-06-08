import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import store from './store/store'

axios.defaults.baseURL = 'https://localhost:44364/'; //'https://localhost:44364/'; 

Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
