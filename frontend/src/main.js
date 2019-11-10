import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSession from 'vue-session'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueSession,
  render: h => h(App)
}).$mount('#app')

