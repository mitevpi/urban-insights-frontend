<template>
  <v-app>
    <Toolbar></Toolbar>
    <!-- <router-view/> -->
    <v-content>
      <!-- <HelloWorld/> -->
    </v-content>
    <router-view/>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    HelloWorld,
    Toolbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
