<script>
export default {
  data: () => ({
    tab: null,
    show: false
  }),
}

</script>
<template>

  <main class="mt-15">

<v-img
    style="display: flex;"
    aspect-ratio="16/9"
    cover
src="https://i.imgur.com/8p34Az4.jpeg"
>

  <div class="d-flex justify-center align-center" style="width: 100%;">
    <v-img dark elevation="24"
           :width="400"
           contain
           src="https://i.imgur.com/8fFmuwI.png"
    ></v-img>
  </div>
 </v-img>

  <v-card>
    <v-tabs
        v-model="tab"
        bg-color="primary"
    >
      <v-tab value="one">Néstor</v-tab>
      <v-tab value="two">Ángel</v-tab>
      <v-tab value="three">Rafa</v-tab>
      <v-tab value="four">Jorge</v-tab>
      <v-tab value="five">Vicente</v-tab>
      <v-tab value="six">Monsef</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <div style="display: inline-flex; justify-content: space-between; align-items: center; width: 100%;">
            <v-img
                style="width: 180px; height: 180px; margin-left: auto "
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
            <v-card class="mx-auto" max-width="500">
              <v-img
                  height="500px"
                  aspect-ratio="16/9"
                  contain
                  src="https://i.imgur.com/OHRkNwu.jpeg"
              ></v-img>

              <v-card-title>
                Néstor Cantarero Pacheco
              </v-card-title>

              <v-card-subtitle>
                Investigador de Software
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="blue" variant="text">
                  Sobre mi
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Soy una persona autodidacta, que ha descubierto su pasión en el mundo empresarial y del software. Concretamente en las asignaturas de estadísticas, sistemas de gestión empresarial y acceso a datos, hizo crecer mi interés en los datos y su análisis.

                    Esta inclinación no se ha desvanecido a la hora de continuar mis estudios, puesto que he logrado compaginarlos con el trabajo  manteniendo un alto rendimiento.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-img
                style="width: 180px; height: 180px; margin-right: auto"
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
          </div>
        </v-window-item>


        <v-window-item value="two">
          <div style="display: inline-flex; justify-content: space-between; align-items: center; width: 100%;">
            <v-img
                style="width: 180px; height: 180px; margin-left: auto "
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
            <v-card class="mx-auto" max-width="500">
              <v-img
                  height="400px"
                  aspect-ratio="16/9"
                  contain
                  src="https://i.imgur.com/D424TsL.png"
              ></v-img>

              <v-card-title>
                Angel Alegre Mena
              </v-card-title>

              <v-card-subtitle>
                Programador Original
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="blue" variant="text">
                  Sobre mi
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Destaca por su constancia y perfeccionismo, cualidades reflejadas en su dedicación a las tareas asignadas. Por otra parte, nuestro miembro es creativo, sobre todo en la elaboración de presentaciones aportando un gran enfoque innovador.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-img
                style="width: 180px; height: 180px; margin-right: auto"
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
          </div>
        </v-window-item>


        <v-window-item value="three">
          <div style="display: inline-flex; justify-content: space-between; align-items: center; width: 100%;">
            <v-img
                style="width: 180px; height: 180px; margin-left: auto "
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
            <v-card class="mx-auto" max-width="500">
              <v-img
                  height="400px"
                  aspect-ratio="16/9"
                  contain
                  src="https://i.imgur.com/WsA0ERp.png"
              ></v-img>

              <v-card-title>
                Rafa Villaescusa Climent
              </v-card-title>

              <v-card-subtitle>
                Programador Innovador
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="blue" variant="text">
                  Sobre mi
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Bueno, desde un punto de vista personal y siempre hablando respecto al trabajo, me considero una persona, una persona detallista, muy creativa/original y perfeccionista Tras hacer varias preguntas a compañeros y amigos he podido cerciorarme de que así es.

                    Empece en la informática desde que escogí informática como optativa en 2 de la ESO desde ahí mi interés y gusto por la informática solo ha hecho que crecer.

                    Me consideraría una persona de desarrollo de front-end por mis puntos fuertes destacados arriba.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-img
                style="width: 180px; height: 180px; margin-right: auto"
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
          </div>
        </v-window-item>

        <v-window-item value="four">
          <div style="display: inline-flex; justify-content: space-between; align-items: center; width: 100%;">
            <v-img
                style="width: 180px; height: 180px; margin-left: auto "
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
            <v-card class="mx-auto" max-width="500">
              <v-img
                  height="400px"
                  aspect-ratio="16/9"
                  contain
                  src="https://i.imgur.com/98FC1XV.jpeg"
              ></v-img>

              <v-card-title>
                Jorge Sanchis Manzana
              </v-card-title>

              <v-card-subtitle>
                Especialista de campo
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="blue" variant="text">
                  Sobre mi
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Destaca en la gestión eficiente de su tiempo por lo que contribuye a su productividad general. Por otra parte, su implicación se refleja en su compromiso con las tareas y responsabilidades asignadas fortaleciendo la dinámica del equipo.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-img
                style="width: 180px; height: 180px; margin-right: auto"
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
          </div>
        </v-window-item>

        <v-window-item value="five">
          <div style="display: inline-flex; justify-content: space-between; align-items: center; width: 100%;">
            <v-img
                style="width: 180px; height: 180px; margin-left: auto "
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
            <v-card class="mx-auto" max-width="500">
              <v-img
                  height="400px"
                  aspect-ratio="16/9"
                  contain
                  src="https://i.imgur.com/otRmB1J.jpeg"
              ></v-img>

              <v-card-title>
                Vicente Arnau Romay
              </v-card-title>

              <v-card-subtitle>
                Planeador Profesional
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="blue" variant="text">
                  Sobre mi
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Destaca en la capacidad para adaptarse rápidamente a los desafíos y obstáculos que pueda enfrentar al grupo promoviendo un ambiente más colaborativo. Por otra parte, siempre suele estar centrado y no suele despistarse.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-img
                style="width: 180px; height: 180px; margin-right: auto"
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
          </div>
        </v-window-item>
        <v-window-item value="six">
          <div style="display: inline-flex; justify-content: space-between; align-items: center; width: 100%;">
            <v-img
                style="width: 180px; height: 180px; margin-left: auto "
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
            <v-card class="mx-auto" max-width="500">
              <v-img
                  height="400px"
                  aspect-ratio="16/9"
                  contain
                  src="https://i.imgur.com/DcPqhRC.png"
              ></v-img>

              <v-card-title>
                Vicente Arnau Romay
              </v-card-title>

              <v-card-subtitle>
                Planeador Profesional
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="blue" variant="text">
                  Sobre mi
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Soy un estudiante de 20 años apasionado de las nuevas tecnologías, con ganas de aprender constantemente. Mi entorno me define como una persona inteligente, creativa, sociable, colaborativa y con facilidad para adquirir nuevos conocimientos.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-img
                style="width: 180px; height: 180px; margin-right: auto"
                contain
                src="https://i.imgur.com/0DYmczp.png"
            ></v-img>
          </div>
        </v-window-item>


      </v-window>
    </v-card-text>
  </v-card>
    </main>
</template>

<style scoped>

</style>