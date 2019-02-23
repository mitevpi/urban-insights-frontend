import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ArPaper from "./views/ArPaper.vue";
import ArSite from "./views/ArSite.vue";
import ModelView from "./views/ModelView.vue";
import SocialFeed from "./views/SocialFeed.vue";

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
      path: "/ar-site",
      name: "ArSite",
      component: ArSite
    },
    {
      path: "/model-view",
      name: "ModelView",
      component: ModelView
    },
    {
      path: "/social-feed",
      name: "SocialFeed",
      component: SocialFeed
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
