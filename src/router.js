import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ArPaper from "./views/ArPaper.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/ar-paper",
      name: "ArPaper",
      component: ArPaper
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
