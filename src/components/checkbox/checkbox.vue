<template>
  <section class="y-checkbox" :class="{ 'is-checked': isChecked }" @click="handleClick()">
    <span class="y-checkbox__input">
      <span class="y-checkbox__inner"></span>
      <input
          class="y-checkbox__original"
          type="checkbox"
          :name="name"
          :value="label"
          v-model="model"
      />
    </span>
    <span class="y-checkbox__label">
      <slot></slot>
      <template v-if="!isSlots"> {{label}} </template>
    </span>
  </section>
</template>

<script lang="ts">
import {defineComponent, computed, inject, PropType} from "vue";

interface label {
  type: string|number
}

export default defineComponent({
  name: "y-checkbox",
  props: {
    modelValue: { type: Boolean, default: false },
    label: {
      type: Object as PropType<label>,
      default: ''
      // type: String, default: ''
    },
    name: { type: String, default: '' }
  },

  setup(props, { emit, slots }) {
    const checkboxGroup: any = inject('checkboxGroup', '');

    const isSlots = slots.default;

    const isCheckboxGroup = computed((): boolean => {
      return checkboxGroup == "" ? false : true;
    })

    const isChecked = computed((): string|boolean => {
      return isCheckboxGroup.value
        ? checkboxGroup.props.modelValue.includes(props.label) ? props.label : false
        : props.modelValue;
    })

    const model = computed({
      get(): string|boolean {
        return isCheckboxGroup.value ? checkboxGroup.props.modelValue : props.modelValue;
      },
      set(value): void {
        isCheckboxGroup.value ? checkboxGroup.emit('update:modelValue', value) : emit('update:modelValue', value);
      }
    })

    function handleClick(): void {
      isCheckboxGroup.value
        ? checkboxGroup.props.modelValue.includes(props.label)
          ? checkboxGroup.props.modelValue.splice(checkboxGroup.props.modelValue.indexOf(props.label), 1)
          : checkboxGroup.props.modelValue.push(props.label)
        : emit('update:modelValue', !props.modelValue);
    }

    return { handleClick, isChecked, model, isSlots }
  }
})
</script>

<style lang="less">
  .y-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 20px;
    .y-checkbox__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      margin-right: 5px;
      .y-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #ffffff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),
                    background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        &:after {
          box-sizing: border-box;
          content: "";
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .y-checkbox__original {
        opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .y-checkbox__original {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }

  // checked
  .is-checked {
    .y-checkbox__input {
      .y-checkbox__inner {
        background-color: #9c27b0;
        color: #9c27b0;
        &:after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    .y-checkbox__label {
      color: #9c27b0;
    }
  }

</style>