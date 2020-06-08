<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">todo</span>
        <span>webapp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed text v-if="getAccessToken" @click="logout">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      <v-btn depressed text v-if="!getAccessToken" to="/login">
        <span>Log In</span>
        <v-icon right>perm_identity</v-icon>
      </v-btn>
      <v-btn depressed text v-if="!getAccessToken" to="/register">
        <span>Sign up</span>
        <v-icon right>input</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="$vuetify.breakpoint.xsOnly && getAccessToken">
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "calendar_today", text: "Personal calendar", route: "/" },
        { icon: "calendar_today", text: "Group calendar", route: "/groupcalendar" },
        { icon: "event", text: "Add event", route: "/addevent" },
        { icon: "group", text: "Group", route: "/group" },
        { icon: "person", text: "Profile", route: "/profile" },
        { icon: "settings", text: "Settings", route: "/settings" },
      ]
    };
  },
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapGetters(["getAccessToken"])
  }
};
</script>

<style scoped>
</style>