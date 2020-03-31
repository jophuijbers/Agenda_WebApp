<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-col>
        <v-col>
          <h1>Log in</h1>
        </v-col>

        <v-col>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail*" required></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            label="Password*"
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col>
          <router-link to="/forgot_password">Forgot password?</router-link>
        </v-col>
        <v-col>
          <v-btn class="mr-4" :disabled="!valid" color="success" @click="submit">Log in</v-btn>
          <v-btn class="mr-4" color="error" @click="reset">Reset Form</v-btn>
        </v-col>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      show1: false,
      passwordRules: [
        v => !!v || "Password is required"
      ]
    };
  },
  computed: {
    user() {
      var user = {
        email: this.email,
        password: this.password
      };
      return user;
    }
  },
  methods: {
    submit() {
      this.valid = this.$refs.form.validate();
      if (this.valid === true) {
        this.$http
          .get("https://localhost:44390/api/Users", this.user)
          .then(result => {
            console.log(result.data); // https://router.vuejs.org/guide/advanced/navigation-guards.html
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.v-form {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>