<script setup>
import Banner from '@/components/Banner.vue'
import ReasonsProducts from '@/components/Products/ReasonsProducts.vue'
import FunctionsProducts from '@/components/Products/FunctionsProducts.vue'
import AdvantajesProducts from '@/components/Products/AdvantajesProducts.vue'
import DescProducts from '@/components/Products/DescProducts.vue'
import { useProductStore } from '@/stores/ProductStore.js'

const productStore = useProductStore()
import { computed } from 'vue'

const producto = computed(() => productStore.getProduct)
</script>
<template>
  <main class="mt-15">
    <Banner :title="producto.titulo" :subtitle="producto.contenido.titulo" />
    <ReasonsProducts v-if="producto.contenido.razones.length>0" />
    <DescProducts v-else />
    <FunctionsProducts />
    <AdvantajesProducts />
  </main>
</template>

<style scoped>

</style>