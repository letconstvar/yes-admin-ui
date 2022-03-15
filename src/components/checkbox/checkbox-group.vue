<template>
  <section class="y-checkbox-group">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {defineComponent, provide} from "vue";

export default defineComponent({
  name: "y-checkbox-group",
  props: {
    modelValue: { type: Array }
  },
  setup(props, context) {
    provide('checkboxGroup', context);
  }
})
</script>