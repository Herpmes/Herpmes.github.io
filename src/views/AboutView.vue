<script setup>
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/Banner.vue'
const banner = Banners
import About from "/src/json/About.json"
const aboutinfo = About
import AboutTextWhite from '@/components/AboutUs/AboutTextWhite.vue'
import AboutTextBlue from '@/components/AboutUs/AboutTextBlue.vue'
import AboutDesc from '@/components/AboutUs/AboutDesc.vue'
</script>

<template>
  <main>
    <!--Banner-->
    <BannerDesktop :title="banner.about.title" :subtitle="banner.about.subtitle"/>
    <!--Descripcion-->
    <AboutTextWhite :logo="aboutinfo.herpmes.logo" :desc="aboutinfo.herpmes.desc" :img="aboutinfo.herpmes.img"/>
    <!--Intro Dep-->
    <AboutDesc/>
    <!--Anchor-->
    <AboutTextWhite :logo="aboutinfo.anchor.logo" :desc="aboutinfo.anchor.desc" :img="aboutinfo.anchor.img"/>
    <!--Codecrafters-->
    <AboutTextBlue :logo="aboutinfo.codeC.logo" :desc="aboutinfo.codeC.desc" :img="aboutinfo.codeC.img"/>
    <!--Nuixo-->
    <AboutTextWhite :logo="aboutinfo.nuixo.logo" :desc="aboutinfo.nuixo.desc" :img="aboutinfo.nuixo.img"/>
  </main>
</template>

<style>

</style>
