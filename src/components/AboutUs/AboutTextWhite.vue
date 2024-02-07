<script setup>
const props = defineProps(['logo','desc','img'])
</script>

<template>
  <v-row  class="ext-left text-black px-16 py-10" justify="center" v-if="$vuetify.display.name!=='lg'">
    <v-spacer></v-spacer>
    <v-col cols="12">
      <v-img :src="props.logo" width="200px"></v-img>
      <br>
      <p style="font-size: 20px">
        {{props.desc}}
      </p>
    </v-col>
    <v-col cols="12">
      <v-img :src="props.img" height="300px"></v-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
  <v-row  class="text-left text-black px-16 py-10" justify="center" v-else>
    <v-spacer></v-spacer>
    <v-col cols="12" md="5">
      <v-img :src="props.logo" width="200px"></v-img>
      <br>
      <p style="font-size: 20px">
        {{props.desc}}
      </p>
    </v-col>
    <v-spacer v-if="$vuetify.display.name!=='lg'"></v-spacer>
    <v-col cols="12" md="5">
      <v-img :src="props.img" height="300px"></v-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>