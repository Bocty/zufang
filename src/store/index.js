import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    baseurl: 'http://liufusong.top:8080',
    housetype: {
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    housetype (state, payload) {
      state.housetype = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
