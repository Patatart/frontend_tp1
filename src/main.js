import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import createRouter from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
const state = {
  user: {}
}

axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  data: state,
  router: createRouter(state),
  vuetify,
  render: h => h(App)
}).$mount('#app')
