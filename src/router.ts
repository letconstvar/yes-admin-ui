import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      name: '/path/title',
      path: '/path/title',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      name: '/path/title1',
      path: '/path/title1',
      component: () => import('./components/HelloWorld.vue')
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
      name: '/path/title3',
      path: '/path/title3',
      component: () => import('./components/HelloWorld.vue')
    }
  ]
})

export default router