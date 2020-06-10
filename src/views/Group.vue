<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Create new group</h1>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="name" label="Name*"></v-text-field>
          <v-btn @click="submit">Create</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        name: '',
    };
  },
  methods: {
    submit() {
      axios({
        method: "post",
        url: "api/Groups",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
          //Authorization: "Bearer " + this.$store.getters.getAccessToken
        },
        data: {
          name: this.name
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>