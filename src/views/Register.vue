<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-col>
        <v-col>
          <h1>Sign up</h1>
        </v-col>

        <v-col>
          <v-text-field
            data-type="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail*"
            :error-messages="errors"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            data-type="password"
            label="Password*"
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            data-type="re-password"
            label="Confirm password*"
            v-model="repassword"
            :rules="repasswordRules"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
        <v-col>
          <p>
            Already have an account? Click
            <router-link to="/login">here</router-link>to login
          </p>
        </v-col>
        <v-col>
          <v-btn class="mr-4" type="submit" :disabled="!valid" color="success" @click="submit">Sign up</v-btn>
          <v-btn class="mr-4" color="error" @click.prevent="reset">Reset</v-btn>
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
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 8) || "Password must be longer than 8 characters",
        v =>
          this.checkUpperCase(v) ||
          "Passwword must contain at least 1 uppercase letter"
      ],
      repassword: "",
      show2: false,
      repasswordRules: [
        v => v === this.password || "Passwords must be identical"
      ],
      errors: []
    };
  },
  computed: {
    user() {
      var user = {
        id: null,
        email: this.email,
        password: this.password
      };
      return user;
    }
  },
  watch: {
    email(email) {
      this.$http
        .get("api/Users/IsEmailAvailable", {
          params: {
            Email: email
          }
        })
        .then(result => {
          this.errors = result.data ? [] : ["Email is already in use"];
        });
    }
  },
  methods: {
    submit() {
      this.valid = this.$refs.form.validate();
      if (this.valid === true) {
        this.$http.post("api/Users/Register", this.user).then(result => {
          console.log(result.data);
          this.$router.push("/");
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    checkUpperCase(string) {
      for (var i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
          if (string[i].toUpperCase() === string[i]) {
            return true;
          }
        }
      }
      return false;
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