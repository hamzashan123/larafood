import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import meal from './meal'
import food from './food'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meal,
    food,
  },
  strict: process.env.DEV,
})
