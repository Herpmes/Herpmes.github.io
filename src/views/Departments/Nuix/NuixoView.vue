<template>
  <main class="mt-15">
  <div>







    <v-row align="center" justify="center" >
      <v-img
          width="40%"
          aspect-ratio="16/9"
          contain
          src="src/Img/img Nuixo/NuixoERP-28-2-2024.png"
      ></v-img>
    </v-row >

    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6" xl="4" class="mt-4" >
        <v-card
            class="mx-auto"
            color="#0075FF"
            theme="dark"
            max-width="800"
            prepend-icon="mdi-twitter"
            title="Sobre Nosotros"
        >


          <v-card-text class="text-h5 py-2">
            "Somos un grupo innovador formado por un equipo muy unido con un objetivo común claro. Contamos con un personal joven y dinámico con muchas ganas de trabajar en proyectos significativos. Nuestro propósito es ser flexibles y ágiles para abordar los cambios tecnológicos y empresariales que se presentan."
          </v-card-text>
          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-avatar>
              </template>

              <v-list-item-title>Jorge Sanchis</v-list-item-title>

              <v-list-item-subtitle>Original Programer</v-list-item-subtitle>

              <template v-slot:append>
                <div class="justify-self-end">
                  <v-icon class="me-1" icon="mdi-heart"></v-icon>
                  <span class="subheading me-2">256</span>
                  <span class="me-1">·</span>
                  <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                  <span class="subheading">45</span>
                </div>
              </template>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <div style="margin-top: 50px;"></div>
      </v-col>
    </v-row>
    <div class="v-col v-col-12 py-8 mt-10 text-white radialBG" align="center" justify="center">
    <v-col cols="auto">
      <v-card
          class="mx-auto"
          max-width="1500"

          title="Caso de Éxito EnerTech"
          subtitle="NuixoERP"
      >
        <template v-slot:prepend>
          <v-avatar size="80" align="center" justify="center">
            <v-img
                src="https://cdn.vuetifyjs.com/images/john.png"
                alt="John"
            ></v-img>
          </v-avatar>
        </template>

        <v-card-text class="text-body-1">Un problema que tenía la empresa era que no tenían un sistema de gestión empresarial para gestionar de manera más efectiva las relaciones con sus clientes y optimizar el seguimiento de los contratos.

          Otro problema que tenían era encontrar una solución para facilitar la gestión de ofertas, contratos y seguimientos continuos.

          Gracias a nuestra ayuda hemos conseguido que se un caso de éxito buscando soluciones a los dos problemas y ahora la empresa EneTech ya se adapta ágilmente a nuevas oportunidades en el mercado eléctrico y gestiona de manera más efectiva las relaciones con sus clientes optimizando el seguimiento de los contratos entre otras cosas.

        </v-card-text>
      </v-card>
    </v-col>
    </div>
  </div>

</main>
</template>

<style scoped>
.fill-height {
  height: 100vh !important;
}

.company-description {
  font-size: 16px !important;
  line-height: 1 !important;
  color: #333 !important;
  margin: 20px !important;
}
</style>


<script setup>
</script>