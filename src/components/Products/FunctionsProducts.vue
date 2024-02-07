<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
const producto = productStore.getProduct
const listFunctions = producto.contenido.funciones
const cant = listFunctions.length
</script>

<template>
<v-row class="text-white mt-13 py-10 bBG" >
  <v-spacer></v-spacer>
  <v-col cols="10">
    <h1 class="text-center" style="color: #021e73">{{producto.subtitulo}}</h1>
    <v-row v-for="i in cant" class="mt-10 rowsF">
      <v-row>
        <v-col cols="12" style="color: #021e73">
          <p class="font-weight-bold">{{listFunctions[i-1].encabezado}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <h2>{{listFunctions[i-1].titulo}}</h2>
        </v-col>
        <v-col cols="12" md="8">
          {{listFunctions[i-1].desc}}
        </v-col>
      </v-row>

    </v-row>
  </v-col>
  <v-spacer></v-spacer>
</v-row>
</template>

<style scoped>
.rowsF{
  padding-bottom: 12px;
  border-bottom-color: #021e73;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
</style>