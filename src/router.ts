import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      name: '/path/title',
      path: '/path/title',
      component: () => import('./views/Dashboard/test1.vue')
    },
    {
      name: '/path/title1',
      path: '/path/title1',
      component: () => import('./views/Dashboard/test1.vue')
    },
    {
      name: '/path/title2-1',
      path: '/path/title2-1',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      name: '/path/title2-1-1',
      path: '/path/title2-1-1',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      name: '/path/title2-2',
      path: '/path/title2-2',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      name: 'message',
      path: '/message',
      component: () => import('./views/message/alert.vue')
    },
    {
      name: 'button',
      path: '/button',
      component: () => import('./views/button/index.vue')
    },
    {
      name: 'dialog',
      path: '/dialog',
      component: () => import('./views/dialog/index.vue')
    },
    {
      name: 'switch',
      path: '/switch',
      component: () => import('./views/switch/index.vue')
    },
    {
      name: 'checkbox',
      path: '/checkbox',
      component: () => import('./views/checkbox/index.vue')
    },
    {
      name: 'radio',
      path: '/radio',
      component: () => import('./views/radio/index.vue')
    },
  ]
})

export default router