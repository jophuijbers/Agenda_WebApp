<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-col>
        <v-col>
          <h1>Sign in</h1>
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
          <v-btn class="mr-4" type="submit" :disabled="!valid" color="success" @click.prevent="submit">Log in</v-btn>
          <v-btn class="mr-4" color="error" @click="reset">Reset</v-btn>
          <router-link to="/register">Sign up</router-link>
        </v-col>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
import { /*mapGetters,*/ mapActions } from 'vuex';

export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        // v => /.+@.+\..+/.test(v) || "E-mail must be valid"
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
    ...mapActions(['login']),
    submit() {
      this.valid = this.$refs.form.validate();
      if (this.valid === true) {
        this.login(this.user);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
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