<script setup>
import ServiciosJson from '/src/json/InfoServicios.json'

const servicios = ServiciosJson
let cant = servicios.length
console.log()
</script>

<template>
  <v-row v-for="i in cant" :key="i" v-bind:class="((i-1)%2!==0)?'bBG text-white py-8':'py-8'">
    <v-spacer />
    <v-col cols="10" md="8">
      <v-row class="py-5 rowsB">
        <v-col cols="12">
          <h1>{{ servicios[i - 1].nombre }}</h1>
          <br><br>
          <p>{{ servicios[i - 1].descripcion }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" v-for="(item , index) in servicios[i-1].caracteristicas" :key="index">
          <v-row>
            <v-col cols="3">
              <img src="https://raw.githubusercontent.com/aarricgra/aarricgra.github.io/main/Img/icons/check.png" alt="" width="32px" class="imageRight">
            </v-col>
            <v-col cols="9">
              <h3>{{item.titulo}}</h3>
            </v-col>
            <v-col cols="12">
              <p>{{item.descripcion}}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<style scoped>
.rowsB{
  padding-bottom: 12px;
  border-bottom-color: #021e73;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  margin-bottom: 8px
}
</style>