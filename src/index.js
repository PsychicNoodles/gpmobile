import Vue from "vue"
import App from "./components/App.vue"

import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css"
import "vue-material/dist/theme/default-dark.css"

Vue.use(VueMaterial)

let v = new Vue({
  el: "#app",
  components: { App },
  template: '<App/>'
})