<template>
  <div class="profile">
    <h1 class="title">Profile</h1>
    <p>{{ getAccessToken }}</p>
    <p>{{ getUser.email }}</p>
    <p>{{ getUser.password }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["user"])
  },
  created() {
    this.user(this.getAccessToken);
  },
  computed: {
    ...mapGetters(["getUser", "getAccessToken"])
  }
};
</script>