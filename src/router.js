import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ArPaperPage from "./views/ArPaperPage.vue";

import ModelViewPage from "./views/ModelViewPage.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/model-view",
      name: "ModelViewPage",
      component: ModelViewPage
    },
    {
      path: "/ar-paper",
      name: "ArPaperPage",
      component: ArPaperPage
    },
  ]
})
