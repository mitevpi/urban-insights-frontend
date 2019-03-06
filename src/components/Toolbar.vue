<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app class="black" dark>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex>
            <v-select v-model="selectedShape" :items="shapeTypes" label="Shape Type"></v-select>
          </v-flex>
          <v-flex>
            <v-slider
              v-model="xSpacing"
              label="X Spacing"
              min=".1"
              max="4"
              step=".1"
              thumb-label="always"
            ></v-slider>
          </v-flex>
          <v-flex>
            <v-slider
              v-model="ySpacing"
              label="Y Spacing"
              min=".1"
              max="4"
              step=".1"
              thumb-label="always"
            ></v-slider>
          </v-flex>
          <v-flex>
            <v-slider
              v-model="dotWidth"
              label="Shape Width"
              min=".1"
              max="2"
              step=".1"
              thumb-label="always"
            ></v-slider>
          </v-flex>
          <v-flex>
            <v-slider
              v-model="dotHeight"
              label="Shape Height"
              min=".1"
              max="2"
              step=".1"
              thumb-label="always"
            ></v-slider>
          </v-flex>
          <v-flex>
            <v-slider
              v-model="fritHeight"
              label="Overall Height"
              min="4"
              max="100"
              thumb-label="always"
            ></v-slider>
          </v-flex>
          <v-flex>
            <v-switch label="Perpendicular to Marker" v-model="vOrient"></v-switch>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase fixed" id="toolbarTitle">
        <span>Urban</span>
        <span class="font-weight-light">Insights</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon id="iconSize">fas fa-cube</v-icon>
      </v-btn>

      <v-toolbar-side-icon id="iconSize" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  components: {},
  data() {
    return {
      drawer: null,
      Spacing: 1,
      ySpacing: 1,
      xSpacing: 1,
      dotWidth: 1,
      dotHeight: 1,
      fritHeight: 16,
      selectedShape: "Rectangle",
      shapeTypes: ["Rectangle", "Circle"],
      vOrient: true
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
