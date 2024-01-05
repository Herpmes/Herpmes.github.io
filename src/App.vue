<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-toolbar >
    <img src="/src/Img/LogoHerpmes.png" alt="" class="logoH">
    <RouterLink to="/"><v-btn>Home</v-btn></RouterLink>
    <!--<RouterLink to="/about"><v-btn>About us</v-btn></RouterLink>-->

    <v-btn>Contact</v-btn>

    <v-btn>Anchor</v-btn>

    <v-btn>NuixoErp</v-btn>

    <v-btn>CodeCrafters</v-btn>

    <v-spacer></v-spacer>
    <v-btn>Login</v-btn>
  </v-toolbar>
  <RouterView />
</template>

<style>

</style>
