<script setup>
import {RouterView} from 'vue-router'
import AppBarDesktop from './components/OnlyDesktop/AppBarDesktop.vue'
import AppBarMobile from './components/OnlyPhone/AppBarMobile.vue'
import NavDrawerProductosDesktop from '@/components/NavAlgo.vue'
import NavDrawerServiciosDesktop from '@/components/OnlyDesktop/NavDrawerProductosDesktop.vue'
import NavDrawerDepartamentosDesktop from '@/components/OnlyDesktop/NavDrawerDepartamentosDesktop.vue'
import CustomFooter from '@/components/CustomFooter.vue'
</script>
<template>
  <v-app>
    <!--AppBar-->
    <AppBarDesktop v-if="this.$vuetify.display.name==='lg'"/>
    <AppBarMobile v-else/>
    <!--Desplegable Productos-->
    <NavDrawerProductosDesktop />
    <!--Desplegable Departamentos-->
    <NavDrawerDepartamentosDesktop />
    <!--Desplegable Servicios-->
    <NavDrawerServiciosDesktop />
    <!--Main-->
    <RouterView/>
    <!--Footer-->
    <CustomFooter />
  </v-app>
</template>
<style></style>