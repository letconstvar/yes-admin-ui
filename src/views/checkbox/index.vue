<template>
  <div>
    <p class="title">单选</p>
    <y-checkbox v-model="checked">test</y-checkbox>
  </div>

  <div>
    <p class="title">多选</p>
    <y-checkbox-group v-model="checkbox_group">
      <y-checkbox label="one"></y-checkbox>
      <y-checkbox label="two"></y-checkbox>
      <y-checkbox label="three"></y-checkbox>
    </y-checkbox-group>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import yCheckbox from "../../components/checkbox/checkbox.vue";
import yCheckboxGroup from "../../components/checkbox/checkbox-group.vue";

export default defineComponent({
  name: "index.vue",
  components: {yCheckbox, yCheckboxGroup},

  setup() {
    const checked = ref(true);
    const checkbox_group = ref(['one']);

    return { checked, checkbox_group }
  }
})
</script>

<style scoped>
.title {
  margin-top: 20px;
  line-height: 40px;
}
</style>