<template>
  <y-dialog
      title="标题"
      width="50%"
      top="15vh"
      center
      v-model:visible="visible"
  >
    标题居中
    <template v-slot:footer>
      footer
    </template>
  </y-dialog>
  <y-button @click="visible = !visible" style="margin-right: 10px;">dialog center</y-button>

  <y-dialog
      title="标题"
      width="50%"
      top="15vh"
      v-model:visible="defaultDialog"
  >
    默认
    <template v-slot:footer>
      footer
    </template>
  </y-dialog>
  <y-button @click="defaultDialog = !defaultDialog">dialog</y-button>

</template>

<script lang="ts">
import yDialog from '../../components/dialog/dialog.vue';
import yButton from '../../components/button/button.vue';
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "index",
  components: { yButton, yDialog },
  setup() {
    const visible = ref<boolean>(false);
    const defaultDialog = ref<boolean>(false);

    return {
      visible,
      defaultDialog
    }
  }
})
</script>

<style scoped>

</style>