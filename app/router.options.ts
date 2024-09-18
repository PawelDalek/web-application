import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: _routes => [
    {
      name: 'main',
      path: '/',
      component: () => import('~/pages/main.vue').then(r => r.default || r),
    },
    {
      name: 'Activepackage',
      path: '/Activepackage',
      component: () => import('~/pages/Activepackage.vue').then(r => r.default || r),
    },
    {
      name: 'Menu',
      path: '/simpleMenu',
      component: () => import('~/components/simpleMenu.vue').then(r => r.default || r),
    },
    {
      name: 'Home',
      path: '/home',
      component: () => import('~/pages/Home.vue').then(r => r.default || r),
    },
  ],
}
