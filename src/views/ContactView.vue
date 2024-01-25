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
    <!--
    ******************
    TARJETAS
    ******************
    -->
    <v-container
        style="max-width: none ; margin-top: 50px;
      padding-top: 40px;padding-bottom: 40px;width: 60%"
        align="center"
    >
      <!--Titulo-->
      <v-row>
        <v-col class="align-center">
          <h1>Otras formas de contactarnos</h1>
        </v-col>
      </v-row>
      <!--Tarjetitas-->
      <v-row>
        <!--Telf-->
        <v-col>
          <v-card class="mx-auto" hover color="#eeeeee" href="tel:611-740-761">
            <v-card-item>
              <v-card-title>
                <v-icon icon="mdi-phone"></v-icon>
                <p><b>Llamando al</b></p>
              </v-card-title>
            </v-card-item>
            <v-card-text class="text-center">
              <br>
              <p>611-740-761</p>
              <br>
            </v-card-text>
          </v-card>
        </v-col>
        <!--EMAIL-->
        <v-col>
          <v-card class="mx-auto" hover color="#eeeeee" href="mailto:herpmes.enterprise@gmail.com">
            <v-card-item>
              <v-card-title>
                <v-icon icon="mdi-email"></v-icon>
                <p><b>Correo al</b></p>
              </v-card-title>
            </v-card-item>
            <v-card-text class="text-center">
              <br>
              <p>herpmes.enterprise@gmail.com</p>
              <br>
            </v-card-text>
          </v-card>
        </v-col>
        <!--Dirección-->
        <v-col>
          <v-card class="mx-auto" hover color="#eeeeee" href="https://www.google.es/maps/place/IES+BENIGASL%C3%93/@39.8209435,-0.2269505,17z/data=!3m1!4b1!4m6!3m5!1s0xd600faa5ce4c981:0x6435a11e74fdf3c2!8m2!3d39.8209394!4d-0.2243756!16s%2Fg%2F11hdxxyt26?entry=ttu">
            <v-card-item>
              <v-card-title>
                <v-icon icon="mdi-map-marker-circle" style="margin-right: 10px"></v-icon>
                <p><b>Yendo a</b></p>
              </v-card-title>
            </v-card-item>
            <v-card-text class="text-center">
              <br>
              <p>Carrer Arcadi García i Sanz, 1, 12600 La Vall d'Uixó, Castelló</p>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style>

</style>