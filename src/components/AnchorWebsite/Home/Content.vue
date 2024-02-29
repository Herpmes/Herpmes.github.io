<script setup>
import CasosExito from '/src/json/CasosExito.json'
const items = CasosExito
</script>

<template>
  <v-container class="container" fluid>
    <v-row class="top-text">
      <v-col class="text-center">
        <h1>Casos de éxito</h1>
      </v-col>
    </v-row>
    <v-row class="top-subtitle">
      <v-col class="text-center">
        <p>Haz a tu empresa despegar con nosotros!</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-carousel style="max-height: none; height: auto" show-arrows="hover" hide-delimiters>
          <v-carousel-item v-for="(item, index) in items" :key="index" height="">
            <v-card class="mx-auto" hover width="80%" style="border-radius: 30px">
              <v-row class="pb-14">
                <v-col cols="12" lg="6" class="text-left pa-15">
                  <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
                  <p style="font-size: 20px">{{ item.desc }}</p>
                  <br>
                  <p style="font-size: 20px;font-weight: bold">
                    {{ item.nombre }}
                    <br>
                    {{ item.empresa }}
                  </p>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-img :src="item.img" max-height="400px" class="align-center mt-15" v-if="$vuetify.display.width > 1280"></v-img>
                  <v-img :src="item.img" max-height="200px" class="align-center" v-else></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-spacer class="spacer"></v-spacer>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.container {
  background: linear-gradient(to bottom, #369FFF, #0339BA);
}

.top-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
  color: white;
}

.top-subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
}
.spacer {
  height: 5rem;
}

footer{
  margin-top: 0;
}
</style>
