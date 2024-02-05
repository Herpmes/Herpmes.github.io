<script setup>
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/BannerDesktop.vue'
import ContactFormDesktop from '@/components/ContactFormDesktop.vue'
import ContactCardsDesktop from '@/components/ContactCardsDesktop.vue'
const banner = Banners
</script>

<template>
  <main style="margin-top: 60px">
    <!--Banner-->
    <BannerDesktop :title="banner.contact.title" :subtitle="banner.contact.subtitle" />
    <!--FORM-->
    <ContactFormDesktop/>
    <!--TARJETAS-->
    <ContactCardsDesktop/>
  </main>
</template>

<style>

</style>