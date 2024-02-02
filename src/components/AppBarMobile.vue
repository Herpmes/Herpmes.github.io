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
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>

</style>