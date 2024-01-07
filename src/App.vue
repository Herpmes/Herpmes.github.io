<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar fixed style="height: 60px">
      <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">
      <RouterLink to="/"><v-btn class="font-weight-bold">Home</v-btn></RouterLink>
      <RouterLink to="/about"><v-btn class="font-weight-bold">Quienes Somos</v-btn></RouterLink>

      <RouterLink to="/2"><v-btn class="hover-anchor font-weight-bold">Anchor</v-btn></RouterLink>

      <v-btn class="hover-nuixo font-weight-bold">NuixoErp</v-btn>

      <v-btn class="hover-codec font-weight-bold">CodeCrafters</v-btn>

      <v-spacer></v-spacer>
      <v-btn class="font-weight-bold">Login</v-btn>
    </v-app-bar>
    <RouterView/>
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

<style>
.hover-anchor:hover{
  color: #24afff;
}
.hover-nuixo:hover{
  color: #ff8787;
}
.hover-codec:hover{
  color: #9489f5;
}
.custom-footer{
  background-color: #333; /* Color de fondo del footer */
  color: #fff; /* Color del texto del footer */
  padding: 10px; /* Espaciado interno del footer */
  text-align: center; /* Alineación del texto del footer */
  position: relative; /* Permite ajustar la posición con respecto a su contenedor */
  margin-top: 50px; /* Empuja el footer hacia abajo al final del contenedor */
}
.btn-margin{
  margin-right: 5px;
  margin-left: 5px;
}
.btn-margin:hover{
  color: #146CC4;
}
</style>
