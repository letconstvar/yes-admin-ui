<template>
  <section class="y-radio-group">
    <slot></slot>
  </section>
</template>

<script>
import {defineComponent, provide} from "vue";

export default defineComponent({
  name: "y-radio-group",
  props: {
    modelValue: { type: [String, Number] }
  },
  setup(props, context) {
    provide('RadioGroup', context);
  }
})
</script>

<style scoped>

</style>