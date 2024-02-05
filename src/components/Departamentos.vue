<script>
export default {
  name: "Departamentos",
  data() {
    return {
      prueba: false
    }
  }
}
</script>

<template>

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
</template>

<style scoped>

</style>