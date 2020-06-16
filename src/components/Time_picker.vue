<template>
  <v-menu
    ref="menu"
    v-model="show_menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="inputValue"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
       data-cy="time"
        v-model="inputValue"
        :label="label"
        prepend-icon="access_time"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="show_menu"
      v-model="inputValue"
      @input="onInputChange"
      full-width
      :min="min_time"
      @click:minute="$refs.menu.save(inputValue)"
      format="24hr"
      :scrollable="true"
    ></v-time-picker>
  </v-menu>
</template>

<script>
export default {
  data: function() {
    return {
      show_menu: false,
      inputValue: this.value,
    };
  },
  methods: {
    onInputChange() {
      this.$emit("input", this.inputValue);
    }
  },
  props: ["value", "label", "min_time"]
};
</script>