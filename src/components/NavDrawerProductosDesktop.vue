<script setup>
import {useAppBraDesktopStore} from '@/stores/AppBarDesktopStore.js'
const drawerStore = useAppBraDesktopStore()
</script>

<template>
  <v-navigation-drawer
    v-model="drawerStore.getDrawer"
    location="top"
    margin-top="-5px" @mouseleave="drawerStore.swap()">
    <v-row class="pa-10">
      <v-col cols="3" >
        <h4 class="tituloProductos">GRANDES EMPRESAS</h4>
        <v-row style="margin-top: 5px">
          <v-col cols="2">
            foto
          </v-col>
          <v-col cols="10">
            texto
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <h4 class="tituloProductos">PYMES</h4>
      </v-col>
      <v-col cols="3">
        <h4 class="tituloProductos">AUTÓNOMOS</h4>
      </v-col>
      <v-col cols="3" style="color: #00b0ff;font-weight: bold">
        <h4 class="tituloProductos">HERRAMIENTAS DE DESARROLLO</h4>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<style scoped>
.tituloProductos{
  color: #00b0ff;font-weight: bold
}
</style>