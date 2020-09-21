import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import section01 from './components/section01.vue'
import section02 from './components/section02.vue'
import section03 from './components/section03.vue'
import menu from './components/menu.vue'
import product from './components/product.vue'

Vue.component('section01', section01)
Vue.component('section02', section02)
Vue.component('section03', section03)
Vue.component('my-menu', menu)
Vue.component('product', product)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
