<template>
  <div class="spacer"></div>

  <v-container>
    <v-row align-content="center">
      <v-col cols="12" class="banner">
        Conoce
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-img min-height="100" max-height="100" class="imageAncla" src="src/Img/Logos/LogoAnchorNegro.png"></v-img>
      </v-col>
    </v-row>


    <v-carousel
      hide-delimiters
      :show-arrows="$vuetify.display.name!=='xs'"
      class="text-white"
      height="auto">

      <v-container>
      <v-carousel-item v-for="(item, i) in carouselItems" :key="i">
        <v-card class="mx-auto" width="80%" style="border-radius: 30px">
          <v-row class="pb-14">
            <v-col cols="12" lg="6" class="text-left pa-15">
              <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
              <p style="font-size: 20px">{{ item.text }}</p>
              <br>
              <p style="font-size: 30px; font-weight: bold;">{{ item.name }}</p> <!-- Add the name here -->
            </v-col>
            <v-col cols="12" lg="6">
              <v-img :src="item.image" max-height="400px" class="align-center mt-15" v-if="$vuetify.display.width > 1280"></v-img>
              <v-img :src="item.image" max-height="200px" class="align-center" v-else></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-carousel-item>
      </v-container>
    </v-carousel>

  </v-container>
</template>

<style scoped>

.banner {
  display: flex;
  justify-content: center;
  font-size: 10em;
}
.spacer{
  height: 3rem;
}
</style>

<script setup>
const carouselItems = [
  {
    image: 'src/Img/img Anchor/Foto_Aaron.png',
    text: 'Lo que aporto al equipo a parte de la constancia y la disponibilidad es una gran capacidad de trabajo, pues puedo estar durante muchísimas horas haciendo lo mismo sin cansarme, a parte, al igual que todos, estoy acostumbrado a ser autodidacta.\n' +
      '\n' +
      'Ya estoy trabajando en el tema de ser más social y el otro problema creo que es bastante fácil de solucionar ya que me pasa porque no estoy acostumbrado a trabajar con/depender de más gente, una vez me vuelva más consciente del hecho de que no estoy haciéndolo solo este problema se solucionara.',
    name: 'Aaron'
  },
  {
    image: 'src/Img/img Anchor/Foto_Roberto.png',
    text: 'Yo considero que destaco en mi capacidad de generar ideas y soluciones prácticas en poco tiempo, también en mi capacidad para que no me superen los nervios, siempre se mantener la calma y pensar con claridad, o al menos en la mayoría de los casos.',
    name: 'Roberto'
  },
  {
    image: 'src/Img/img Anchor/Foto_Ramon.jpg',
    text: 'Personalmente pienso que destaco en la amplia cantidad de información que recopilo en poco tiempo, y en mi opinión, creo que esa es una gran cualidad que puedo proporcionar a mi equipo.\n' +
      ' \n' +
      'También mi alta capacidad de conversar con mis compañeros y contrastar nuestros puntos de vista. También, más en lo malo que en lo bueno, suelo ver todo con lupa, cosa que puede aportar positivamente o negativamente al equipo creando situaciones de estrés personal.',
    name: 'Ramon'
  },
  {
    image: 'src/Img/img Anchor/Foto_Joseph_Michel.png',
    text: 'En mi equipo, considero que mi contribución va más allá de las habilidades técnicas. Mi enfoque colaborativo y mi capacidad para fomentar un ambiente positivo son cualidades muy valiosas que aporto a mi equipo.\n' +
      '\n' +
      'Mi disposición para asumir responsabilidades y trabajar en equipo, ayuda a impulsar a mis compañeros para lograr un objetivo trazado.',
    name: 'Joseph Michel'
  },
  {
    image: 'src/Img/img Anchor/Foto_Mario.jpg',
    text: 'Me considero una persona en general bastante creativa y sobre todo que busca la innovación en cualquier ámbito en el que se encuentre.\n' +
      ' \n' +
      'También soy capaz de dedicar muchísimo tiempo y trabajo a algo si me llama la atención, cosa que también tiene lado negativo y es que si algo no me interesa no le dedico esfuerzo en absoluto, tiendo a tomarlo como un lastre enorme o estorbo, situación que me acaba agobiando muchísimo y hace que no suela salir bien.',
    name: 'Mario'
  },
  {
    image: 'src/Img/img Anchor/Foto_Alex.jpeg',
    text: 'Yo destaco en mis puntos de control del tiempo y monitorear el mismo, que a su vez soy impulsivo a la hora de asignarme las tareas que más me gustan y poder avanzar de forma autodidacta.\n' +
      '\n' +
      'Las mejoras que puedo proporcionar y las que quiero realizar, es escuchar las opiniones de mis compañeros los cuales dedican mucho tiempo a los trabajos y poder avanzar y colaborar como un equipo.',
    name: 'Alex'
  }
];

</script>