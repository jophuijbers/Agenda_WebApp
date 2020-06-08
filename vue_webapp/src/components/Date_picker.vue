<template>
  <v-menu
    v-model="show_menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="inputValue"
        :label="label"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker :min="min_date" v-model="inputValue" @input="onInputChange"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      show_menu: false,
      inputValue: this.value
    };
  },
  methods: {
    onInputChange() {
      this.show_menu = false;
      this.$emit("input", this.inputValue);
    }
  },
  props: ["value", "label", "min_date"]
};
</script>