import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NotificationPlugin from './plugin/notify'
Vue.use(NotificationPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
