import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductView from '@/views/ProductView.vue'
import ServicesView from '@/views/ServicesView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NuixoView from "@/views/Departments/Nuix/NuixoView.vue";
import NuixoFotosView from "@/views/Departments/Nuix/FotosGrupoView.vue";
import AboutAnchorView from '@/views/Departments/Anchor/AboutAnchorView.vue'
import AnchorView from '@/views/Departments/Anchor/AnchorView.vue'

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
    },{
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
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },

    {
      path: '/nuixo',
      name: 'Nuixó',
      component: NuixoView
    },
    {
      path: '/nuixoFotos',
      name: 'Nuixó_Fotos',
      component: NuixoFotosView
    },
    {
      path: '/anchor',
      name: 'anchor',
      component: AnchorView
    },
    {
      path: '/aboutAnchor',
      name: 'aboutAnchor',
      component: AboutAnchorView
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
