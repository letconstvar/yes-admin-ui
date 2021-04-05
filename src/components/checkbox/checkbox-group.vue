<template>
  <section class="y-checkbox-group">
    <slot></slot>
  </section>
</template>

<script>
import {defineComponent, provide} from "vue";

export default defineComponent({
  name: "y-checkbox-group",
  components: {},
  props: {
    modelValue: { type: Array }
  },
  setup(props, context) {
    provide('checkboxGroup', context);
  }
})
</script>