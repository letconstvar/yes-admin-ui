<template>
  <div class="row">
    <p class="title">radio</p>
    <y-radio label="1" v-model="gender">男</y-radio>
    <y-radio label="0" v-model="gender">女</y-radio>
  </div>

  <div class="row">
    <p class="title">radio-group</p>
    <y-radio-group v-model="radio_group">
      <y-radio label="one">one</y-radio>
      <y-radio label="two">two</y-radio>
      <y-radio label="three">three</y-radio>
    </y-radio-group>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import yRadio from "../../components/radio/radio.vue";
import yRadioGroup from "../../components/radio/radio-group.vue";

export default defineComponent({
  name: "index",
  components: { yRadio, yRadioGroup },

  setup() {
    const gender = ref('');
    const radio_group = ref('');

    return { gender, radio_group }
  }
})
</script>

<style scoped>
.title {
  margin-top: 20px;
  line-height: 40px;
}
</style>