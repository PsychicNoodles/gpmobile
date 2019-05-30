<template>
  <div>
    <div>Hello {{name}}!</div>
    Name: <input v-model="name" type="text">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "World"
    }
  }
}  
</script>