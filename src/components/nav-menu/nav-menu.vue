<template>
  <ul class="y-menu-container">
    <y-sub-menu 
      :menuData="menuData" 
      :active="active" 
      :indent="indent" 
      :activeColor="activeColor">
    </y-sub-menu>
  </ul>
</template>


<script lang="ts">
import { defineComponent, nextTick, provide, watchEffect } from 'vue';
import ySubMenu from './sub-menu.vue';

export default defineComponent({
  name: 'y-nav-menu',
  components: { ySubMenu },
  emits: ['update:active'],
  props: {
    menuData: {type: Array, required: true},
    indent: {type: Number},
    active: {type: [String, Number]},
    activeColor: {type: String, default: '#9c27b0'}
  },
  
  setup(props, context) {
    initMenuData(props.menuData, 0);

    provide('updateActive', function (id: string|number) {
      context.emit('update:active', id); 
    });
  }
})

const initMenuData = (menuData: any, level: number): void => {
  for (let i=0; i<menuData.length; i++) {
    menuData[i]['level'] = level;
    if (menuData[i].children !== undefined) {
      menuData[i]['expend'] = false;
      initMenuData(menuData[i].children, level+1);
    }
  }
}

</script>


<style lang="less">
.y-menu-container {
  list-style: none;
}
</style>