import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/icon.less'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/index.less'
import axios from 'axios'

axios.defaults.baseURL = 'http://liufusong.top:8080/'
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
