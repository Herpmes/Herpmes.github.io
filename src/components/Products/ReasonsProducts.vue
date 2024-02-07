<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
const producto = productStore.getProduct
const listChecks = producto.contenido.razones
const cant=listChecks.length
</script>

<template>
  <v-row class="mt-8">
    <v-spacer></v-spacer>
    <v-col cols="10" md="8">
      <h1 class="text-center">¿Cómo te puede ayudar {{producto.titulo}}?</h1>
      <v-row class="mt-13" >
        <v-col cols="12" v-for="n in cant">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="1">
              <img src="https://raw.githubusercontent.com/aarricgra/aarricgra.github.io/main/Img/icons/check.png" alt="" width="32px" class="imageRight">
            </v-col>
            <v-col cols="7">
              {{listChecks[n-1]}}
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>