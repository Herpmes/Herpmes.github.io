<script xmlns="http://www.w3.org/1999/html">
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      email: "",
      subject: "",
      name: "",
      telf: "",
      body: "",
      snackbar: false,
      text:""
    }
  }, methods: {
    enviarCorreo() {
      const templateParams = {
        to_email: 'anchordepartment@gmail.com',
        subject: this.subject,
        message: 'Hola, soy ' + this.name + '\n' +
            'Telf: ' + this.telf + '\n' +
            'Email: ' + this.email + '\n' +
            'Causa del contacto: \n' + this.body
      };

      if (this.name==="" || this.subject==="" || this.body==="" || this.telf==="" || this.email==="") {
        this.text="Campos vacios";
      }else{
        emailjs.send(
            'service_gmailAnchor',
            'template_Anchor',
            templateParams,
            'DjMfAW2th2o_Ic2Il'
        )
            .then(response => {
              this.body = "";
              this.name = "", this.telf = "", this.email = "";
              this.subject = "";
              this.text = "Correo enviado"

            })
            .catch(error => {
              this.text = "Fallo al enviar correo"
              console.error('Error al enviar el correo', error);
            });
      }

      this.snackbar=true;
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
        <label for="Name" style="font-size: 20px">Nombre y Apellidos</label>
        <v-text-field name="Name" v-model="this.name"></v-text-field>
        <label for="Email" style="font-size: 20px">Correo</label>
        <v-text-field name="Email" v-model="this.email"></v-text-field>
        <label for="Telf" style="font-size: 20px">Teléfono</label>
        <v-text-field name="Telf" v-model="this.telf"></v-text-field>
        <label for="Subject" style="font-size: 20px">Asunto</label>
        <v-text-field name="Subject" v-model="this.subject"></v-text-field>
        <label for="Reason" style="font-size: 20px">Escribe aquí tu consulta para ayudarte</label>
        <v-textarea name="Reason" v-model="this.body"></v-textarea>
        <div class="align-center">
          <v-btn class="bg-blue" style="font-size: 20px" @click="enviarCorreo">Enviar</v-btn>
          <v-snackbar multi-line v-model="snackbar">
            {{ this.text }}
            <template v-slot:actions>
              <v-btn
                  color="white"
                  variant="text"
                  @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </form>
    </v-container>
  </main>
</template>

<style>

</style>