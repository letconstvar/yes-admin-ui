<template>
  <router-link to="/patn/title">main</router-link>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: '',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
})
</script>
