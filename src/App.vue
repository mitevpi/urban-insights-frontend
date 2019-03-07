<template>
  <v-app id="app">
    <Toolbar></Toolbar>
    <!-- <v-content>
    </v-content>-->
    <main id="app">
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view id="position"></router-view>
        </v-fade-transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    Toolbar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

#position {
  margin-top: 3%;
}
</style>
