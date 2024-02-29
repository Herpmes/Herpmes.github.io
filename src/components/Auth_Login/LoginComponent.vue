<script setup>
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Porfavor introduzca un correo válido.'
    },
    password(value) {
      if (/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/.test(value)) return true

      return 'La contraseña debe de contener:\n ' +
        '1. Una letra mayúscula. \n' +
        '2. Al menos un dígito. \n' +
        '3. Al menos un carácter especial (#,@,~,$,&) \n' +
        '4. Al menos 8 carácteres.'
    }
  }
})
const password_form = useField('password')
const email_form = useField('email')



const submit = handleSubmit(values => {
  open("http://localhost:5173","_self")
})
</script>

<template>
  <main>
    <v-row class="text-center mt-16 mr-14 ml-14 mb-8">
      <v-spacer></v-spacer>
      <v-col cols="12" md="18">
        <h1>Inicia sesión</h1>
        <br>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="email_form.value.value"
            :error-messages="email_form.errorMessage.value"
            label="Correo Electrónico"
          ></v-text-field>

          <v-text-field
            v-model="password_form.value.value"
            :counter="9"
            :error-messages="password_form.errorMessage.value"
            label="Contraseña"
            type="password"
          ></v-text-field>


          <v-btn @click="handleSubmit"
                 class="me-4 mt-3"
                 type="submit"
                 color="primary"
                 >
           Inicia Sesión
          </v-btn>

          <v-btn @click="handleReset" class="mt-3" color="primary">
            Limpiar
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </main>
</template>
