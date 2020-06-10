<template>
  <v-row>
    <v-col>
      <v-sheet>
        <v-toolbar flat>
          <v-btn outlined class="mr-4" @click="setToday">Today</v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>

      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="focus"
          :type="type"
          :events="events"
          :short-intervals="false"
          :show-month-on-first="true"
          :interval-format="intervalFormat"
          event-overlap-mode="stack"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color">
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
    <!-- <v-btn @click="test">test</v-btn> -->
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import axios from "axios";
export default {
  data: () => ({
    focus: "",
    type: "week",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day"
    },
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    ...mapActions(["fetchEvents"]),
    // test() {
    //   axios.post("api/Events/PostEvent", {
    //     headers: {
    //       Authorization:
    //         "Bearer " +
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImp0aSI6IjRiNGMwZmIwLTdhOWMtNGYwYy04YjNmLTIxYmRjZTY5YjcxMyIsImV4cCI6MTU4OTQ2NDE0NiwiaXNzIjoiVGVzdC5jb20iLCJhdWQiOiJUZXN0LmNvbSJ9.W_uEvUV_CTgZnkywSrog1ndoArhtEyVnG5cI4qBqtUI"
    //     },
    //     Name: "Test1",
    //     Description: "Test from frontend",
    //     StartString: "2020-05-12T01:00:00",
    //     EndString: "2020-05-12T02:00:00"
    //   });
    // },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    intervalFormat(interval) {
      return interval.time;
    }
  },
  computed: {
    ...mapGetters(["events", "getAccessToken"]),
    title() {
      // console.log(this.events[0].start);
      return "";
      //return `${this.events[0].start.month} - ${this.events[0].start.year}`;
      // const { start, end } = this;
      // if (!start || !end) {
      //   return "test";
      // }

      // const startMonth = this.monthFormatter(start);
      // const endMonth = this.monthFormatter(end);
      // const suffixMonth = startMonth === endMonth ? "" : endMonth;

      // const startYear = start.year;
      // const endYear = end.year;
      // const suffixYear = startYear === endYear ? "" : endYear;

      // const startDay = start.day;
      // const endDay = end.day;

      // switch (this.type) {
      //   case "month":
      //     return `${startMonth} ${startYear}`;
      //   case "week":
      //     return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
      //   case "day":
      //     return `${startMonth} ${startDay} ${startYear}`;
      // }
      // return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  created() {
    this.fetchEvents(this.getAccessToken);
  }
};
</script>

<style scoped>
</style>
