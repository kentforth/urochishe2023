import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {
        title: 'Главная'
      },
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/registration',
      meta: {
        title: 'Регистрация'
      },
      name: 'registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/details',
      meta: {
        title: 'Детали'
      },
      name: 'details',
      component: () => import('../views/Details.vue')
    }
  ]
})

router.afterEach((to: any, from, next) => {
  document.title = to.meta.title
})

export default router
