<template>
  <div class="nav-aside">
    <div class="logo">yes-admin-ui</div>
    <y-nav-menu
      v-model:active="activeItem" 
      :menu-data="menuData" 
      :indent="20"
      class="v-nav-menu"
      style="height: 100vh;">
    </y-nav-menu>
    <div class="nav-background-image"></div>   <!--  :style="navBackgroundImage" -->
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue';
import yNavMenu from '../components/nav-menu/nav-menu.vue';

export default defineComponent({
  name: 'nav-aside',
  components: {
    yNavMenu
  },

  setup(props, context) {
    const menuData = ref([
      {
        id: "1",
        icon: "dashboard",
        title: "Dashboard",
        // routePath: "/path/title1",
        children: [{
          id: "1-1",
          icon: "",
          title: "Dashboard-1",
          routePath: "/path/title1",
        }]
      },
      {
        id: "2",
        icon: "",
        title: "title2",
        children: [
          {
            id: "2-1",
            icon: "",
            title: "title2-1",
            children: [
              {
                id: "2-1-1",
                icon: "",
                title: "title2-1-1",
                routePath: "/path/title2-1-1",
              }
            ]
          },
          {
            id: "2-2",
            icon: "",
            title: "title2-2",
            routePath: "/path/title2-2",
          }
        ]
      },
      {
        id: "3",
        icon: "",
        title: "message",
        routePath: "/message",
      },
      {
        id: "4",
        icon: "",
        title: "button",
        routePath: "/button",
      },
      {
        id: "5",
        icon: "",
        title: "dialog",
        routePath: "/dialog",
      },
      {
        id: "6",
        icon: "",
        title: "switch",
        routePath: "/switch",
      }
    ]);

    let activeItem: any = ref<string>("1-1");

    let navBackgroundImage = ref({
      backgroundImage: "url('/images/sidebar-1.jpg')"
    });

    const getSelectedItemById = (id: number|string, menuData: any): string|number => {
      let title: string|number = '';
      menuData.forEach((item: any) => {
        const loop: any = (data: any) => {
          if (data.id == id) {
            title = data.title;
            return title;
          } else if (data.children !== undefined) {
            for (let i=0; i<data.children.length; i++) {
              loop(data.children[i])
            }
          }
        }
        loop(item);
      });
      return title;
    }

    watch(activeItem, (newValue: number | string) => {
      let title = getSelectedItemById(newValue, menuData.value);
      context.emit('getSelected', title);
    }, {immediate: true})

    return { menuData, activeItem, navBackgroundImage }
  }
})
</script>


<style lang="less" scoped>
.nav-aside {
  width: 100%;
  height: 100vh;
  box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  .logo {
    position: relative;
    width: 100%;
    height: 60px;
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 15px;
      height: 1px;
      width: calc(100% - 30px);
      background-color: hsla(0,0%,71%,.3);
    }
  }
  .v-nav-menu {
    padding: 20px 15px;
  }
  .nav-background-image {
    position: absolute;
    top: 0px;
    width: 260px;
    height: 100vh;
    opacity: 0.1;
    background-color: #fff;
    background-image: url('../../public/images/sidebar-1.jpg');
    background-size: cover;
    background-position: 50%;
    background-position-x: 50%;
    background-position-y: center;
    z-index: -1;
  }
}
</style>