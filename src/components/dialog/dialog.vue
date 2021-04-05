<template>
  <teleport to="body">
    <transition name="slide-fade">
      <section class="v-dialog__wrapper" v-if="visible" @click.self="handleClose">
        <div class="v-dialog" :style="{ width:width, marginTop:top }">
          <div :class="['v-dialog__header', {'is-center': center}]">
            <slot name="title">
              <span class="v-dialog__title">{{ title }}</span>
            </slot>
            <button class="v-dialog__headerbtn" @click="handleClose">
              x
            </button>
          </div>
          <div class="v-dialog__body">
            <slot>
              <span>这是一条信息</span>
            </slot>
          </div>
          <div :class="['v-dialog__footer', {'is-center': center}]" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </section>
    </transition>
  </teleport>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "y-dialog",
  props: {
    title: { type: String, default: '' },
    width: { type: String, default: '30%' },
    top: { type: String, default: '15vh' },
    visible: { type: Boolean, default: false },
    center: { type: Boolean, default: false }
  },
  setup (props, context) {
    function handleClose () {
      context.emit('update:visible', false)
    }
    return {
      handleClose
    }
  }
})
</script>

<style lang="less">
/* 背景 */
.v-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .v-dialog {
    position: relative;
    margin: 15vh auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    background-color: #ffffff;
    .v-dialog__header {
      padding: 20px 20px 10px;
      .v-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
    }
    .v-dialog__headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      display: inline-block;
      color: #303133;
    }
    .v-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-wrap: break-all;
    }
    .v-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
    .is-center {
      text-align: center;
    }
  }
}

/* css 动画 */
.slide-fade-enter-active {
  animation: fade 0.3s;
}
.slide-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>