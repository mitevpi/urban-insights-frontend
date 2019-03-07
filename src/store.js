import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelType: "Vanilla",
    modelPath: "",
    vrModeToggle: false,
  },
  mutations: {
    setModelType (state, modelType) {
      state.modelType = modelType;
    },
    setVrModeToggle (state, vrModeToggle) {
      state.vrModeToggle = vrModeToggle;
    }
  },
  actions: {

  }
})
