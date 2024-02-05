<script setup>

</script>

<template>
  <v-row class="text-left text-black mt-12 pa-8">
    <v-spacer></v-spacer>
    <v-col cols="12" md="4">
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
    <v-col cols="12" md="4">
      <v-img src="/src/Img/Home1.jpg" height="300px"></v-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>