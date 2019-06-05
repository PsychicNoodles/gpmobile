import Vue from "vue"
import VueRouter from "vue-router"
import App from "./components/App.vue"

import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css"
import "vue-material/dist/theme/default-dark.css"

import Login from "./components/Login.vue"
import Home from "./components/Home.vue"

Vue.use(VueMaterial)
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

if (localStorage.plansSession === undefined) {
  router.replace('/login')
} else {
  router.replace('/home')
}

let v = new Vue({
  router,
  el: "#app",
  components: { App },
  template: '<App/>'
})