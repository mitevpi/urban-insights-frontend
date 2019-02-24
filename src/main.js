import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/store'
import "./registerServiceWorker";

import Ionic from '@ionic/vue';

Vue.use(Ionic);
Vue.config.ignoredElements = ["a-scene", "a-entity", "a-camera", "a-box", "ion-icon", "ion-item", "ion-button",
 "ion-buttons", "a-asset", "a-assets", "a-asset-item", "ion-toolbar", "a-marker-camera"];
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
