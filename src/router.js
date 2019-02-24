import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import ArPaperPage from "./views/ArPaperPage.vue";
import ArSite from "./views/ArSite.vue";
import ModelViewPage from "./views/ModelViewPage.vue";
import SocialFeedPage from "./views/SocialFeedPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/ar-paper",
      name: "ArPaperPage",
      component: ArPaperPage
    },
    {
      path: "/ar-site",
      name: "ArSite",
      component: ArSite
    },
    {
      path: "/model-view",
      name: "ModelViewPage",
      component: ModelViewPage
    },
    {
      path: "/social-feed",
      name: "SocialFeedPage",
      component: SocialFeedPage
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
