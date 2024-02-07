<script setup>
const props = defineProps(['logo','desc','img'])
</script>

<template>
  <v-row  class="text-left text-black mt-10 px-16 py-10 bBG text-white" justify="center" v-if="this.$vuetify.display.name!=='lg'">
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

  <v-row  class="text-left text-black mt-10 px-16 py-10 bBG text-white" justify="center" v-else>
    <v-spacer></v-spacer>
    <v-col cols="5">
      <v-img :src="props.img" height="300px"></v-img>
    </v-col>
    <v-spacer v-if="this.$vuetify.display.name!=='lg'"></v-spacer>
    <v-col cols="12"  md="6">
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
.bBG{
  background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%)
}
</style>