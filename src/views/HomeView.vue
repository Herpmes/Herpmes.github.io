<script>
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
  <main>
    <v-container style="max-width: none">
      <v-row no-gutters>
        <v-col></v-col>
        <v-col cols="10">
          <h1 class="text-center">HERPmes es una empresa que hace muchas cosas, desde lanzamiento de enanos a consultorias erp</h1>
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col></v-col>
        <v-col cols="10">
          <p class="text-center">Dios mio q asco me da WEB</p>
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-row>
        <!--Anchor-->
        <v-col>
          <v-card class="mx-auto" hover color="#d2f2fc">
            <v-card-item>
              <v-card-title>
                Anchor
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center">
              <p class="textCenter">Zona marina o yo que se</p>
              <br>
              <v-btn>Descubre Anchor</v-btn>
              <br>
            </v-card-text>
            <div class="text-center">
              <img src="/src/Img/LogoAnchor.png" alt="">
            </div>
          </v-card>
        </v-col>
        <!--Nuixo-->
        <v-col>
          <v-card class="mx-auto" hover color="#ff8787">
            <v-card-item>
              <v-card-title>
                Nuixo
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center">
              <p class="textCenter">Bot 1</p>
              <br>
              <v-btn>Descubre Nuixo</v-btn>
              <br>
            </v-card-text>
            <div class="text-center">
              <img src="/src/Img/LogoAnchor.png" alt="">
            </div>
          </v-card>
        </v-col>
        <!--CodeCrafters-->
        <v-col>
          <v-card class="mx-auto" hover color="#9489f5">
            <v-card-item>
              <v-card-title class="text-black">
                CodeCrafters
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center">
              <p class="text-black">Bot 2</p>
              <br>
              <v-btn>Descubre CodeCrafters</v-btn>
              <br>
            </v-card-text>
            <div class="text-center">
              <img src="/src/Img/LogoAnchor.png" alt="">
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
