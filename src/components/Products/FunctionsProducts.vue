<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
import { computed } from 'vue'
const producto = computed(()=>productStore.getProduct)
const listFunctions = computed(()=>producto.value.contenido.funciones)
const cant = computed(()=>listFunctions.value.length)

import {useColorStore} from "@/stores/ColorStore.js";
const colorStore = useColorStore()
let color = computed(()=> colorStore.getColor);
</script>

<template>
<v-row :class="['text-white','mt-13', 'py-10', color==='blue' ? 'bBG':(color==='red'?'rBG':'gBG')]" >
  <v-spacer></v-spacer>
  <v-col cols="10" md="8">
    <h1 class="text-center" style="color: #021e73">{{producto.subtitulo}}</h1>
    <v-row v-for="i in cant" class="mt-10 rowsF" :key="i">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" style="color: #021e73">
            <p class="font-weight-bold">{{listFunctions[i-1].encabezado}}</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12" md="4" lg="3">
            <h2 class="text-left">{{listFunctions[i-1].titulo}}</h2>
          </v-col>
          <v-col cols="12" md="8" lg="9">
            {{listFunctions[i-1].desc}}
          </v-col>
        </v-row>
      </v-col>
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