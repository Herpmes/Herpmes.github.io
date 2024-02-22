<script setup>
import {useDrawerPhoneStore} from "@/stores/DrawerPhoneStore.js";

const drawerStore = useDrawerPhoneStore()
</script>

<template>
  <v-navigation-drawer v-model="drawerStore.isOpen" location="left">
    <!--Inicio-->
    <RouterLink to="/">
      <v-card hover @click="drawerStore.setClose()">
        <v-list>
          <v-list-item>
            Inicio
          </v-list-item>
        </v-list>
      </v-card>
    </RouterLink>

    <!--About-->
    <RouterLink to="/about">
      <v-card hover @click="drawerStore.setClose()">
        <v-list>
          <v-list-item>
            Sobre Nosotros
          </v-list-item>
        </v-list>
      </v-card>
    </RouterLink>

    <!--Servicios-->
    <RouterLink to="/services">
      <v-card hover @click="drawerStore.setClose()">
        <v-list>
          <v-list-item>
            Servicios
          </v-list-item>
        </v-list>
      </v-card>
    </RouterLink>

    <!--Productos-->
    <RouterLink to="/">
      <v-card hover variant="outlined">
        <v-list>
          <v-list-item>
            Inicio
          </v-list-item>
        </v-list>
      </v-card>
    </RouterLink>

    <!--Departamentos-->
    <RouterLink to="/">
      <v-card hover variant="outlined">
        <v-list>
          <v-list-item>
            Inicio
          </v-list-item>
        </v-list>
      </v-card>
    </RouterLink>
  </v-navigation-drawer>
</template>

<style scoped>

</style>