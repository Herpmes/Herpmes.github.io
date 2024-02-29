<script setup>
import { computed } from 'vue'
import {useDrawerDesktopStore} from '@/stores/DrawerDesktopStore.js'
const drawerStore = useDrawerDesktopStore();
import {useAppBarStoreDesktop} from '@/stores/AppBarStoreDesktop.js'
const appbarStore= useAppBarStoreDesktop()
let selectedTopTab = computed(()=> appbarStore.getSelected);

import {useColorStore} from "@/stores/ColorStore.js";
const colorStore = useColorStore()
let color = computed(()=> colorStore.getColor);
</script>

<template>
  <v-app-bar fixed>

    <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH px-5">

    <!--Home-->
    <RouterLink to="/">
      <v-btn class="font-weight-bold" v-bind:color="(selectedTopTab===0)?'#24afff':''" :ripple="false"
             @click="appbarStore.setSelectedTo(0)" @mouseenter="drawerStore.closeAll()">
        Inicio
      </v-btn>
    </RouterLink>




    <!--About-->
    <RouterLink to="/about">
      <v-btn class="font-weight-bold" v-bind:color="(selectedTopTab===1)?'#24afff':''" :ripple="false"
             @click="appbarStore.setSelectedTo(1)" @mouseenter="drawerStore.closeAll()">
        Quienes Somos
      </v-btn>
    </RouterLink>

    <!--Servicios-->
    <RouterLink to="/services">
      <v-btn class="font-weight-bold" v-bind:color="(selectedTopTab===2)?'#24afff':''" :ripple="false"
             @click="appbarStore.setSelectedTo(2)" @mouseenter="drawerStore.closeAll()">
        Servicios
      </v-btn>
    </RouterLink>

    <!--Productos-->
    <v-btn class="font-weight-bold" v-bind:color="(selectedTopTab===3)?'#24afff':''" :ripple="false"
           @mouseenter="drawerStore.openProductos()">
      Productos
    </v-btn>

    <!-- Departamentos -->
    <v-btn class="font-weight-bold" v-bind:color="(selectedTopTab===4)?'#24afff':''" :ripple="false"
           @mouseenter="drawerStore.openDepartamentos()">
      Departamentos
    </v-btn>

    <v-spacer></v-spacer>



    <v-btn class="me-2" @click="colorStore.swapRed()" v-if="color==='blue'">
      <img alt="a" src="https://raw.githubusercontent.com/Herpmes/Herpmes.github.io/master/src/Img/daltonic_nobg.png" width="32px">
    </v-btn>

    <v-btn class="me-2" @click="colorStore.swapGreen()" v-if="color==='red'">
      <img alt="a" src="https://raw.githubusercontent.com/Herpmes/Herpmes.github.io/master/src/Img/daltonic_nobg.png" width="32px">
    </v-btn>

    <v-btn class="me-2" @click="colorStore.swapBlue()" v-if="color==='green'">
      <img alt="a" src="https://raw.githubusercontent.com/Herpmes/Herpmes.github.io/master/src/Img/daltonic_nobg.png" width="32px">
    </v-btn>
    <!--Contact Us-->
    <RouterLink to="/contact">
      <v-btn class="hover-anchor font-weight-bold" v-bind:color="(selectedTopTab===5)?'#24afff':''" :ripple="false"
             @click="appbarStore.setSelectedTo(5)" @mouseenter="drawerStore.closeAll()">
        CONTÁCTANOS
      </v-btn>
    </RouterLink>




    <!--Login-->
    <RouterLink to="/register">
    <v-btn class="font-weight-bold" :ripple="false" @mouseenter="drawerStore.closeAll()">Inicia Sesión</v-btn>
    </RouterLink>
  </v-app-bar>
</template>

<style scoped>

</style>