<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import CasosExito from "/src/json/CasosExito.json"
import Banners from "/src/json/Banners.json"
import BannerDesktop from '@/components/BannerDesktop.vue'
export default {
  components: { BannerDesktop },
  data() {
    return {
      banner : Banners,
      items :CasosExito
    }
  }
}
</script>

<template>
  <main style="margin-top: 60px">
    <!--Banner-->
    <BannerDesktop :title="this.banner.home.title" :subtitle="this.banner.home.subtite" />
    <!--
    *****************
    Mini Desc
    *****************
    -->

    <v-container
        style="max-width: none ; margin-top: 50px"
        align="center"
    >
      <v-row style="width: 70%" class="text-left text-black">
        <v-col cols="12" md="6">
          <h1>
            Acompañamos a empresas en su camino al éxito
          </h1>
          <br>
          <p>
            En <b>HERPmes</b> somos consultores y desarrolladores de <b>software de gestión para pequeñas y medianas
            empresas</b>.
          </p>
          <br>
          <p>
            Sea cual sea tu actividad, tenemos la solución que estás buscando.
          </p>
          <br>
          <div class="text-right">
            <router-link to="/about">
              <v-btn flat class="bg-transparent">
                Descubre mas
              </v-btn>
            </router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/src/Img/Home1.jpg" height="300px"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!--
    *****************
    Casos de Exito
    *****************
    -->
    <center style="
              background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);
              padding-top: 10px;padding-bottom: 20px;
              margin-top: 50px" class="text-white">
      <h1  style="margin-top: 50px;margin-bottom: -60px">Casos de éxito</h1>
      <v-carousel
          height="750"
          hide-delimiter-background
          show-arrows
          style="width: 60%;"
          class="text-white"
      >

        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            align="center"
        >

          <v-card class="mx-auto" hover  width="80%" height="75%" style="margin-top: 10%; border-radius: 30px">
                  <v-row style="height: 100%">
                    <v-col style="height: 100%;text-align: left;padding: 5%" cols="6">
                      <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
                      <p style="font-size: 20px">{{item.desc}}</p>
                      <br>
                      <p style="font-size: 20px;font-weight: bold">
                        {{item.nombre}}
                        <br>
                        {{item.empresa}}
                      </p>
                    </v-col>
                    <v-col style="height: 100%;padding: 5%;vertical-align: center;" cols="6">
                      <v-img :src="item.img" height="100%" class="align-center"></v-img>
                    </v-col>
                  </v-row>
<!--            <v-card-item>-->
<!--              <v-card-title class="text-black">-->
<!--                CodeCrafters-->
<!--              </v-card-title>-->
<!--            </v-card-item>-->

<!--            <v-card-text class="text-center">-->
<!--              <p class="text-black">Bot 2</p>-->
<!--              <br>-->
<!--              <v-btn>Descubre CodeCrafters</v-btn>-->
<!--              <br>-->
<!--            </v-card-text>-->
<!--            <div class="text-center">-->
<!--              <img src="/src/Img/Logos/LogoAncla.png" alt="">-->
<!--            </div>-->
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </center>
  </main>
</template>

<style>
.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>