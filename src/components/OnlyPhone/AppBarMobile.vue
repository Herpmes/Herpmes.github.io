<script setup>
import {useDrawerPhoneStore} from "@/stores/DrawerPhoneStore.js";
const drawerStore = useDrawerPhoneStore()
</script>

<template>
  <v-app-bar fixed>
    <v-row class="ma-0">
      <v-col cols="3">
        <v-app-bar-nav-icon @click="drawerStore.switch()"></v-app-bar-nav-icon>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7" sm="5 " md="4" style="display: flex;">
        <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoHChiquito">
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>

</style>