<script>
export default {
  data: () => ({
    show: false,
  }),
}

</script>

<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      Néstor Cantarero Pacheco
    </v-card-title>

    <v-card-subtitle>
      Investigador de Software
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
      >
        Sobre mi
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Soy una persona autodidacta, que ha descubierto su pasión en el mundo empresarial y del software. Concretamente en las asignaturas de estadísticas, sistemas de gestión empresarial y acceso a datos, hizo crecer mi interés en los datos y su análisis.

          Esta inclinación no se ha desvanecido a la hora de continuar mis estudios, puesto que he logrado compaginarlos con el trabajo  manteniendo un alto rendimiento.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>

</style>