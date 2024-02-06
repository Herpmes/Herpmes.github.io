<script setup>
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/Banner.vue'
const banner = Banners
import About from "/src/json/About.json"
const aboutinfo = About
import AboutTextWhite from '@/components/AboutTextWhite.vue'
</script>

<template>
  <main style="margin-top: 60px">
    <!--Banner-->
    <BannerDesktop :title="banner.about.title" :subtitle="banner.about.subtitle"/>
    <!--Descripcion-->
    <AboutTextWhite :logo="aboutinfo.herpmes.logo" :desc="aboutinfo.herpmes.desc" :img="aboutinfo.herpmes.img"/>

    <!--Intro Dep-->
    <v-container
        style="max-width: none ;
      margin-top: 50px;background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);
      padding-top: 40px;padding-bottom: 40px;"
        align="center"
    >
      <v-row style="width: 50%" class="text-center text-white">
        <v-col cols="12">
          <h1>Nuestros departamentos</h1>
          <br>
          <p style="font-size: 20px">
            Con un equipo de expertos apasionados por la innovación, trabajamos codo a codo con usted
            para comprender sus desafíos y objetivos específicos. En Herpmes, no solo creamos software;
            diseñamos experiencias digitales que potencian la eficiencia y catalizan el crecimiento empresarial.
            Nuestra estructura se compone de tres departamentos especializados: Anchor, CodeCrafters y NuixoERP.
            Cada uno de estos departamentos trabaja de manera sinérgica para ofrecer soluciones integrales que impulsen su
            éxito en el ámbito digital.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!--Anchor-->
    <AboutTextWhite :logo="aboutinfo.anchor.logo" :desc="aboutinfo.anchor.desc" :img="aboutinfo.anchor.img"/>
    <!--
    *****************
    Codecrafters
    *****************
    -->
    <v-container
        style="max-width: none ;
      margin-top: 50px;background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);
      padding-top: 40px;padding-bottom: 40px;"
        align="center"
    >
      <v-row style="width: 70%" class="text-left text-white">
        <v-col cols="12" md="6">
          <v-img src="/src/Img/Home1.jpg" height="300px"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/src/Img/Logos/LogoCodecrafters.png" width="15%"></v-img>
          <br>
          <p style="font-size: 20px">
            Somos un equipo / departamento, lo que mas hacemos en nuestro departamento es programar y realizar tareas para la empresa,
            destacamos en nuestro trabajo que somos muy aplicados.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <!--
    *****************
    Nuixo
    *****************
    -->
    <v-container
        style="max-width: none ; margin-top: 50px;
      padding-top: 40px;padding-bottom: 40px;"
        align="center"
    >
      <v-row style="width: 70%" class="text-left text-black">
        <v-col cols="12" md="6">
          <v-img src="/src/Img/Logos/LogoNuixo.png" width="30%"></v-img>
          <br>
          <p style="font-size: 20px">
            Somos un grupo innovativo formado por un equipo muy unido y con un objetivo común clarísimo, contamos con un personal joven y dinámico con muchas ganas
            de trabajar en buenos proyectos, tenemos un objetivo en mente y con ganas de cumplirlo.
            <br><br>
            A todo esto necesitamos ser flexibles y ágiles para abordar los cambios tecnológicos y empresariales que se presentan
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/src/Img/Home1.jpg" height="300px"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style>

</style>
