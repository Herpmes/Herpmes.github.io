<script setup>
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/Banner.vue'
import ContactFormDesktop from '@/components/ContactUs/ContactForm.vue'
import ContactCardsDesktop from '@/components/ContactUs/ContactCards.vue'
const banner = Banners
</script>

<template>
  <main>
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