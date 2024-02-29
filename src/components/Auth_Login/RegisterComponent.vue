<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2 && value?.length <= 10) return true

      if (value?.length < 2) return 'Mmmmmmmm... El nombre parece ser muy corto.'

      if (value?.length > 10) return 'Mmmmmmmm... El nombre parece ser muy largo.'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'El número debe de contener al menos 9 dígitos.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Porfavor introduzca un correo válido.'
    },
    password(value) {
      if (/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/.test(value)) return true

      return 'La contraseña debe de contener: ' +
        '1. Una letra mayúscula. ' +
        '2. Al menos un dígito. ' +
        '3. Al menos un carácter especial (#,@,~,$,&) ' +
        '4. Al menos 8 carácteres.'
    },
    select(value) {
      if (value) return true

      return 'Selecciona un departamento'
    }
  }
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const password = useField('password')

const items = ref([
  'Anchor',
  'NuixoERP',
  'CodeCrafters'
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <main>
    <v-row class="text-center mt-16 mr-14 ml-14 mb-8">
      <v-spacer></v-spacer>
      <v-col cols="12" md="18">
        <h1>Regístrate</h1>
        <br>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Nombre"
            class="mt-3"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="9"
            :error-messages="phone.errorMessage.value"
            label="Número de Teléfono"
            class="mt-3"
          ></v-text-field>

          <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="Contraseña"
            type="password"
            class="mt-3"
          ></v-text-field>

          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="Correo Electrónico"
            class="mt-3"
          ></v-text-field>

          <v-select
            v-model="select.value.value"
            :items="items"
            :error-messages="select.errorMessage.value"
            label="Departamentos"
            class="mt-3"
          ></v-select>

          <v-btn @click="handleSubmit"
            class="me-4 mt-3"
            type="submit">
            Regístrate
          </v-btn>

          <v-btn @click="handleReset" class="mt-3">
            Limpiar
          </v-btn>
        </form>

        <v-card width="300" color="primary">
          <template v-slot:title>
            ¿Ya tienes cuenta?
          </template>

          <template v-slot:subtitle>
            Presiona aquí para iniciar sesión
          </template>

          <template v-slot:text>
            <RouterLink to="/login">
              <v-btn>Inicia Sesión</v-btn>
            </RouterLink>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>
