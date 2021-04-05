<template>
  <div class="container">
    <div class="aside-left">
      <nav-aside @getSelected="getSelected" />
    </div>

    <div class="right-container">
      <div class="header">
        <v-header :selected-item="selectedItem" />
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import navAside from './nav-aside.vue';
import vHeader from './v-header.vue';

export default defineComponent({
  name: 'index',
  components: {
    navAside,
    vHeader
  },

  setup() {
    let selectedItem = ref<null>(null);

    const getSelected = (title: any): void => { selectedItem.value = title;}

    return { getSelected, selectedItem }
  }
})
</script>


<style lang="less" scoped>
.container {
  .aside-left {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 260px;
  }
  .right-container {
    position: absolute;
    right: 0px;
    width: calc(100% - 260px);
    height: 100vh;
    background-color: #eee;
    z-index: -1;
    .main {
      z-index: 9999;
      padding: 0 20px;
    }
  }
}
</style>