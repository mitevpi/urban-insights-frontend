import Vue from 'vue'
import Vuex from 'vuex'

import files from './modules/files'
import rvtFiles from './modules/revitFiles'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    files,
    rvtFiles
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
