<template>
  <transition appear name="alert-fade" @after-leave="onClose">
    <div
      v-if="visible"
      :style="positionTop"
      :key="parentId"
      :class="['y-message', setClass()]">
      <i v-if="icon" class="material-icons y-message-icon__prefix">{{ icon }}</i>
      {{ message }}
      <i class="material-icons y-message-icon__suffix" @click="onClose">close</i>
    </div>
  </transition>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'message',
  props: {
    top: { type: String },
    parentId: { type: Number },
    icon: { type: String, default: null },
    type: { type: String, default: 'simple' },
    message: { type: String, default: null },
    duration: { type: Number, default: 3 },
    onClose: Function
  },

  setup(props) {
    const visible = ref<boolean>(true);

    const positionTop: object = {
      top: props.top
    }

    function setClass(): string {
      return `y-message__${props.type}`;
    }

    setTimeout(()=>{
      visible.value = false;
    }, props.duration * 1000)

    return { visible, positionTop, setClass }
  }
})
</script>


<style lang="less">
// transition
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: all 1s;
}
.alert-fade-enter-from,
.alert-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

// message base style
.y-message {
  position: fixed;
  z-index: 99999;
  padding: 20px 15px;
  background: #fff;
  min-width: 300px;
  white-space: nowrap;
  line-height: 20px;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(10 39 10 / 40%);
}

// icon
.y-message-icon__prefix {
  font-size: 20px;
  margin-right: 15px;
  vertical-align: text-bottom;
}
.y-message-icon__suffix {
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  float: right;
  margin-top: 5px;
}

// message type
.y-message__primary {
  background: #a72abd;
  color: #ffffff;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%);
}
.y-message__info {
  background: #00cae3;
  color: #ffffff;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
}
.y-message__success {
  background: #55b559;
  color: #ffffff;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 80 / 40%);
}
.y-message__danger {
  background: #f55145;
  color: #ffffff;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(244 67 54 / 40%);
}
.y-message__warning {
  background: #ff9e0f;
  color: #ffffff;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(255 152 0 / 40%);
}
</style>
