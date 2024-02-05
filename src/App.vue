<script setup>
import {RouterView} from 'vue-router'
import AppBarDesktop from './components/AppBarDesktop.vue'
import AppBarMobile from './components/AppBarMobile.vue'
import NavDrawerProductosDesktop from '@/components/NavDrawerProductosDesktop.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import Departamentos from '@/components/Departamentos.vue'
</script>
<template>
  <v-app>
    <!--AppBar-->
    <AppBarDesktop v-if="this.$vuetify.display.name!=='xs'"/>
    <AppBarMobile v-else/>
    <!--Desplegable Productos-->
    <NavDrawerProductosDesktop />
    <Departamentos />
    <!--Main-->
    <RouterView/>
    <!--Footer-->
    <CustomFooter />
  </v-app>
</template>
<style></style>