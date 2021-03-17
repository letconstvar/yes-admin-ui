<template>
  <li v-for="item in menuData" :key="item.id">

    <li v-if="item.routePath !== undefined">
      <router-link :to="item.routePath">
        <li 
          v-wave-ripple
          :key="item.id"
          :style="{ paddingLeft: `${basePaddingLeft + item.level*indent}px` }" 
          :class="['y-menu-title', {'y-menu-title__isActive': isActive(item.id) && item.children == undefined}]"
          @click="item.expend = !item.expend, handleSelected(item)">
          <!-- prefix icon -->
          <i class="material-icons y-menu-icon__prefix" v-if="hasIcon(item)">{{ item.icon }}</i>
          {{ item.title }}
        </li>
      </router-link>
    </li>
    <li v-else>
      <li 
        :key="item.id"
        :style="{ paddingLeft: `${basePaddingLeft + item.level*indent}px` }" 
        :class="['y-menu-title', {'y-menu-title__isActive': isActive(item.id) && item.children == undefined}]"
        @click="item.expend = !item.expend, handleSelected(item)">
        <!-- prefix icon -->
        <i class="material-icons y-menu-icon__prefix" v-if="hasIcon(item)">{{ item.icon }}</i>
        {{ item.title }}
        <!-- suffix icon -->
        <i 
          class="material-icons y-menu-icon__suffix" 
          :class="{'y-menu-expandIcon__isExpand': item.expend}">
          expand_more
        </i>
      </li>
    </li>

    <!-- children -->
    <el-collapse>
      <li v-if="item.children !== undefined && item.expend">
        <y-sub-menu
          :menuData=item.children
          :indent="indent"
          :active="active"
          :activeColor="activeColor">
        </y-sub-menu>
      </li>
    </el-collapse>

  </li>
</template>


<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import elCollapse from '../el-collapse/el-collapse.vue'

export default defineComponent({
  name: 'y-sub-menu',
  components: { elCollapse },
  props: {
    menuData: {type: Array, required: true},
    indent: {type: Number},
    active: {type: [String, Number]},
    activeColor: {type: String, default: '#9c27b0'}
  },

  setup(props) {
    const basePaddingLeft = ref<number>(13);
    const updateActive: void = inject('updateActive');
    const isActive = (id: number|string): boolean => id==props.active;

    const handleSelected = (item: any): void => {
      if (item.children == undefined) {
        updateActive(item.id)
      };
    }

    const hasIcon = (item: any): boolean => {
      if (item.icon === undefined || item.icon === "") {
        return false
      }
      return true
    }

    return { isActive, handleSelected, basePaddingLeft, hasIcon }
  }
})
</script>


<style lang="less">
a {
  text-decoration: none;
  color: black;
}
.y-menu-title {
  position: relative;
  cursor: pointer;
  color: #3c4858;
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  .y-menu-icon__suffix {
    position: absolute;
    top: 13px;
    right: 10px;
    transition: .5s;
    -ms-transition:rotate(180deg);     /* Internet Explorer */
    -moz-transition:rotate(180deg);    /* Firefox */
    -webkit-transition:rotate(180deg); /* Safari 和 Chrome */
    -o-transition:rotate(180deg);      /* Opera */
  }
  .y-menu-icon__prefix {
    margin-right: 10px;
    vertical-align: text-bottom;
  }
  .y-menu-expandIcon__isExpand {
    transform: rotate(180deg);
    -ms-transform:rotate(180deg);     /* Internet Explorer */
    -moz-transform:rotate(180deg);    /* Firefox */
    -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
    -o-transform:rotate(180deg);      /* Opera */
  }
}
// isAcitve
.y-menu-title__isActive {
  border-radius: 3px;
  color: #fff;
  background-color: #9c27b0;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%);
}
</style>