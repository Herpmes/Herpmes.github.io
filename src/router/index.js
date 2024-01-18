import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeView2 from '../views/HomeView2.vue'
import AboutView from "@/views/AboutView.vue";
import FinalView from "@/views/GranFinal.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/2',
      name: 'home2',
      component: HomeView2
    },
    {
      path: '/GRANFINAL',
      name: 'GranFinal',
      component: FinalView
    },
    {
      path: '/contact',
      name: 'Constact',
      component: ContactView
    }
  ]
})

export default router
