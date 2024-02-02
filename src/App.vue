<script setup>
import {RouterLink, RouterView} from 'vue-router'
import AppBarDesktop from './components/AppBarDesktop.vue'
import AppBarMobile from './components/AppBarMobile.vue'
import {useAppBraDesktopStore} from '@/stores/AppBarDesktopStore.js'
const drawerStore = useAppBraDesktopStore()

console.log(drawerStore.getDrawer)
</script>
<template>
  <v-app>
    <!--
    ******************
    Menu superior
    ******************
    v-if="this.$vuetify.display.name!=='xs'"
    -->

    <AppBarDesktop v-if="this.$vuetify.display.name!=='xs'"/>
    <AppBarMobile v-else/>
    <!--
    ******************
    View que cambia
    ******************
    -->
<!--      <v-navigation-drawer-->
<!--        v-model="drawerProductos"-->
<!--        location="top"-->
<!--        margin-top="-5px"-->
<!--        @mouseleave="drawerProductos = !drawerProductos" v-if="this.drawerStore.getDrawer">-->
<!--        <v-row class="pa-10">-->
<!--          <v-col cols="3" >-->
<!--            <h4 class="tituloProductos">GRANDES EMPRESAS</h4>-->
<!--              <v-row style="margin-top: 5px">-->
<!--                <v-col cols="2">-->
<!--                  foto-->
<!--                </v-col>-->
<!--                <v-col cols="10">-->
<!--                  texto-->
<!--                </v-col>-->
<!--              </v-row>-->
<!--          </v-col>-->
<!--          <v-col cols="3">-->
<!--            <h4 class="tituloProductos">PYMES</h4>-->
<!--          </v-col>-->
<!--          <v-col cols="3">-->
<!--            <h4 class="tituloProductos">AUTÓNOMOS</h4>-->
<!--          </v-col>-->
<!--          <v-col cols="3" style="color: #00b0ff;font-weight: bold">-->
<!--            <h4 class="tituloProductos">HERRAMIENTAS DE DESARROLLO</h4>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-navigation-drawer>-->
    <RouterView/>
    <!--
    ******************
    Footer
    ******************
    -->
    <footer class="custom-footer">
      <v-container>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-btn icon="mdi-instagram" class="me-2" href="https://www.instagram.com/herpmes.enterprise/"></v-btn>
            <v-btn icon="mdi-twitter" class="me-2" href="https://twitter.com/H3RPmes"></v-btn>
            <v-btn icon="mdi-email" class="me-2" href="mailto:herpmes.entrerprise@gmail.com"></v-btn>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>
<style>

.tituloProductos{
  color: #00b0ff;font-weight: bold
}


.hover-anchor:hover {
  color: #24afff;
}


.custom-footer {
  background-color: #333; /* Color de fondo del footer */
  color: #fff; /* Color del texto del footer */
  padding: 10px; /* Espaciado interno del footer */
  text-align: center; /* Alineación del texto del footer */
  position: relative; /* Permite ajustar la posición con respecto a su contenedor */
  margin-top: 50px; /* Empuja el footer hacia abajo al final del contenedor */
}

</style>