<script setup>
const props = defineProps(['logo','desc','img'])
</script>

<template>
  <v-row  class="text-left text-black mt-10 px-16" justify="center">
    <v-spacer></v-spacer>
    <v-col cols="12" md="4">
      <v-img :src="props.logo" width="50%"></v-img>
      <br>
      <p style="font-size: 20px">
        {{props.desc}}
      </p>
    </v-col>
    <v-col cols="12" md="4">
      <v-img :src="props.img" height="300px"></v-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>