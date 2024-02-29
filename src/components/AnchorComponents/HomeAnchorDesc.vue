<script>
export default {
  name: 'HomeAnchorDesc'
}
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
        En <b>Anchor</b> somos un departamento que demuestra <b>todo su trabajo con esfuerzo, cariño y detalle</b>.
      </p>
      <br>
      <p>
        Siempre <b>seremos el ancla</b> que te de seguridad a la <b>hora de navegar</b>, podremos estar al tanto de todo, si
        quieres descubrir más presiona aquí abajo.
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
      <v-img src="https://raw.githubusercontent.com/Herpmes/Herpmes.github.io/master/src/Img/grupo.jpg" height="300px"></v-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>