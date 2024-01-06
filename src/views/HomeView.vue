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
        width="100%"
        style="
        background-image: url('src/Img/HomeBaner.jpg');
        background-repeat: repeat;
        background-size: cover"
    >
      <div style="width: 60%" class="text-white">
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
      style="max-width: none ; margin-top: 50px"
      align="center"
    >
    <v-row style="width: 70%" class="text-left text-black">
      <v-col cols="12" md="6">
        <h1>
          Acompañamos a empresas que confían en la tecnología para avanzar
        </h1>
        <br>
        <p>
          En <b>HERPmes</b> somos consultores y desarrolladores de <b>software de gestión para pequeñas y medianas empresas</b>.
        </p>
        <br>
        <p>
          Sea cual sea tu actividad, tenemos la solución que estás buscando.
        </p>
        <br>
        <div class="text-right">
          <v-btn flat class="bg-transparent" >
            Descubre mas
          </v-btn>
        </div>
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
        class="bg-blue"
    >

      <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          align="center"
      >

        <v-sheet
            height="100%"
            width="80%"
            class="bg-blue"
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