import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelType: "Vanilla",
    analysisType: "None",
    modelPath: "",
    vrModeToggle: false,
  },
  mutations: {
    setModelType (state, modelType) {
      state.modelType = modelType;
    },
    setVrModeToggle (state, vrModeToggle) {
      state.vrModeToggle = vrModeToggle;
    },
    setAnalysisType (state, analysisType) {
      state.analysisType = analysisType;
    }
  },
  actions: {

  }
})
