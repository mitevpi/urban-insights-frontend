<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
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
