<script xmlns="http://www.w3.org/1999/html">
export default {
  data(){
    return{
      email: "",
      subject:"",
      name:"",
      telf:"",
      body:""
    }
  }
}
</script>

<template>
  <main style="margin-top: 60px">
    <!--
      *****************
      Banner
      *****************
      -->
    <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        height="250"
        width="100%"
        style="background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);"
    >
      <div style="width: 60%" class="text-white">
        <div class="text-h4 font-weight-bold mb-2">
          CONTÁCTANOS
        </div>
        <br>
        <p class="text-body-1 mb-4">
          Nuestro horario es de 08:00 a 19:00 de lunes a jueves; y de 08:00 a 15:00 los viernes.
        </p>
      </div>
    </v-sheet>

    <!--
    ******************
    FORM
    ******************
    -->
    <v-container style="max-width: none ; margin-top: 50px;width: 60%" class="align-center">
      <form style="width: 100%;">
        <label for="Name" style="font-size: 20px" v-model="this.name">Nombre y Apellidos</label>
        <v-text-field name="Name"></v-text-field>
        <label for="Email" style="font-size: 20px" v-model="this.email">Correo</label>
        <v-text-field name="Email"></v-text-field>
        <label for="Telf" style="font-size: 20px" v-model="this.telf">Teléfono</label>
        <v-text-field name="Telf"></v-text-field>
        <label for="Subject" style="font-size: 20px" v-model="this.subject">Asunto</label>
        <v-text-field name="Subject"></v-text-field>
        <label for="Reason" style="font-size: 20px" v-model="this.body">Escribe aquí tu consulta para ayudarte</label>
        <v-textarea name="Reason"></v-textarea>
        <div class="align-center">
          <!--<v-btn class="bg-blue" style="font-size: 20px" :href="">Enviar</v-btn>-->
          {{this.body}}
        </div>
      </form>
    </v-container>
  </main>
</template>

<style>

</style>