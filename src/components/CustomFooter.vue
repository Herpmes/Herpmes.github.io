<script setup>

</script>

<template>
  <footer class="custom-footer">
    <v-container>
      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="4">
          <v-btn icon="mdi-instagram" class="me-2" href="https://www.instagram.com/herpmes.enterprise/"></v-btn>
          <v-btn icon="mdi-twitter" class="me-2" href="https://twitter.com/H3RPmes"></v-btn>
          <v-btn icon="mdi-email" class="me-2" href="mailto:herpmes.entrerprise@gmail.com"></v-btn>
        </v-col>
        <v-col cols="4"></v-col>
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