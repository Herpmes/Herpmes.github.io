<script>
export default {
  data() {
    return {selectedTopTab: 0}
  }, methods: {
    changeSelected(newSelected) {
      this.selectedTopTab = newSelected
    }
  }
}
</script>

<template>
  <v-app-bar fixed>


    <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">



    <!--Home-->
    <RouterLink to="/">
      <v-btn class="font-weight-bold" color="#24afff" :ripple="false" @click="changeSelected(0)"
             v-if="this.selectedTopTab===0">Inicio
      </v-btn>
      <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(0)" v-else>Inicio</v-btn>
    </RouterLink>




    <!--About-->
    <RouterLink to="/about">
      <v-btn class="font-weight-bold" color="#24afff" :ripple="false" @click="changeSelected(1)"
             v-if="this.selectedTopTab===1">Quienes Somos
      </v-btn>
      <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(1)" v-else>Quienes Somos</v-btn>
    </RouterLink>


    <!--Productos-->
    <v-btn class="font-weight-bold" :ripple="false" @mouseenter="drawerProductos = !drawerProductos">Productos</v-btn>



    <v-spacer></v-spacer>




    <!--Contact Us-->
    <RouterLink to="/contact">
      <v-btn class="hover-anchor font-weight-bold" color="#24afff" :ripple="false" @click="changeSelected(5)"
             v-if="this.selectedTopTab===5">CONTACTANOS
      </v-btn>
      <v-btn class="hover-anchor font-weight-bold" :ripple="false" @click="changeSelected(5)" v-else>CONTACTANOS</v-btn>
    </RouterLink>




    <!--Login-->
    <v-btn class="font-weight-bold" :ripple="false">LOGIN</v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>