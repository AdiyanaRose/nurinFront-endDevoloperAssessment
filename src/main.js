import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.config.productionTip = false

Vue.use(VueGlide)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
