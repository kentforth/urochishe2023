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
      component: () => import('../views/HomeView.vue')
    }
  ]
})

router.beforeEach((to: any, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
