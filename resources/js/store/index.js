import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import meal from './meal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meal,
  },
  strict: process.env.DEV,
})
