<template>
  <section class="v-header">
    <span class="v-header-left">{{selectedItem}}</span>
    <span class="v-header-right">
      <i class="material-icons icon-style" v-wave-ripple>notifications</i>
      <i class="material-icons icon-style" v-wave-ripple>person</i>
    </span>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'v-header',
  props: {
    selectedItem: { type: [String, Number] }
  }
})
</script>


<style lang="less" scoped>
.v-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 25px;
  height: 40px;
  line-height: 40px;
  .v-header-right {
    display: flex;
    flex-direction: row;
    .icon-style {
      cursor: pointer;
      width: 50px;
      height: 40px;
      color: rgb(114, 114, 114);
      line-height: 40px;
      text-align: center;
      border-radius: 3px;
    }
  }
}
</style>