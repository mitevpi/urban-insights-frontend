import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.config.ignoredElements = ["a-scene", "a-entity", "a-camera", "a-box","a-asset", "a-assets", "a-asset-item", "a-marker"];
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
