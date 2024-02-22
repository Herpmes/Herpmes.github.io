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
        this.snackbar=true;
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
            this.snackbar=true;
          })
          .catch(error => {
            this.text = "Fallo al enviar correo"
            this.snackbar=true;

            console.error('Error al enviar el correo', error);
          });
      }

    }
  }
}
</script>

<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="11" sm="7" class="mt-12">
      <form style="width: 100%;">
        <label for="Name" style="font-size: 20px">Nombre y Apellidos<span style="color: red">*</span></label>
        <v-text-field name="Name" v-model="this.name"></v-text-field>
        <label for="Email" style="font-size: 20px">Correo<span style="color: red">*</span></label>
        <v-text-field name="Email" v-model="this.email"></v-text-field>
        <label for="Telf" style="font-size: 20px">Teléfono<span style="color: red">*</span></label>
        <v-text-field name="Telf" v-model="this.telf"></v-text-field>
        <label for="Subject" style="font-size: 20px">Asunto<span style="color: red">*</span></label>
        <v-text-field name="Subject" v-model="this.subject"></v-text-field>
        <label for="Reason" style="font-size: 20px">Escribe aquí tu consulta<span style="color: red">*</span></label>
        <v-textarea name="Reason" v-model="this.body"></v-textarea>
        <div class="align-center">
          <!--@click="enviarCorreo"-->
          <v-btn class="bg-blue" style="font-size: 20px" @click="this.text='Correo Enviado';snackbar=true;enviarCorreo()">Enviar</v-btn>
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
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<style scoped>

</style>