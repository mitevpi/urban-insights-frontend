const state = {
  fileData: [],
  sorting: "default"
};

const mutations = {
  'SET_FILE_DATA' (state) {
    let data = require('./postData');
    state.fileData = data;
    console.log(data);
  },
  'SORT_ASCENDING' (state) {
    state.fileData.sort(function(a, b) {
      return a.fileCount - b.fileCount;
    });
    state.sorting = "ascending";
  }
};

const actions = {
  sortFileDataAscending: ({ commit }) => {
    commit('SORT_ASCENDING');
  },
  initFileData: ({ commit }) => {
    commit('SET_FILE_DATA');
  },
};

const getters = {
  fileData: state => {
    return state.fileData;
  },
  sorting: state => {
    return state.sorting;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}