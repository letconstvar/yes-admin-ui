<template>
  <div class="button-type">
    <p class="title">按钮类型</p>
    <y-button class="margin-10">primary</y-button>
    <y-button class="margin-10" type="info">info</y-button>
    <y-button class="margin-10" type="danger">danger</y-button>
    <y-button class="margin-10" type="dashed">dashed</y-button>
    <y-button class="margin-10" type="link">link</y-button>
  </div>

  <div class="button-size">
    <p class="title">按钮大小</p>
    <y-button class="margin-10" size="small">primary</y-button>
    <y-button class="margin-10" type="info" size="middle">info</y-button>
    <y-button class="margin-10" type="danger" size="large">danger</y-button>
  </div>

  <div class="button-shape">
    <p class="title">按钮形状</p>
    <y-button class="margin-10">primary</y-button>
    <y-button class="margin-10" type="info" shape="circle">circle</y-button>
    <y-button class="margin-10" type="danger" shape="round">round</y-button>
  </div>

  <div class="button-icon">
    <p class="title">按钮图标</p>
    <y-button class="margin-10">
      <template #icon>
        <i class="material-icons" style="font-size: 16px; vertical-align: middle; margin-right: 3px;">system_update_alt</i>
      </template>
      download
    </y-button>
    <y-button class="margin-10" type="info" shape="circle">
      <i class="material-icons" style="font-size: 16px; vertical-align: middle;">system_update_alt</i>
    </y-button>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import yButton from '../../components/button/button.vue';

export default defineComponent({
  name: "index",
  components: { yButton },
  setup() {

  }
})
</script>

<style scoped>
  .margin-10 {
    margin-right: 10px;
  }
  .title {
    margin-top: 20px;
    line-height: 40px;
  }
</style>