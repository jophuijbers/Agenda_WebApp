<template>
  <div>
    <v-time-picker v-model="time" @input="onInputChange" @click:minute="$refs.menu.save(time)"></v-time-picker>
    <p>from child: {{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: this.value,
    };
  },
  props: ["value"],
  methods: {
    onInputChange() {
      this.$emit("input", this.time);
    }
  }
};
</script>