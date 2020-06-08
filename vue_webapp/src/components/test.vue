<template>
  <div>
    <input type="text" :value="value" @input="updateValue($event.target.value)"/>
    <v-text-field :value="value" @input="updateValue($event.target.value)"></v-text-field>
  </div>
</template>

<script>
export default {
  date() {
    return {
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  },
  props: ['value'],
};
</script>