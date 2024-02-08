<script setup>
import { useDrawerDesktopStore } from '@/stores/DrawerDesktopStore.js'

const drawerStore = useDrawerDesktopStore()
</script>

<template>

  <v-navigation-drawer
    v-model="drawerStore.getDrawerDepartamentos"
    location="top"
    class=""
    style="margin-top: -5px; height: fit-content"
    @mouseleave="drawerStore.closeDepartamentos()">
    <v-row class="pa-9">
      <!--Anchor-->
      <v-col>
        <v-card class="mx-auto" hover="true" color="#d2f2fc">
          <v-card-item>
            <v-card-title>
              Anchor
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-center">
            <p class="textCenter">Departamento Marítimo</p>
            <br>
            <v-btn>Descubre Anchor</v-btn>
            <br>
          </v-card-text>
          <div class="text-center">
            <img src="/src/Img/Logos/LogoAncla.png" alt="Anchor" width="74" />
          </div>
        </v-card>
      </v-col>
      <!--Nuixo-->
      <v-col>
        <v-card class="mx-auto" hover color="#ff8787">
          <v-card-item>
            <v-card-title>
              Nuixó ERP
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-center">
            <p class="textCenter">Departamento Ardiente</p>
            <br>
            <v-btn>Descubre Nuixó</v-btn>
            <br>
          </v-card-text>
          <div class="text-center">
            <img src="/src/Img/Logos/LogoNuixo-removedBackground.png" alt="Nuixo" width="258" />
          </div>
        </v-card>
      </v-col>
      <!--CodeCrafters-->
      <v-col>
        <v-card class="mx-auto" hover color="#0f5dab">
          <v-card-item>
            <v-card-title class="text-white">
              CodeCrafters
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-center">
            <p class="text-white">Departamento Herrero</p>
            <br>
            <v-btn>Descubre CodeCrafters</v-btn>
            <br>
          </v-card-text>
          <div class="text-center">
            <img src="/src/Img/Logos/LogoCodecrafters.png" width="100" alt="CodeCrafters">
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<style scoped>

</style>