import Vue from 'vue'
import VueRouter from 'vue-router'
import VueQrcodeReader from "vue-qrcode-reader";
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import QRCodeReaderRegister from './views/QRCodeReaderRegister.vue'
import QRCodeReaderUse from './views/QRCodeReaderUse.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import VoucherList from './views/VoucherList.vue'



import dropIcon from './icons/drop.png'
import logo from './assets/moocup.png'

const routes = [
  { path: '/', component: Home},
  { path: '/register', component: Register },
  { path: '/reader-register', component: QRCodeReaderRegister },
  { path: '/reader-user', component:  QRCodeReaderUse},
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/vouchers', component: VoucherList}
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})



Vue.use(VueRouter)
Vue.use(VueQrcodeReader)
Vue.use(dropIcon)
Vue.use(logo)




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
