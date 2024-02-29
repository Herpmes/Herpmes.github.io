<template>
  <div class="spacer"></div>
  <v-row>
    <v-col cols="7">

      <v-col cols="5">
        <p class="erp-solutions-title">ERP Solutions</p>
      </v-col>

      <v-col class="description-container" cols="8">
        Transforma tu negocio con nuestro ERP: simplifica, organiza y potencia tu gestión empresarial con una sola solución.
      </v-col>


      <v-col xs="11" sm="10" md="7" lg="4">
        <v-row>
          <v-col cols="6">
            <router-link to="/about">
              <v-btn class="custom-button" :ripple="false">About us</v-btn>
            </router-link>

          </v-col>
          <v-col cols="6">
            <router-link to="/services">
              <v-btn class="custom-button" :ripple="false">Services</v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-col>

    </v-col>

    <v-col cols="5">


    </v-col>
  </v-row>
  <v-spacer class="spacer"></v-spacer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.description-container {
  font-weight: bold;
  font-size:2rem;
}
.erp-solutions-title {
  color: #3a73d5;
  font-family: 'Inter', sans-serif;
}

.custom-button {
  font-family: 'Inter', sans-serif;
  text-transform: none;
  background-color: #3a73d5;
  color: white;
  padding: 2em 2em;
  border-radius: 0.8em;


  display: flex;
  justify-content: center;
  align-items: center;
}

.spacer {
  height: 5rem;
}
</style>
<script setup>
</script>