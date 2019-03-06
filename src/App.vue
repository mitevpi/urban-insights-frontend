<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
    </v-content>
    <router-view/>
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
