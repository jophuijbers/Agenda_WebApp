<template>
  <div class="dashboard">
    <h1 class="title">Dashboard</h1>
    <p v-for="user in users" :key="user.email">{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.$http.get("https://localhost:44390/api/Users").then(result => {
      this.users = result.data;
    });
  }
};
</script>

<style>
</style>
