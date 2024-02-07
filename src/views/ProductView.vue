<script setup>
import Banner from '@/components/Banner.vue'
import ChecksProducts from '@/components/ChecksProducts.vue'
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
const producto = productStore.getProduct
</script>
<template>
<main style="margin-top: 60px">
  <Banner :title="producto.titulo" :subtitle="producto.subtitulo"/>
  <ChecksProducts/>
</main>
</template>

<style scoped>

</style>