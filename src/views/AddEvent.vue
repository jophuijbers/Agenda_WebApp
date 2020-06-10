<template>
  <!-- <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
  </template>-->
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Create event</h1>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="event.name" label="Name*" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="event.description" :auto-grow="true" :rows="3" label="Description"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-radio-group v-model="event_type" mandatory>
            <v-radio label="Timed event (single day)" value="single"></v-radio>
            <v-radio label="Timeless event (multiple days)" value="multiple"></v-radio>
          </v-radio-group>
        </v-col>
        <template v-if="event_type === 'single'">
          <v-col cols="12" md="4">
            <date-picker v-model="event.start_date" label="Start date"></date-picker>
          </v-col>
          <v-col cols="12" md="4">
            <time-picker v-model="event.start_time" label="Start time"></time-picker>
          </v-col>
          <v-col cols="12" md="4">
            <time-picker v-model="event.end_time" label="End time" :min_time="event.start_time"></time-picker>
          </v-col>
        </template>
        <template v-if="event_type === 'multiple'">
          <v-col cols="12" md="6">
            <date-picker v-model="event.start_date" label="Start date"></date-picker>
          </v-col>
          <v-col cols="12" md="6">
            <date-picker v-model="event.end_date" label="End date" :min_date="event.start_date"></date-picker>
          </v-col>
        </template>
        <v-col>
          <v-btn class="mr-6" @click="submit">Create</v-btn>
          <v-btn>Reset</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <!-- </v-dialog> -->
</template>

<script>
import timepicker from "../components/Time_picker.vue";
import datepicker from "../components/Date_picker.vue";

import axios from 'axios';
import router from '../router';

export default {
  data() {
    return {
      valid: "",
      event_type: "",
      menu_time1: false,
      menu_time2: false,

      event: {
        name: "",
        description: "",
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        start_time: "00:00:00",
        end_time: "23:59:59"
      },
      test: ""
    };
  },
  computed: {
    getEvent() {
      return {
        name: this.event.name,
        description: this.event.description,
        start_string: this.event.start_date + "T" + this.event.start_time,
        end_string: this.event.end_date + "T" + this.event.end_time
      };
    }
  },
  methods: {
    submit() {
      // let token = this.$store.getters.getAccessToken;
      // this.$store.dispatch("addEvent", {
      //   event: this.getEvent,
      //   access_token: token
      // });
      //var event = this.getEvent;
      axios({
        method: "post",
        url: "api/Events/PostEvent",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + this.$store.getters.getAccessToken
        },
        data: {
          name: this.event.name,
          description: this.event.description,
          start: `${this.event.start_date} ${this.event.start_time}`,
          end: `${this.event.end_date} ${this.event.end_time}`
        }
      })
        .then(response => {
          router.push("/");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    reset() {}
  },
  components: {
    "time-picker": timepicker,
    "date-picker": datepicker
  }
};
</script>