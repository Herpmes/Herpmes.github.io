<script setup>
import CasosExito from '/src/json/CasosExito.json'
const items = CasosExito
</script>

<template>
  <v-row>
    <v-col cols="12" class="py-8 mt-10 text-white radialBG" align="center">
      <h1 class="mb-8">Casos de éxito</h1>
      <v-row class="pb-5">
        <v-spacer></v-spacer>
        <v-col cols="11" md="10">
          <v-carousel
            hide-delimiter-background
            :show-arrows="$vuetify.display.name!=='xs'"
            class="text-white"
            height="auto"
          >

            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
            >

              <v-card class="mx-auto" hover width="80%" style="border-radius: 30px">
                <v-row class="pb-14">
                  <v-col cols="12" md="6" class="text-left pa-15">
                    <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
                    <p style="font-size: 20px">{{ item.desc }}</p>
                    <br>
                    <p style="font-size: 20px;font-weight: bold">
                      {{ item.nombre }}
                      <br>
                      {{ item.empresa }}
                    </p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-img :src="item.img" max-height="400px" class="align-center mt-15" v-if="$vuetify.display.name==='lg'"></v-img>
                    <v-img :src="item.img" max-height="300px" class="align-center mt-15" v-else-if="$vuetify.display.name==='md'"></v-img>
                    <v-img :src="item.img" max-height="200px" class="align-center" v-else></v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>