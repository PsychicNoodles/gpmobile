<template>
  <div>
    <md-app-toolbar>
      <span class="md-title">{{ title }}</span>
    </md-app-toolbar>
    <md-app-drawer md-permanent="full">
      <md-list>
        <md-list-item v-for="item in items" v-bind:key="item.id">
          <md-icon>{{ item.icon }}</md-icon>
          <span class="md-list-item-text">{{ item.text }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      items: [
        { icon: "edit", text: "Edit Plan"}
      ]
    }
  }
}
</script>
