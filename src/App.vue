<script>
import {RouterLink, RouterView} from 'vue-router'
import AppBarDesktop from 'src/components/AppBarDesktop.vue'
  export default {
    data() {
      return {selectedTopTab: 0, drawerProductos: false,drawerMobile:false}
    }, methods: {
      changeSelected(newSelected) {
        this.selectedTopTab = newSelected
      }
    }
  }
</script>
<template>
  <v-app>
    <!--
    ******************
    Menu superior
    ******************
    v-if="this.$vuetify.display.name!=='xs'"
    -->
    <AppBarDesktop />
    <v-app-bar fixed>


      <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">



      <!--Home-->
      <RouterLink to="/">
        <v-btn class="font-weight-bold" color="#24afff" :ripple="false" @click="changeSelected(0)"
               v-if="this.selectedTopTab===0">Inicio
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(0)" v-else>Inicio</v-btn>
      </RouterLink>




      <!--About-->
      <RouterLink to="/about">
        <v-btn class="font-weight-bold" color="#24afff" :ripple="false" @click="changeSelected(1)"
               v-if="this.selectedTopTab===1">Quienes Somos
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(1)" v-else>Quienes Somos</v-btn>
      </RouterLink>
      <v-btn class="font-weight-bold" :ripple="false" @mouseenter="drawer = !drawer">Productos</v-btn>



      <v-spacer></v-spacer>




      <!--Contact Us-->
      <RouterLink to="/contact">
        <v-btn class="hover-anchor font-weight-bold" color="#24afff" :ripple="false" @click="changeSelected(5)"
               v-if="this.selectedTopTab===5">CONTACTANOS
        </v-btn>
        <v-btn class="hover-anchor font-weight-bold" :ripple="false" @click="changeSelected(5)" v-else>CONTACTANOS</v-btn>
      </RouterLink>




      <!--Login-->
      <v-btn class="font-weight-bold" :ripple="false">LOGIN</v-btn>
    </v-app-bar>
    <!--
    ******************
    View que cambia
    ******************
    -->
      <v-navigation-drawer
        v-model="drawerProductos"
        location="top"
        temporary
        margin-top="-5px"
        @mouseleave="drawerProductos = !drawerProductos" >
        <v-row class="pa-10">
          <v-col cols="3" >
            <h4 class="tituloProductos">GRANDES EMPRESAS</h4>
              <v-row style="margin-top: 5px">
                <v-col cols="2">
                  foto
                </v-col>
                <v-col cols="10">
                  texto
                </v-col>
              </v-row>
          </v-col>
          <v-col cols="3">
            <h4 class="tituloProductos">PYMES</h4>
          </v-col>
          <v-col cols="3">
            <h4 class="tituloProductos">AUTÓNOMOS</h4>
          </v-col>
          <v-col cols="3" style="color: #00b0ff;font-weight: bold">
            <h4 class="tituloProductos">HERRAMIENTAS DE DESARROLLO</h4>
          </v-col>
        </v-row>
      </v-navigation-drawer>
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