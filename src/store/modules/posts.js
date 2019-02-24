const state = {
  fileData: [],
  keys: [],
  sorting: "default"
};

const mutations = {
  'SET_FILE_DATA' (state) {
    var data = require('/data/posts')
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
  }
};

const getters = {
  fileData: state => {
    return state.fileData;
  },
  keys: state => {
    return state.keys;
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