<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
import { computed } from 'vue'
const producto = computed(()=>productStore.getProduct)
</script>

<template>
  <v-row class="mt-8" v-for="(linea, index) in producto.contenido.desc.split('\n')" :key="index">
    <v-spacer></v-spacer>
    <v-col cols="10" md="8">
      <h4>{{linea}}</h4>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>