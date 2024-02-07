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
    <v-row class="px-5">
      <v-col cols="2">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" sm="5 " md="4" style="display: flex;">
        <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoHChiquito">
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-app-bar>
</template>

<style scoped>

</style>