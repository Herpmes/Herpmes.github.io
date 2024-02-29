<script setup>
import {computed} from "vue";

const props = defineProps(['title','subtitle'])


import {useColorStore} from "@/stores/ColorStore.js";
const colorStore = useColorStore()
let color = computed(()=> colorStore.getColor);
</script>

<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center px-4 py-15"
    width="101%"
    :style="{
      background: color === 'blue' ? 'radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%)' :
                  color === 'green' ? 'radial-gradient(3339.49% 274.53% at 50% 50%, #64862f 0%, #144b02 100%)' :
                  'radial-gradient(3339.49% 274.53% at 50% 50%, #ef4242 0%, #600404 100%)'
    }"
  >
    <v-row class="text-white" style="width: 100%">
      <v-spacer></v-spacer>
      <v-col cols="10">
        <div class="text-h4 font-weight-bold mb-2">
          {{props.title}}
        </div>
        <br>
        <p class="text-body-1 mb-4">
          {{props.subtitle}}
        </p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-sheet>
</template>

<style scoped>

</style>