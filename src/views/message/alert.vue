<template>
  <section class="alert-container">
    <div class="header">
      <h3>Message</h3>
    </div>

    <div class="main">
      <y-button @click="message('primary')">primary</y-button>
      <y-button type="info" @click="message('info')">info</y-button>
      <y-button type="info" @click="message('success')">success</y-button>
      <y-button type="info" @click="message('warning')">warning</y-button>
      <y-button type="danger" @click="message('danger')">danger</y-button>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Message from '../../components/message/message';
import yButton from '../../components/button/button.vue';

export default defineComponent({
  components: {
    yButton
  },
  setup() {
    const message = (message: string): void => {
      // const types = ['primary', 'info', 'success', 'warning', 'danger'];
      // let index = getRndInteger(0, 4);
      // Message({
      //   message: types[index],
      //   type: types[index],
      //   icon: 'add_alert'
      // })
      Message({
        message: message,
        type: message,
        icon: 'add_alert'
      })
    }

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    return { message }
  }
})
</script>


<style lang="less" scoped>
  .alert-container {
    position: relative;
    border: 0;
    margin-bottom: 30px;
    margin-top: 30px;
    padding-top: 100px;
    border-radius: 6px;
    color: #333;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    .header {
      position: absolute;
      top: -15px;
      left: 15px;
      width: calc(100% - 30px);
      height: 100px;
      box-sizing: border-box;
      padding: 15px 10px;
      background: linear-gradient(60deg,#ab47bc,#8e24aa);
      border-radius: 3px;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
      h3 {
        font-size: 24px;
        font-weight: 200;
        color: #fff;
        line-height: 35px;
      }
    }
    .main {
      padding: 20px;
      button {
        margin-right: 10px;
      }
    }
  }
</style>