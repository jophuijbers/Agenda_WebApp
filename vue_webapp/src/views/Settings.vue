<template>
  <div class="dashboard">
    <h1 class="title">Settings</h1>
    <h3>Language</h3>
    <p>insert language selection</p>
    <h3>Layout</h3>
    <p>Theme: </p>
    <v-switch v-model="isDark" v-on:change="changeTheme" label="Dark mode"></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isDark: true,
    }
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = this.isDark;
    }
  }
};
</script>

<style>
</style>
