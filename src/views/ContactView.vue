<script setup>
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/BannerDesktop.vue'
import ContactFormDesktop from '@/components/ContactFormDesktop.vue'
const banner = Banners
</script>

<template>
  <main style="margin-top: 60px">
    <!--Banner-->
    <BannerDesktop :title="banner.contact.title" :subtitle="banner.contact.subtitle" />

    <!--FORM-->
    <ContactFormDesktop/>
    <!--
    ******************
    TARJETAS
    ******************
    -->
    <v-container
        style="max-width: none ; margin-top: 50px;
      padding-top: 40px;padding-bottom: 40px;width: 60%"
        align="center"
    >
      <!--Titulo-->
      <v-row>
        <v-col class="align-center">
          <h1>Otras formas de contactarnos</h1>
        </v-col>
      </v-row>
      <!--Tarjetitas-->
      <v-row>
        <!--Telf-->
        <v-col>
          <v-card class="mx-auto" hover color="#eeeeee" href="tel:611-740-761">
            <v-card-item>
              <v-card-title>
                <v-icon icon="mdi-phone"></v-icon>
                <p><b>Llamando al</b></p>
              </v-card-title>
            </v-card-item>
            <v-card-text class="text-center">
              <br>
              <p>611-740-761</p>
              <br>
            </v-card-text>
          </v-card>
        </v-col>
        <!--EMAIL-->
        <v-col>
          <v-card class="mx-auto" hover color="#eeeeee" href="mailto:herpmes.enterprise@gmail.com">
            <v-card-item>
              <v-card-title>
                <v-icon icon="mdi-email"></v-icon>
                <p><b>Correo al</b></p>
              </v-card-title>
            </v-card-item>
            <v-card-text class="text-center">
              <br>
              <p>herpmes.enterprise@gmail.com</p>
              <br>
            </v-card-text>
          </v-card>
        </v-col>
        <!--Dirección-->
        <v-col>
          <v-card class="mx-auto" hover color="#eeeeee" href="https://www.google.es/maps/place/IES+BENIGASL%C3%93/@39.8209435,-0.2269505,17z/data=!3m1!4b1!4m6!3m5!1s0xd600faa5ce4c981:0x6435a11e74fdf3c2!8m2!3d39.8209394!4d-0.2243756!16s%2Fg%2F11hdxxyt26?entry=ttu" target="_blank">
            <v-card-item>
              <v-card-title>
                <v-icon icon="mdi-map-marker-circle" style="margin-right: 10px"></v-icon>
                <p><b>Yendo a</b></p>
              </v-card-title>
            </v-card-item>
            <v-card-text class="text-center">
              <br>
              <p>Carrer Arcadi García i Sanz, 1, 12600 La Vall d'Uixó, Castelló</p>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style>

</style>