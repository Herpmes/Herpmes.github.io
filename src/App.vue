<script>
import {RouterLink, RouterView} from 'vue-router'

export default {
  data() {
    return {selectedTopTab: 0, prueba: false}
  }, methods: {
    changeSelected(newSelected) {
      this.selectedTopTab = newSelected
    }
  }
}
</script>
<template>
  <v-app>
    <!--
    ******************
    Menu superior
    ******************
    -->
    <v-app-bar fixed style="height: 60px"><img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">
      <!--Home-->
      <RouterLink to="/">
        <v-btn class="font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(0)"
               v-if="this.selectedTopTab===0">Inicio
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(0)" v-else>Inicio</v-btn>
      </RouterLink>

      <!--About-->
      <RouterLink to="/about">
        <v-btn class="font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(1)"
               v-if="this.selectedTopTab===1">Quienes Somos
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(1)" v-else>Quienes Somos</v-btn>
      </RouterLink>
<!--      <v-btn class="font-weight-bold" :ripple="false" @mouseenter="drawer = !drawer">Servicios</v-btn>-->
      <v-btn class="font-weight-bold" :ripple="false" @mouseenter="prueba = !prueba">Departamentos</v-btn>

      <!--      <div>-->
      <!--        &lt;!&ndash;Anchor&ndash;&gt;-->
      <!--        <RouterLink to="/2">-->
      <!--          <v-btn class="hover-anchor font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(2)"-->
      <!--                 v-if="this.selectedTopTab===2">Anchor-->
      <!--          </v-btn>-->
      <!--          <v-btn class="hover-anchor font-weight-bold" :ripple="false" @click="changeSelected(2)" v-else>Anchor</v-btn>-->
      <!--        </RouterLink>-->

      <!--        &lt;!&ndash;Nuixo&ndash;&gt;-->
      <!--        <v-btn class="hover-nuixo font-weight-bold" style="color:#ff8787" :ripple="false" @click="changeSelected(3)"-->
      <!--               v-if="this.selectedTopTab===3">NuixoErp-->
      <!--        </v-btn>-->
      <!--        <v-btn class="hover-nuixo font-weight-bold" :ripple="false" @click="changeSelected(3)" v-else>NuixoErp</v-btn>-->

      <!--        &lt;!&ndash;CodeCrafters&ndash;&gt;-->
      <!--        <v-btn class="hover-codec font-weight-bold" style="color:#9489f5" :ripple="false" @click="changeSelected(4)"-->
      <!--               v-if="this.selectedTopTab===4">CodeCrafters-->
      <!--        </v-btn>-->
      <!--        <v-btn class="hover-codec font-weight-bold" :ripple="false" @click="changeSelected(4)" v-else>CodeCrafters</v-btn>-->
      <!--        <v-spacer></v-spacer>-->
      <!--      </div>-->

      <!--<RouterLink to="/GRANFINAL">
        <v-btn class="v-ripple__animation"></v-btn>
      </RouterLink>-->
      <v-spacer></v-spacer>
      <!--Contact Us-->
      <RouterLink to="/contact">
        <v-btn class="hover-anchor font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(5)"
               v-if="this.selectedTopTab===5">CONTACTANOS
        </v-btn>
        <v-btn class="hover-anchor font-weight-bold" :ripple="false" @click="changeSelected(5)" v-else>CONTACTANOS
        </v-btn>
      </RouterLink>

      <!--Login-->
      <v-btn class="font-weight-bold" :ripple="false">LOGIN</v-btn>
    </v-app-bar>
    <!--
    ******************
    View que cambia
    ******************
    -->
    <center>

    </center>

    <!--
    ******************
    View que cambia los departamentos
    ******************
    -->
    <center>
      <v-navigation-drawer
          v-model="prueba"
          location="top"
          class=""
          style="margin-top: -5px; height: 300px"
          @mouseleave="prueba = !prueba">
        <v-list>

          <v-container style="max-width: none">
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
                    <p class="textCenter">Departamento Marítimo</p>
                    <br>
                    <v-btn>Descubre Anchor</v-btn>
                    <br>
                  </v-card-text>
                  <div class="text-center">
                    <img src="/src/Img/Logos/LogoAncla.png" alt="Anchor" width="74"/>
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
                    <img src="/src/Img/Logos/LogoNuixo-removedBackground.png" alt="Nuixo" width="258"/>
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
          </v-container>


        </v-list>
      </v-navigation-drawer>
    </center>

    <RouterView/>
    <!--
    ******************
    Footer
    ******************
    -->
    <footer class="custom-footer">
      <v-container>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-btn icon="mdi-instagram" class="btn-margin" href="https://www.instagram.com/herpmes.enterprise/"></v-btn>
            <v-btn icon="mdi-twitter" class="btn-margin" href="https://twitter.com/H3RPmes"></v-btn>
            <v-btn icon="mdi-email" class="btn-margin" href="mailto:herpmes.entrerprise@gmail.com"></v-btn>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>
<style>.selected-home {
  color: #24afff;
}

.selected-about {
  color: #24afff;
}

.hover-anchor:hover {
  color: #24afff;
}

.selected-anchor {
  color: #24afff;
}

.hover-nuixo:hover {
  color: #ff8787;
}

.selected-nuixo {
  color: #ff8787;
}

.hover-codec:hover {
  color: #9489f5;
}

.selected-codec {
  color: #9489f5;
}

.custom-footer {
  background-color: #333; /* Color de fondo del footer */
  color: #fff; /* Color del texto del footer */
  padding: 10px; /* Espaciado interno del footer */
  text-align: center; /* Alineación del texto del footer */
  position: relative; /* Permite ajustar la posición con respecto a su contenedor */
  margin-top: 50px; /* Empuja el footer hacia abajo al final del contenedor */
}

.btn-margin {
  margin-right: 5px;
  margin-left: 5px;
}

.btn-margin:hover {
  color: #146CC4;
}</style>