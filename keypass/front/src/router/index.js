import { createRouter, createWebHistory } from 'vue-router'
import ConnexionView from '../views/ConnexionView.vue'
import HomeView from '../views/HomeView.vue'
import LoaderView from '../views/LoaderView.vue'
import TestView from '../views/TestView.vue'
import CreationCompte from '../views/CreationCompte.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/loader',
      name: 'loader',
      component: LoaderView
    },
    {
      path: '/accountcreation',
      name: 'accountcreation',
      component: CreationCompte
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
