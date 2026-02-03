import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import GrandyPage from '../pages/GrandyPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/grandy', name: 'grandy', component: GrandyPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
