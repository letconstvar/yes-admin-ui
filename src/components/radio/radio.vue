<template>
  <label class="i-radio" :class="{ 'is-checked': label===model }">
    <span class="i-radio__input">
      <span class="i-radio__inner"></span>
      <input
          class="i-radio__original"
          type="radio"
          :value=label
          :name="name"
          v-model="model"
      />
    </span>
    <span class="i-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import {computed, defineComponent, inject} from "vue";

export default defineComponent({
  name: "y-radio",
  props: {
    label: { type: [String, Boolean, Number], default: '' },
    modelValue: null,
    name: { type: String, default: '' }
  },

  setup(props, { emit }) {
    const RadioGroup = inject('RadioGroup', '');

    const isRadioGroup: boolean = computed((): boolean => {
      return RadioGroup == "" ? false : true;
    });

    const model = computed({
      get(): string|boolean {
        return isRadioGroup.value ? RadioGroup.props.modelValue : props.modelValue;
      },
      set(value): void {
        isRadioGroup.value ? RadioGroup.emit('update:modelValue', value) : emit('update:modelValue', value);
      }
    });

    return { model }
  }
})
</script>

<style lang="less">
.i-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 20px;
  -moz-user-focus: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .i-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .i-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #ffffff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #ffffff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
  }
  .i-radio__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 0;
  }
  .i-radio__label {
    font-size: 14px;
    padding-left: 5px;
  }
}

.is-checked {
  .i-radio__input {
    .i-radio__inner {
      border-color: #9c27b0;
      background-color: #9c27b0;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .i-radio__label {
    color: #9c27b0;
  }
}
</style>