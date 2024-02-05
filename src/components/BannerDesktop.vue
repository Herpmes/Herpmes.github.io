<script setup>
const props = defineProps(['title','subtitle'])
</script>

<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center px-4 py-15"
    width="100%"
    style="background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);"
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