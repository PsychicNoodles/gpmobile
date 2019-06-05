<template>
  <div class="page-container">
    <md-app v-if="loggedIn">
      <Navigation></Navigation>
      <router-view></router-view>
    </md-app>
    <router-view v-else></router-view>
    <!-- <div>Hello {{name}}!</div>
    Name: <input v-model="name" type="text"> -->
  </div>
</template>

<script>
import Login from "./Login.vue"
import Navigation from "./Navigation.vue"

export default {
  name: "App",
  components: { Login, Navigation },
  data() {
    return {
      loggedIn: false
    }
  }
}  
</script>