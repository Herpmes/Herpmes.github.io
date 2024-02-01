<script>
import {RouterLink, RouterView} from 'vue-router'
  export default {
    data() {
      return {selectedTopTab: 0, drawer: false}
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
    -->
    <v-app-bar fixed style="height: 60px"><img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">
      <!--Home-->
      <RouterLink to="/">
        <v-btn class="font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(0)"
               v-if="this.selectedTopTab===0">Inicio
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(0)" v-else>Inicio</v-btn>
      </RouterLink>

      <!--About-->
      <RouterLink to="/about">
        <v-btn class="font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(1)"
               v-if="this.selectedTopTab===1">Quienes Somos
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(1)" v-else>Quienes Somos</v-btn>
      </RouterLink>
      <v-btn class="font-weight-bold" :ripple="false" @mouseenter="drawer = !drawer">Productos</v-btn>

      <v-spacer></v-spacer>
      <!--Contact Us-->
      <RouterLink to="/contact">
        <v-btn class="hover-anchor font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(5)"
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
        v-model="drawer"
        location="top"
        temporary
        style="margin-top: -5px;"
        @mouseleave="drawer = !drawer">
        <v-row style="margin-top: 20px;padding: 40px">
          <v-col cols="3" >
            <h4 style="color: #00b0ff;font-weight: bold">GRANDES EMPRESAS</h4>
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
            <h4 style="color: #00b0ff;font-weight: bold">PYMES</h4>
          </v-col>
          <v-col cols="3">
            <h4 style="color: #00b0ff;font-weight: bold">AUTÓNOMOS</h4>
          </v-col>
          <v-col cols="3" style="color: #00b0ff;font-weight: bold">
            <h4 style="color: #00b0ff;font-weight: bold">HERRAMIENTAS DE DESARROLLO</h4>
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
            <v-btn icon="mdi-instagram" class="btn-margin" href="https://www.instagram.com/herpmes.enterprise/"></v-btn>
            <v-btn icon="mdi-twitter" class="btn-margin" href="https://twitter.com/H3RPmes"></v-btn>
            <v-btn icon="mdi-email" class="btn-margin" href="mailto:herpmes.entrerprise@gmail.com"></v-btn>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>
<style>.selected-home {
  color: #24afff;
}

.selected-about {
  color: #24afff;
}

.hover-anchor:hover {
  color: #24afff;
}

.selected-anchor {
  color: #24afff;
}

.hover-nuixo:hover {
  color: #ff8787;
}

.selected-nuixo {
  color: #ff8787;
}

.hover-codec:hover {
  color: #9489f5;
}

.selected-codec {
  color: #9489f5;
}

.custom-footer {
  background-color: #333; /* Color de fondo del footer */
  color: #fff; /* Color del texto del footer */
  padding: 10px; /* Espaciado interno del footer */
  text-align: center; /* Alineación del texto del footer */
  position: relative; /* Permite ajustar la posición con respecto a su contenedor */
  margin-top: 50px; /* Empuja el footer hacia abajo al final del contenedor */
}

.btn-margin {
  margin-right: 5px;
  margin-left: 5px;
}

.btn-margin:hover {
  color: #146CC4;
}</style>