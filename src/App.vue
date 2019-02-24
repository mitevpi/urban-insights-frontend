<template>
  <div id="app">
    <div id="nav">
      <UserInterface></UserInterface>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
import UserInterface from "@/components/UserInterface.vue";

export default {
  name: "app",
  components: {
    UserInterface
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width:100%;
  bottom: 0;
  height: 50px;
  position: fixed;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
