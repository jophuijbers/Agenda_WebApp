<template>
  <div>
    <v-text-field v-model="text" @input="logText"></v-text-field>
    <p>from child: {{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    logText() {
      this.$emit('showText', this.text)
    }
  }
};
</script>