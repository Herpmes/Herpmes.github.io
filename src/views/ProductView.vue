<script setup>
import Banner from '@/components/Banner.vue'
import ReasonsProducts from '@/components/Products/ReasonsProducts.vue'
import FunctionsProducts from '@/components/Products/FunctionsProducts.vue'
import AdvantajesProducts from '@/components/Products/AdvantajesProducts.vue'
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
const producto = productStore.getProduct
</script>
<template>
<main style="margin-top: 60px">
  <Banner :title="producto.titulo" :subtitle="producto.contenido.titulo"/>
  <ReasonsProducts/>
  <FunctionsProducts/>
  <AdvantajesProducts/>
</main>
</template>

<style scoped>

</style>