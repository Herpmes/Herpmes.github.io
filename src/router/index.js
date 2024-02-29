import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductView from '@/views/ProductView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AnchorView from "@/views/Departments/AnchorView.vue";

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
      path: '/contact',
      name: 'Constact',
      component: ContactView
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/anchor',
      name: 'Anchor',
      component: AnchorView
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
