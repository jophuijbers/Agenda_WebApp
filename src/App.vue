<template>
  <v-app dark>
    <nav-bar/>
    <v-content class="mx-4 my-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    'nav-bar': Navbar,
  },
};
</script>
