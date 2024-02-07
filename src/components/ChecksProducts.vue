<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
const producto = productStore.getProduct
const listChecks = producto.contenido.lista1
const cant=listChecks.length
const cantRows = Math.ceil(cant/3)
</script>

<template>
<v-row v-for="row in cantRows" class="mt-13">
  <v-spacer></v-spacer>
  <v-col cols="3" v-for="col in 3">
    <v-row>
      <v-col cols="2" v-if="3*(row-1)+(col-1)<cant">
        <img src="https://raw.githubusercontent.com/aarricgra/aarricgra.github.io/main/Img/icons/check.png" alt="a" width="32px">
      </v-col>
      <v-col cols="8">
        {{listChecks[3*(row-1)+(col-1)]}}
      </v-col>
    </v-row>
  </v-col>
  <v-spacer></v-spacer>
</v-row>
</template>

<style scoped>

</style>