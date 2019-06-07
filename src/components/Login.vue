<template>
  <div class="centered-component">
    <md-content class="md-elevation-3">
      <div class="title">
        <img src="img/logo.jpg">
      </div>
      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="login.email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>
    </md-content>

    <div class="actions md-layout md-alignment-center-space-between">
      <!-- <a @click="guest">Guest</a> -->
      <md-button class="md-raised md-primary" @click="auth">Login</md-button>
    </div>
  </div>
</template>

<script>
import { gpAuth } from "../GrinnellPlansAuth.js"

export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    auth() {
      gpAuth.login(this.$data.login.username, this.$data.login.password).then((res) => {
        alert(JSON.stringify(res))
      }, (err) => {
        alert('err: ' + err)
      })
    }
  }
}
</script>
