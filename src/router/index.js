import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductView from '@/views/ProductView.vue'
import ServicesView from '@/views/ServicesView.vue'
import NuixoView from "@/views/Departments/Nuix/NuixoView.vue";
import FotosGrupoView from "@/views/Departments/Nuix/FotosGrupoView.vue";

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
      path: "/nuixo",
      name: "Nuixo",
      component: NuixoView
    },
    {
      path: "/nuixo/imgs",
      name: "Nuixó_Fotos",
      component: FotosGrupoView
    }

  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
