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
const password = useField('password')
const email = useField('email')

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
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
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="Correo Electrónico"
          ></v-text-field>

          <v-text-field
            v-model="password.value.value"
            :counter="9"
            :error-messages="password.errorMessage.value"
            label="Contraseña"
            type="password"
          ></v-text-field>

          <v-btn @click="handleSubmit"
                 class="me-4 mt-3"
                 type="submit">
            Inicia sesión
          </v-btn>

          <v-btn @click="handleReset" class="mt-3">
            Limpiar
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </main>
</template>
