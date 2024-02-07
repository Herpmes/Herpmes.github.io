<script setup>

</script>

<template>
  <footer class="custom-footer">
    <v-container>
      <p class="mb-6">© 2024 HERPMES · Carrer Arcadi García i Sanz 19 · 12600 La Vall d'Uixó · (+34) 611 740 761</p>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4">
          <v-btn icon="mdi-instagram" class="me-2" href="https://www.instagram.com/herpmes.enterprise/"></v-btn>
          <v-btn icon="mdi-twitter" class="me-2" href="https://twitter.com/H3RPmes"></v-btn>
          <v-btn icon="mdi-email" class="me-2" href="mailto:herpmes.entrerprise@gmail.com"></v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.custom-footer {
  background-color: #333; /* Color de fondo del footer */
  color: #fff; /* Color del texto del footer */
  padding: 10px; /* Espaciado interno del footer */
  text-align: center; /* Alineación del texto del footer */
  position: relative; /* Permite ajustar la posición con respecto a su contenedor */
  margin-top: 50px; /* Empuja el footer hacia abajo al final del contenedor */
}
</style>