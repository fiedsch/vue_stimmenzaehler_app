import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    procount: 0,
    contracount: 0
  },
  mutations: {
    increment: function (state, payload) {
      const which = payload[0]
      const amount = payload[1]
      switch (which) {
        case 'pro':
          state.procount += amount
          break
        case 'contra':
          state.contracount += amount
          break
      }
    },
    reset: function (state) {
      state.procount = 0
      state.contracount = 0
    }
  }
})
