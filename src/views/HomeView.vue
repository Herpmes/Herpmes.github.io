<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      items: [
        {
          nombre: 'Juan Pérez',
          desc: 'Gracias a HERPmes, ahora en EcoTech Solutions ' +
              'contamos con un ERP personalizado que ha integrado ' +
              'eficientemente nuestras operaciones. Esto ha optimizado ' +
              'nuestra eficiencia y reducido nuestra huella ambiental. ' +
              'Estamos encantados con los resultados.',
          empresa: 'EcoTech Solutions'
        },
        {
          nombre: 'María Rodríguez',
          desc: 'InnovateTech Labs agradece a HERPmes por implementar ' +
              'un ERP que ha transformado por completo la gestión de ' +
              'nuestros proyectos innovadores. Desde la planificación ' +
              'hasta la facturación, HERPmes ha sido clave para nuestro ' +
              'crecimiento. ¡Gracias por ser parte de nuestro éxito!',
          empresa: 'InnovateTech Labs'
        },
        {
          nombre: 'Dr. José García',
          desc: 'Gracias a HERPmes, HealthWell Clinics ahora cuenta' +
              ' con un ERP especializado en la salud. La gestión eficiente de ' +
              'nuestras operaciones ha mejorado significativamente. Estamos ' +
              'agradecidos por su experiencia y apoyo continuo.',
          empresa: 'HealthWell Clinics'
        },
        {
          nombre: 'Ana Martínez',
          desc: 'FashionHub International ' +
              'agradece a HERPmes por integrar nuestros procesos en un' +
              ' ERP global. La visibilidad mejorada de nuestra cadena ' +
              'de suministro y la toma de decisiones ágil han sido ' +
              'fundamentales para nuestro éxito en mercados globales. ' +
              'Gracias HERPmes por ser nuestro socio estratégico.',
          empresa: 'FashionHub International'
        },
        {
          nombre: 'Luis Herrera',
          desc: 'Gracias a HERPmes, AgroGrow Farms ahora gestiona eficientemente ' +
              'cosechas, inventario y ventas. La eficiencia y trazabilidad ' +
              'mejoradas nos han permitido alcanzar nuevos niveles de ' +
              'excelencia en la agricultura orgánica.',
          empresa: 'AgroGrow Farms'
        },
        {
          nombre: 'Laura Gómez',
          desc: 'EduLearn Academy agradece a HERPmes por implementar un ' +
              'ERP que ha revolucionado nuestros procesos administrativos.' +
              ' Proporcionamos servicios educativos de calidad con eficiencia' +
              ' y precisión. Gracias HERPmes por hacer ' +
              'la diferencia en la educación.',
          empresa: 'EduLearn Academy'
        },
      ],
    }
  },
}
</script>

<template>
  <!--
  background-image: url('src/Img/HomeBaner.jpg');
        background-repeat: repeat;
        background-size: cover
  -->
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
          HERPmes es una consultoria de software para pequeñas y medianas empresas
        </div>
        <br>
        <p class="text-body-1 mb-4">
          Impulsa tu éxito con nuestra consultoría de software. Utiliza soluciones digitales poderosas para potenciar tu
          empresa.
        </p>
      </div>
    </v-sheet>

    <!--
    *****************
    Mini Desc
    *****************
    -->

    <v-container
        style="max-width: none ; margin-top: 50px"
        align="center"
    >
      <v-row style="width: 70%" class="text-left text-black">
        <v-col cols="12" md="6">
          <h1>
            Acompañamos a empresas en su camino al éxito
          </h1>
          <br>
          <p>
            En <b>HERPmes</b> somos consultores y desarrolladores de <b>software de gestión para pequeñas y medianas
            empresas</b>.
          </p>
          <br>
          <p>
            Sea cual sea tu actividad, tenemos la solución que estás buscando.
          </p>
          <br>
          <div class="text-right">
            <router-link to="/about">
              <v-btn flat class="bg-transparent">
                Descubre mas
              </v-btn>
            </router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/src/Img/Home1.jpg" height="300px"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!--
    *****************
    Casos de Exito
    *****************
    -->
    <center style="
              background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);
              padding-top: 10px;padding-bottom: 20px;
              margin-top: 50px" class="text-white">
      <h1  style="margin-top: 50px;margin-bottom: -60px">Casos de éxito</h1>
      <v-carousel
          height="750"
          hide-delimiter-background
          show-arrows
          style="width: 60%;"
          class="text-white"
      >

        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            align="center"
        >

          <v-card class="mx-auto" hover  width="80%" height="75%" style="margin-top: 10%; border-radius: 30px">
                  <v-row style="height: 100%">
                    <v-col style="height: 100%;text-align: left;padding: 5%" cols="6">
                      <v-icon icon="mdi-format-quote-close" size="90px"></v-icon>
                      <p style="font-size: 20px">{{item.desc}}</p>
                      <br>
                      <p style="font-size: 20px;font-weight: bold">
                        {{item.nombre}}
                        <br>
                        {{item.empresa}}
                      </p>
                    </v-col>
                    <v-col style="height: 100%;padding: 3%" cols="6">
                      <v-img src="/src/Img/Home1.jpg" height="100%" class="align-center"></v-img>
                    </v-col>
                  </v-row>
<!--            <v-card-item>-->
<!--              <v-card-title class="text-black">-->
<!--                CodeCrafters-->
<!--              </v-card-title>-->
<!--            </v-card-item>-->

<!--            <v-card-text class="text-center">-->
<!--              <p class="text-black">Bot 2</p>-->
<!--              <br>-->
<!--              <v-btn>Descubre CodeCrafters</v-btn>-->
<!--              <br>-->
<!--            </v-card-text>-->
<!--            <div class="text-center">-->
<!--              <img src="/src/Img/Logos/LogoAncla.png" alt="">-->
<!--            </div>-->
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </center>
  </main>
</template>

<style>
.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>