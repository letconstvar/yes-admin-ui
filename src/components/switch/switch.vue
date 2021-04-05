<template>
  <div class="y-switch" :class="{ 'is-checked': modelValue, 'is-disabled': disabled }" @click="handleClick">
    <!-- 表单 name 属性 -->
    <input class="i___checkbox" type="checkbox" :name="name" ref="input_checkbox">
    <span class="y-switch__core" ref="core">
      <span class="y-switch__button"></span>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from "vue";

export default defineComponent({
  name: "y-switch",
  props: {
    modelValue: { type: Boolean, default: false },
    activeColor: { type: String, default: '' },
    inactiveColor: { type: String, default: '' },
    name: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },

  setup(props, { emit }) {
    const input_checkbox = ref<any>(null);
    const core = ref<any>(null);

    function setColor(): void {
      if (props.activeColor || props.inactiveColor) {
        let color = props.modelValue ? props.inactiveColor : props.activeColor;
        core.value.style.borderColor = color;
        core.value.style.backgroundColor = color;
      }
    }

    function handleClick(): void {
      if (props.disabled) return;
      emit('update:modelValue', !props.modelValue)
      nextTick(()=>{   // 数据更新时，修改颜色
        setColor();
        input_checkbox.value = props.modelValue;
      });
    }

    onMounted(() => {
      setColor();
      input_checkbox.value = props.modelValue;
    });

    return {
      handleClick,
      input_checkbox,
      core
    }
  }
})
</script>

<style lang="less">
.y-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .i___checkbox {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
  }
  .y-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .y-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #ffffff;
    }
  }
}
/* checked style */
.y-switch.is-checked .y-switch__core {
  border-color: #9c27b0;
  background-color: #9c27b0;
  .y-switch__button {
    transform: translateX(20px);
  }
}
// disabled
.is-disabled {
  cursor: not-allowed;
  opacity: .4;
  .y-switch__core {
    cursor: not-allowed;
  }
}

</style>