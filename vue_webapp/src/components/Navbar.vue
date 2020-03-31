<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">todo</span>
        <span>webapp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed text v-if="loggedIn">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
        <v-btn depressed text v-if="!loggedIn" to="/login">
        <span>Log In</span>
        <v-icon right>perm_identity</v-icon>
      </v-btn>
        <v-btn depressed text v-if="!loggedIn" to="/register">
        <span>Sign up</span>
        <v-icon right>input</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark>
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
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      loggedIn: false,
      links: [
          { icon: 'dashboard', text: 'Dashboard', route: '/'},
          { icon: 'folder', text: 'My Projects', route: '/projects'},
          { icon: 'person', text: 'Profile', route: '/profile'},
      ]
    };
  }
};
</script>

<style scoped>
</style>