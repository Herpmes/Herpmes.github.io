<script setup>
import {useDrawerDesktopStore} from '@/stores/DrawerDesktopStore.js'
const drawerStore = useDrawerDesktopStore()
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
import {useAppBarStoreDesktop} from '@/stores/AppBarStoreDesktop.js'
const appbarStore = useAppBarStoreDesktop()

import ProductosJson from "/src/json/Productos.json"
const productos = ProductosJson
let cant=productos.length
</script>

<template>
  <v-navigation-drawer
    v-model="drawerStore.getDrawerProductos"
    location="top"
    style="max-height: none; height: fit-content"
    @mouseleave="drawerStore.closeProductos()" class="pa-9 mt-n1">

      <h5 class="text-blue text-h5 text-center">Complementa tu Sistema de información</h5>

      <!--Container-->
      <v-row class="ma-3">
        <!--Bucle Columnas-->
        <v-col cols="3" class="mt-5" v-for="n in cant" :key="n">
          <!--Bucle Elementos-->
          <v-row v-if="n<=cant"
                 @click="productStore.swapProduct(productos[n-1]);
                 drawerStore.closeProductos();
                  appbarStore.setSelectedTo(3)">
            <!-- Solo Dios y yo sabemos como lo hemos hecho -->
            <v-col>
              <img id="image-934-74223" alt="AHORA CRM Software de Gestión Comercial"
                   :src="productos[n-1].image" width="50">
              <RouterLink :to="{path:'/product',replace:true}">
                <h4 id="headline-1516-74223" class="">{{productos[n-1].titulo}}</h4>
                <div id="text_block-1517-74223" class="text-grey">{{productos[n-1].subtitulo}}</div>
              </RouterLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-navigation-drawer>
</template>

<style scoped>

.desc:hover {
  color: #00b0ff;
}

</style>