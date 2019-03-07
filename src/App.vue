<template>
  <v-app>
    <Toolbar></Toolbar>
    <!-- <v-content>
    </v-content>-->
    <main>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
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
