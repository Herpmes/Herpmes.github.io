<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
import { computed } from 'vue'
const producto = computed(()=>productStore.getProduct)
const listAdvantajes = computed(()=>producto.value.contenido.extras)
const cant=computed(()=>listAdvantajes.value.length)
</script>

<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="11" md="9">
      <v-row class="mt-13" >
        <v-spacer></v-spacer>
        <v-col cols="12" xs="6" md="4" v-for="n in cant" :key="n">
          <!--Campo-->
          <v-row>
            <v-col cols="2" >
              <img :src="listAdvantajes[n-1].icono" alt="a" width="32px" class="imageRight">
            </v-col>
            <v-col cols="8">
              <v-row>
                <v-col cols="12" class="font-weight-bold text-h6">
                  {{listAdvantajes[n-1].titulo}}
                </v-col>
                <v-col cols="12">
                  {{listAdvantajes[n-1].desc}}
                </v-col>
              </v-row>
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