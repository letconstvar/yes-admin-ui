<template>
  <button :class="[setType(), setShape(), setSize()]" v-wave-ripple>
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "y-button",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    shape: {
      type: String
    },
    size: {
      type: String,
      default: "middle"
    }
  },

  setup(props) {
    function setType(): string {
      return `y-button__${props.type}`
    }

    function setShape(): string {
      if (props.shape !== undefined) return `y-button__${props.shape}`;
    }

    function setSize(): string {
      return `y-button__${props.size}`
    }

    return {
      setType,
      setShape,
      setSize
    }
  }
})
</script>

<style lang="less">
  .baseButton {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow,transform;
  }
  button {
    padding: 0px;
    margin: 0px;
    outline: none;
    border: none;
  }

  // type
  .y-button__primary {
    .baseButton();
    color: #fff;
    background-color: #9c27b0;
    border-color: #9c27b0;
    box-shadow: 0 2px 2px 0 rgb(156 39 176 / 14%),
                0 3px 1px -2px rgb(156 39 176 / 20%),
                0 1px 5px 0 rgb(156 39 176 / 12%);
    &:hover {
      box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%);
    }
  }
  .y-button__info {
    .baseButton();
    color: #333333;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
                0 3px 1px -2px rgb(0 0 0 / 20%),
                0 1px 5px 0 rgb(0 0 0 / 12%);
    &:hover {
      box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 0 0 / 40%);
    }
  }
  .y-button__danger {
    .baseButton();
    color: #ffffff;
    background-color: #ff7875;
    box-shadow: 0 2px 2px 0 rgb(244 67 54 / 14%),
                0 3px 1px -2px rgb(244 67 54 / 20%),
                0 1px 5px 0 rgb(244 67 54 / 12%);
    &:hover {
      box-shadow: 0 4px 20px 0 rgb(244 67 54 / 14%), 0 7px 10px -5px rgb(244 67 54 / 40%);
    }
  }
  .y-button__link {
    .baseButton();
    color: #1890ff;
  }
  .y-button__dashed {
    .baseButton();
    color: #333333;
    border: 1px dashed #3c4858;
    box-shadow: none;
    &:hover {
      color: #9c27b0;
      border-color: #9c27b0;
    }
  }

  // size
  .y-button__middle {
    padding: 8px 15px;
  }
  .y-button__small {
    padding: 5px 10px;
  }
  .y-button__large {
    padding: 10px 17px;
  }

  // shape
  .y-button__circle {
    padding: 0px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .y-button__round {
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
    border-radius: 32px;
  }
</style>