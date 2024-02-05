<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import CasosExito from '/src/json/CasosExito.json'
import Banners from '/src/json/Banners.json'
import BannerDesktop from '@/components/BannerDesktop.vue'
import HomeDescAbout from '@/components/HomeDescAbout.vue'

export default {
  components: { HomeDescAbout, BannerDesktop },
  data() {
    return {
      banner: Banners,
      items: CasosExito
    }
  }
}
</script>

<template>
  <main class="mt-15">
    <!--Banner-->
    <BannerDesktop :title="this.banner.home.title" :subtitle="this.banner.home.subtite" />
    <!--Mini Desc-->
    <HomeDescAbout />
    <!--Casos de Exito-->
    <v-row>
      <v-col cols="12" class="py-8 mt-10 text-white radialBG" align="center">
        <h1 class="mb-8">Casos de éxito</h1>
        <v-row class="pb-5">
          <v-spacer></v-spacer>
          <v-col cols="10">
            <v-carousel
              hide-delimiter-background
              show-arrows
              class="text-white"
              height="auto"
            >

              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
              >

                <v-card class="mx-auto" hover width="80%" style="border-radius: 30px">
                  <v-row style="height: 100%">
                    <v-col style="height: 100%;text-align: left;padding: 5%" cols="12" sm="6">
                      <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
                      <p style="font-size: 20px">{{ item.desc }}</p>
                      <br>
                      <p style="font-size: 20px;font-weight: bold">
                        {{ item.nombre }}
                        <br>
                        {{ item.empresa }}
                      </p>
                    </v-col>
                    <v-col style="height: 100%;padding: 5%;vertical-align: center;" cols="12" sm="6">
                      <v-img :src="item.img" max-height="400px" class="align-center"></v-img>
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
  </main>
</template>

<style>
.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.radialBG{
  background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);
}
.v-carousel__controls__item.v-btn.v-btn--icon {
  background-color: #858684;
}
.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active {
  background-color: #5a7cf6; /* Colour for active one */
}
</style>