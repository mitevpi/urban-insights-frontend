const state = {
  filePath: [],
};

const mutations = {
  'SET_MODEL_PATH' (state) {
    let data = require('./postData');
    state.filePath = data;
    console.log(data);
  }
};

const actions = {
  initModelPath: ({ commit }) => {
    commit('SET_MODEL_PATH');
  }
};

const getters = {
  modelPath: state => {
    return state.filePath;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}