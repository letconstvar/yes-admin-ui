<template>
  <div>
    <p class="title">基础开关</p>
    <y-switch v-model="baseActive"></y-switch>
  </div>

  <div>
    <p class="title">自定义颜色</p>
    <y-switch v-model="colorActive" active-color="red" inactive-color="green"></y-switch>
  </div>

  <div>
    <p class="title">disabled 属性</p>
    <y-switch v-model="active" disabled></y-switch>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from "vue";
import ySwitch from "../../components/switch/switch.vue";

export default defineComponent({
  name: "index",
  components: {
    ySwitch
  },
  setup() {
    const state = reactive({
      baseActive: false,
      colorActive: false,
      active: false
    });

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
  .title {
    margin-top: 20px;
    line-height: 40px;
  }
</style>