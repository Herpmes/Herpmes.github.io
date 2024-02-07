<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
const producto = productStore.getProduct
const listChecks = producto.contenido.razones
const cant=listChecks.length
</script>

<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="10" md="8">
      <v-row class="mt-13" >
        <v-spacer></v-spacer>
        <v-col cols="6" md="4" v-for="n in cant">
          <v-row>
            <v-col cols="2" >
              <img src="https://raw.githubusercontent.com/aarricgra/aarricgra.github.io/main/Img/icons/check.png" alt="a" width="32px">
            </v-col>
            <v-col cols="8">
              {{listChecks[n-1]}}
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>