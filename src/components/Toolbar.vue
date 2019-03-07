<template>
  <div>
    <v-navigation-drawer v-if="drawer != null" v-model="drawer" fixed app class="black" dark>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex>
            <v-select v-model="selectedModel" :items="modelTypes" label="Selected Model"></v-select>
          </v-flex>
          <v-flex>
            <v-select v-model="selectedAnalysis" :items="analysisTypes" label="Analysis Type"></v-select>
          </v-flex>

          <!-- Shadow Analysis -->
          <div v-if="selectedAnalysis == 'Shadow'">
            <v-flex>
              <v-slider v-model="hour" label="Hour" min="0" max="23" step="1" thumb-label="always"></v-slider>
            </v-flex>
            <v-flex>
              <v-slider v-model="day" label="Day" min="1" max="31" step="1" thumb-label="always"></v-slider>
            </v-flex>
            <v-flex>
              <v-slider
                v-model="month"
                label="Month"
                min="1"
                max="12"
                step="1"
                thumb-label="always"
              ></v-slider>
            </v-flex>
          </div>
          <v-flex>
            <v-switch label="VR Mode" v-model="vrModeToggle"></v-switch>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase fixed subheading" id="toolbarTitle">
        <span>Urban</span>
        <span class="font-weight-light subheading">Insights</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon href="/">
        <v-icon id="iconSize">home</v-icon>
      </v-btn>

      <v-btn icon href="/model-view">
        <v-icon id="iconSize">fas fa-cube</v-icon>
      </v-btn>

      <v-btn icon href="/ar-paper">
        <v-icon id="iconSize">fas fa-vr-cardboard</v-icon>
      </v-btn>

      <v-toolbar-side-icon id="iconSize" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  components: {},
  watch: {
    selectedModel: function(val) {
      this.$store.commit("setModelType", val);
    },
    selectedAnalysis: function(val) {
      this.$store.commit("setAnalysisType", val);
    },
    vrModeToggle: function(val) {
      this.$store.commit("setVrModeToggle", val);
    }
  },
  data() {
    return {
      drawer: null,
      day: 1,
      hour: 1,
      month: 1,
      selectedModel: "Vanilla",
      modelTypes: ["Vanilla", "OBJ Model"],
      selectedAnalysis: "Shadow",
      analysisTypes: ["None", "Shadow"],
      vrModeToggle: false
    };
  }
};
</script>

<style scoped>
#toolbarTitle {
  font-size: 11px;
}

#iconSize {
  font-size: 20;
}
</style>
