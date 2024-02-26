<script setup>
import {useDrawerPhoneStore} from "@/stores/DrawerPhoneStore.js";

const drawerStore = useDrawerPhoneStore()
import {useProductStore} from '@/stores/ProductStore.js'

const productStore = useProductStore()

import ProductosJson from "/src/json/Productos.json"

const productos = ProductosJson
let cant = productos.length
</script>

<template>
  <v-navigation-drawer v-model="drawerStore.isOpen" location="left">
    <!--Inicio-->
    <RouterLink to="/">
      <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Inicio"
             @click="drawerStore.setClose()"/>
    </RouterLink>

    <!--About-->
    <RouterLink to="/about">
      <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Sobre Nosotros"
             @click="drawerStore.setClose()"/>

    </RouterLink>

    <!--Servicios-->
    <RouterLink to="/services">
      <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Servicios"
             @click="drawerStore.setClose()"/>
    </RouterLink>

    <!--Productos-->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title class="text-center pa-0" style="text-align: center">
          <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Productos" variant="text"/>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <RouterLink to="/product" v-for="n in cant" :key="n">
            <v-row>
              <v-col cols="3">
                <img id="image-934-74223" alt="AHORA CRM Software de Gestión Comercial"
                     :src="productos[n-1].image" width="40" class="ml-2 mt-2">
              </v-col>
              <v-col cols="8" class="my-auto">
                <h4>
                  {{ productos[n - 1].titulo }}
                </h4>
              </v-col>
            </v-row>
            <v-divider/>
          </RouterLink>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <!--Departamentos-->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title class="text-center pa-0" style="text-align: center">
          <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Departamentos" variant="text"/>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <RouterLink to="/anchor">
            <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Anchor" variant="text"/>
          </RouterLink>
          <RouterLink to="/code">
            <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="CodeCarfters" variant="text"/>
          </RouterLink>
          <RouterLink to="/nuixo">
            <v-btn :ripple="false" width="100%" height="60px" class="font-weight-bold" text="Nuixo" variant="text"/>
          </RouterLink>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<style scoped>
</style>