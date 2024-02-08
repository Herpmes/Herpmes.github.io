<script setup>
import {RouterView} from 'vue-router'
import AppBarDesktop from './components/OnlyDesktop/AppBarDesktop.vue'
import AppBarMobile from './components/OnlyPhone/AppBarMobile.vue'
import NavDrawerProductosDesktop from '@/components/OnlyDesktop/NavDrawerProductosDesktop.vue'
import NavDrawerDepartamentosDesktop from '@/components/OnlyDesktop/NavDrawerDepartamentosDesktop.vue'
import CustomFooter from '@/components/CustomFooter.vue'
const phoneSized = ["xs","sm","md"]
</script>
<template>
  <v-app>
    <!--AppBar-->
    <AppBarDesktop v-if="!phoneSized.includes($vuetify.display.name)"/>
    <AppBarMobile v-else/>
    <!--Desplegable Productos-->
    <NavDrawerProductosDesktop v-if="!phoneSized.includes($vuetify.display.name)"/>
    <!--Desplegable Departamentos-->
    <NavDrawerDepartamentosDesktop v-if="!phoneSized.includes($vuetify.display.name)"/>
    <!--Main-->
    <RouterView/>
    <!--Footer-->
    <CustomFooter />
  </v-app>
</template>
<style></style>