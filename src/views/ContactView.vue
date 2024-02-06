<script setup>
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/Banner.vue'
import ContactFormDesktop from '@/components/ContactForm.vue'
import ContactCardsDesktop from '@/components/ContactCards.vue'
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