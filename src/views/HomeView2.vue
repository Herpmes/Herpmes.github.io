<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
export default {
  data () {
    return {
      items: [
        {
          nombre: 'Juan Pérez',
          desc:'"Gracias a HERPmes, ahora en EcoTech Solutions ' +
              'contamos con un ERP personalizado que ha integrado ' +
              'eficientemente nuestras operaciones. Esto ha optimizado ' +
              'nuestra eficiencia y reducido nuestra huella ambiental. ' +
              'Estamos encantados con los resultados.',
          empresa:'EcoTech Solutions'
        },
        {
          nombre: 'María Rodríguez',
          desc:'InnovateTech Labs agradece a HERPmes por implementar ' +
              'un ERP que ha transformado por completo la gestión de ' +
              'nuestros proyectos innovadores. Desde la planificación ' +
              'hasta la facturación, HERPmes ha sido clave para nuestro ' +
              'crecimiento. ¡Gracias por ser parte de nuestro éxito!',
          empresa:'InnovateTech Labs'
        },
        {
          nombre: 'Dr. José García',
          desc:'"Gracias a HERPmes, HealthWell Clinics ahora cuenta' +
              ' con un ERP especializado en la salud. La gestión eficiente de ' +
              'nuestras operaciones ha mejorado significativamente. Estamos ' +
              'agradecidos por su experiencia y apoyo continuo.',
          empresa:'HealthWell Clinics'
        },
        {
          nombre: 'Ana Martínez',
          desc:'FashionHub International ' +
              'agradece a HERPmes por integrar nuestros procesos en un' +
              ' ERP global. La visibilidad mejorada de nuestra cadena ' +
              'de suministro y la toma de decisiones ágil han sido ' +
              'fundamentales para nuestro éxito en mercados globales. ' +
              'Gracias HERPmes por ser nuestro socio estratégico.',
          empresa:'FashionHub International'
        },
        {
          nombre: 'Luis Herrera',
          desc:'Gracias a HERPmes, AgroGrow Farms ahora gestiona eficientemente ' +
              'cosechas, inventario y ventas. La eficiencia y trazabilidad ' +
              'mejoradas nos han permitido alcanzar nuevos niveles de ' +
              'excelencia en la agricultura orgánica.',
          empresa:'AgroGrow Farms'
        },
        {
          nombre: 'Laura Gómez',
          desc:'EduLearn Academy agradece a HERPmes por implementar un ' +
              'ERP que ha revolucionado nuestros procesos administrativos.' +
              ' Proporcionamos servicios educativos de calidad con eficiencia' +
              ' y precisión. Gracias HERPmes por hacer ' +
              'la diferencia en la educación.',
          empresa:'EduLearn Academy'
        },
      ],
    }
  },
}
</script>

<template>
  <main>
    <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        height="250"
        width="60%"
    >
      <div>
        <div class="text-h4 font-weight-bold mb-2">
          HERPmes es una consultoria de software para pequeñas y medianas empresas
        </div>
        <br>
        <p class="text-body-2 mb-4">
          Impulsa tu éxito con nuestra consultoría de software. Utiliza soluciones digitales poderosas para potenciar tu empresa.
        </p>
      </div>
    </v-sheet>

    <v-container
      style="background-color:#24afff;max-width: none ;" align="center"
    >
    <v-row style="width: 70%" >
      <v-col cols="12" md="6">
        <h1 class="text-left text-white">
          Acompañamos a empresas que confían en la tecnología para avanzar
        </h1>
        <br>
        <p class="text-left text-white">
          En <b>HERPmes</b> somos consultores y desarrolladores de <b>software de gestión para pequeñas y medianas empresas</b>.
        </p>
        <br>
        <p class="text-left text-white">
          Sea cual sea tu actividad, tenemos la solución que estás buscando.
        </p>
        <v-btn flat class="bg-transparent text-white">
          Descubre mas
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="/src/Img/Home1.jpg" height="300px"></v-img>
      </v-col>
    </v-row>
    </v-container>

    <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows
        style="margin-top: 50px"
        color="#24afff"
    >

      <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          align="center"
      >

        <v-sheet
            height="100%"
            width="80%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <h1 class="text-center">Casos de cliente</h1>
            <v-container style="max-width: none;height:100%" class="align-center">

                  <h3>{{item.desc}}</h3>
                  <br>
                  <h4>{{item.nombre}}</h4>
                  <h4>{{item.empresa}}</h4>
            </v-container>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container style="max-width: none">
      <v-row>
        <!--Anchor-->
        <v-col>
          <v-card class="mx-auto" hover color="#d2f2fc">
            <v-card-item>
              <v-card-title>
                Anchor
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center">
              <p class="textCenter">Zona marina o yo que se</p>
              <br>
              <v-btn>Descubre Anchor</v-btn>
              <br>
            </v-card-text>
            <div class="text-center">
              <img src="/src/Img/Logos/LogoAncla.png" alt="">
            </div>
          </v-card>
        </v-col>
        <!--Nuixo-->
        <v-col>
          <v-card class="mx-auto" hover color="#ff8787">
            <v-card-item>
              <v-card-title>
                Nuixo
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center">
              <p class="textCenter">Bot 1</p>
              <br>
              <v-btn>Descubre Nuixo</v-btn>
              <br>
            </v-card-text>
            <div class="text-center">
              <img src="/src/Img/Logos/LogoAncla.png" alt="">
            </div>
          </v-card>
        </v-col>
        <!--CodeCrafters-->
        <v-col>
          <v-card class="mx-auto" hover color="#9489f5">
            <v-card-item>
              <v-card-title class="text-black">
                CodeCrafters
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center">
              <p class="text-black">Bot 2</p>
              <br>
              <v-btn>Descubre CodeCrafters</v-btn>
              <br>
            </v-card-text>
            <div class="text-center">
              <img src="/src/Img/Logos/LogoAncla.png" alt="">
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style>
.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.v-carousel__controls .v-window-item.v-window-item--active {
  background-color: #ff5722; /* Cambia el color para la bolita seleccionada */
}
</style>