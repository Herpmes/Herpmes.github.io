<template>
  <div class="spacer"></div>

  <div :class="['py-8','mt-3','text-white',color==='blue' ? 'bBG': (color === 'red' ? 'rBG':'gBG')]">
  <v-row align-content="center" >
    <v-col cols="12" class="banner text-white">
      Conoce
    </v-col>
  </v-row>
  <v-row class="mb-4">
    <v-col cols="12" class="text-center">
      <v-img min-height="100" max-height="100" class="imageAncla" src="https://raw.githubusercontent.com/Herpmes/Herpmes.github.io/master/src/Img/Logos/LogoAnchorBlanco.png"/>
    </v-col>
  </v-row>
  </div>


  <!--Mini Desc-->
  <HomeAnchorDesc />
  <v-divider/>

  <v-container :class="['py-8','mt-10','text-white',color==='blue' ? 'bBG': (color === 'red' ? 'rBG':'gBG')]">

    <v-row align-content="center" >
      <v-col cols="12" class="banner ">
        Camaradas
      </v-col>
    </v-row>
    <v-carousel
      hide-delimiters
      :show-arrows="$vuetify.display.name!=='xs'"
      class="text-white"
      height="auto"
    >

      <v-container :class="['py-8','mt-10','text-white',color==='blue' ? 'bBG': (color === 'red' ? 'rBG':'gBG')]">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-card class="mx-auto" width="80%" style="border-radius: 30px">
          <v-row class="pb-14">
            <v-col cols="12" lg="6" class="text-left pa-15">
              <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
              <p style="font-size: 20px">{{ item.text }}</p>
              <br>
              <p style="font-size: 30px; font-weight: bold;">{{ item.name }}</p> <!-- Add the name here -->
            </v-col>
            <v-col cols="12" lg="6">
              <v-img :src="item.image" max-height="400px" class="align-center mt-15" v-if="$vuetify.display.width > 1280"></v-img>
              <v-img :src="item.image" max-height="200px" class="align-center" v-else></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-carousel-item>
      </v-container>
    </v-carousel>
  </v-container>
</template>

<style scoped>

.banner {
  display: flex;
  justify-content: center;
  font-size: 10em;
}
.spacer{
  height: 3rem;
}
</style>

<script setup>
import CasosExito from '/src/json/Camaradas.json'
const items = CasosExito
import {computed} from "vue";
import {useColorStore} from "@/stores/ColorStore.js";
import HomeAnchorDesc from '@/components/AnchorComponents/HomeAnchorDesc.vue'
const colorStore = useColorStore()
let color = computed(()=> colorStore.getColor);

</script>