import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelType: "Vanilla",
    modelPath: "",
  },
  mutations: {
    setModelType (state, modelType) {
      state.modelType = modelType;
    }

  },
  actions: {

  }
})
