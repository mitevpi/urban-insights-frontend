const d3 = require("d3");

import D3ST from '../../js/d3ST';
let d3St = new D3ST();

const state = {
  fileData: [],
  keys: [],
  sorting: "default"
};

const mutations = {
  async 'SET_FILE_DATA' (state) {
    // load the csv and create the chart
    var d3Data = await d3.json("/data/all.json").then(data => {
      //console.log("RAW DATA", data);

      var projGrouped = d3St.groupBy(data, "projectName");

      var finalDataArray = [];
      for (let key in projGrouped) {
        if (projGrouped.hasOwnProperty(key)) {
          let val = projGrouped[key];

          let parsedFileTypes = val.map(v =>
            d3St.parseFileType(v.displayName)
          );

          let summary = d3St.summarizeArray(parsedFileTypes);
          //console.log(key ,summary);

          let formattedObj = {
            project: key,
            fileCount: val.length
            //files: summary
          };

          for (let property in summary) {
            if (summary.hasOwnProperty(property)) {
              //console.log(property, summary[property]);
              formattedObj[property] = summary[property];
            }
          }

          finalDataArray.push(formattedObj);
        }
      }

      finalDataArray.sort(function(a, b) {
        return b.fileCount - a.fileCount;
      });

      console.log("PARSED DATA", finalDataArray);
      return finalDataArray;
    });

    state.fileData = d3Data;
    state.keys = ["rvt", "dwg", "pdf", "png", "jpeg", "rfa", "dat"];
    //state.sorting = "descending";

    // console.log("File State Data", state.fileData);
    // console.log("File State Keys", state.keys);
  },
  'SORT_ASCENDING' (state) {
    state.fileData.sort(function(a, b) {
      return a.fileCount - b.fileCount;
    });
    state.sorting = "ascending";
  },
  'SORT_DESCENDING' (state) {
    state.fileData.sort(function(a, b) {
      return b.fileCount - a.fileCount;
    });
    state.sorting = "descending";
  },
  'SORT_FILETYPE' (state, string) {
    state.fileData.sort(function(a, b) {
      return b[string] - a[string];
    });
    state.sorting = "filetype";
  },
  'FILTER_CONTAINS' (state, string) {
    state.fileData = state.fileData.filter(obj => {
      return obj.project.includes(string);
    })
    state.sorting = "filterContains";
  }
};

const actions = {
  sortFileDataAscending: ({ commit }) => {
    commit('SORT_ASCENDING');
  },
  sortFileDataDescending: ({ commit }) => {
    commit('SORT_DESCENDING');
  },
  sortFileDataType: ({ commit }, string) => {
    commit('SORT_FILETYPE', string);
  },
  filterContains: ({ commit }, string) => {
    commit('FILTER_CONTAINS', string);
  },
  initFileData: ({ commit }) => {
    commit('SET_FILE_DATA');
  },
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