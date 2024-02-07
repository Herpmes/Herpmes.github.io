<script setup>
const props = defineProps(['logo','desc','img'])
const phoneSized = ["xs","sm","md"]
</script>

<template>
  <v-row  class="text-left text-black px-16 py-10 bBG text-white" justify="center" v-if="phoneSized.includes($vuetify.display.name)">
    <v-col cols="12">
      <v-img :src="props.logo" width="100px" align="left"></v-img>
      <br>
      <p style="font-size: 20px">
        {{props.desc}}
      </p>
    </v-col>
    <v-col cols="12" >
      <v-img :src="props.img" height="300px"></v-img>
    </v-col>
  </v-row>

  <v-row  class="text-left text-black px-16 py-10 bBG text-white" justify="center" v-else>
    <v-spacer></v-spacer>
    <v-col cols="5">
      <v-img :src="props.img" height="300px"></v-img>
    </v-col>
    <v-col cols="5">
      <v-img :src="props.logo" width="100px" align="left"></v-img>
      <br>
      <p style="font-size: 20px">
        {{props.desc}}
      </p>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>