<script>
import {RouterLink, RouterView} from 'vue-router'

export default {
  data() {
    return {selectedTopTab: 0, drawer: true, prueba: false}
  }, methods: {
    changeSelected(newSelected) {
      this.selectedTopTab = newSelected
    }
  }
}
</script>
<template>
  <v-app>
    <!--
    ******************
    Menu superior
    ******************
    -->
    <v-app-bar fixed style="height: 60px"><img src="/src/Img/Logos/LogoHerpmes.png" alt="" class="logoH">
      <!--Home-->
      <RouterLink to="/">
        <v-btn class="font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(0)"
               v-if="this.selectedTopTab===0">Inicio
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(0)" v-else>Inicio</v-btn>
      </RouterLink>

      <!--About-->
      <RouterLink to="/about">
        <v-btn class="font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(1)"
               v-if="this.selectedTopTab===1">Quienes Somos
        </v-btn>
        <v-btn class="font-weight-bold" :ripple="false" @click="changeSelected(1)" v-else>Quienes Somos</v-btn>
      </RouterLink>
      <v-btn class="font-weight-bold" :ripple="false" @mouseenter="drawer = !drawer">Servicios</v-btn>
      <v-btn class="font-weight-bold" :ripple="false" @mouseenter="prueba = !prueba">Departamentos</v-btn>

      <!--      <div>-->
      <!--        &lt;!&ndash;Anchor&ndash;&gt;-->
      <!--        <RouterLink to="/2">-->
      <!--          <v-btn class="hover-anchor font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(2)"-->
      <!--                 v-if="this.selectedTopTab===2">Anchor-->
      <!--          </v-btn>-->
      <!--          <v-btn class="hover-anchor font-weight-bold" :ripple="false" @click="changeSelected(2)" v-else>Anchor</v-btn>-->
      <!--        </RouterLink>-->

      <!--        &lt;!&ndash;Nuixo&ndash;&gt;-->
      <!--        <v-btn class="hover-nuixo font-weight-bold" style="color:#ff8787" :ripple="false" @click="changeSelected(3)"-->
      <!--               v-if="this.selectedTopTab===3">NuixoErp-->
      <!--        </v-btn>-->
      <!--        <v-btn class="hover-nuixo font-weight-bold" :ripple="false" @click="changeSelected(3)" v-else>NuixoErp</v-btn>-->

      <!--        &lt;!&ndash;CodeCrafters&ndash;&gt;-->
      <!--        <v-btn class="hover-codec font-weight-bold" style="color:#9489f5" :ripple="false" @click="changeSelected(4)"-->
      <!--               v-if="this.selectedTopTab===4">CodeCrafters-->
      <!--        </v-btn>-->
      <!--        <v-btn class="hover-codec font-weight-bold" :ripple="false" @click="changeSelected(4)" v-else>CodeCrafters</v-btn>-->
      <!--        <v-spacer></v-spacer>-->
      <!--      </div>-->

      <!--<RouterLink to="/GRANFINAL">
        <v-btn class="v-ripple__animation"></v-btn>
      </RouterLink>-->
      <v-spacer></v-spacer>
      <!--Contact Us-->
      <RouterLink to="/contact">
        <v-btn class="hover-anchor font-weight-bold" style="color:#24afff" :ripple="false" @click="changeSelected(5)"
               v-if="this.selectedTopTab===5">CONTACTANOS
        </v-btn>
        <v-btn class="hover-anchor font-weight-bold" :ripple="false" @click="changeSelected(5)" v-else>CONTACTANOS
        </v-btn>
      </RouterLink>

      <!--Login-->
      <v-btn class="font-weight-bold" :ripple="false">LOGIN</v-btn>
    </v-app-bar>
    <!--
    ******************
    View que cambia
    ******************
    -->
    <center>
      <v-navigation-drawer
          v-model="drawer"
          location="top"
          style="margin-top: -5px; height: 500px"
          @mouseleave="drawer = !drawer">


        <v-container style="max-width: none">
          <h5 class="text-blue text-h5">Complementa tu Sistema de información</h5>

          <!--Contenedor-->
          <v-row>

            <!-- Primera Columna -->
            <v-col cols="3" class="mt-5">

              <!-- Primer Elemento -->
              <v-row>
                <v-col>
                  <img id="image-934-74223" alt="AHORA CRM Software de Gestión Comercial"
                       src="https://www.ahora.es/wp-content/uploads/2022/01/ahora-crm.png" width="50">
                  <a id="link-1515-74223" class="" href="https://www.ahora.es/ahora-crm/">
                    <h4 id="headline-1516-74223" class="">AHORA CRM</h4>
                    <div id="text_block-1517-74223" class="text-grey">La herramienta 360º para tu equipo de ventas</div>
                  </a>
                </v-col>
              </v-row>

              <!-- Segundo Elemento -->
              <v-row>
                <v-col>
                  <img id="image-934-74223" alt="AHORA CRM Software de Gestión Comercial"
                       src="https://www.ahora.es/wp-content/uploads/2022/01/sga.png" width="50">
                  <a id="link-1515-74223" class="" href="https://www.ahora.es/ahora-crm/">
                    <h4 id="headline-1516-74223" class="">AHORA SGA</h4>
                    <div id="text_block-1517-74223" class="text-grey">Software avanzado para la Gestión de Almacén</div>
                  </a>
                </v-col>
              </v-row>

              <!-- Tercer Elemento -->
              <v-row>
                <v-col>
                  <img id="image-947-74223" alt="Sebastian Portal del Empleado de AHORA"
                       src="https://www.ahora.es/wp-content/uploads/2022/01/empleados.png" width="50"/>
                  <a id="link-1524-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/sebastian-recursos-humanos-portal-del-empleado/">
                    <h4 id="headline-1525-74223" class="ct-headline heading-megamenu">Sebastian</h4>
                    <div class="text-grey">Solución de RR.HH y Portal del Empleado</div>
                  </a>
                </v-col>
              </v-row>
            </v-col>

            <!-- Segunda Columna -->
            <v-col cols="3" class="mt-5">

              <!-- Primer Elemento -->
              <v-row>
                <v-col>
                  <img
                      id="image-1466-74223" alt="AHORA Analytics Herramientas de Business Intelligence"
                      src="https://www.ahora.es/wp-content/uploads/2022/01/analytics-1.png" width="50"/>
                  <a id="link-1528-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/ahora-analytics/">
                    <h4 id="headline-1529-74223"
                        class="ct-headline heading-megamenu">AHORA Analytics</h4>
                    <div id="text_block-1530-74223" class="text-grey">El Cuadro BI que se
                      adapta a tu negocio
                    </div>
                  </a>
                </v-col>
              </v-row>

              <!-- Segundo Elemento -->
              <v-row>
                <v-col>
                  <img
                      id="image-958-74223" alt="AHORA SAT Servicio Atención Técnica"
                      src="https://www.ahora.es/wp-content/uploads/2022/01/sat-2.png" width="50">
                  <a id="link-1617-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/ahora-sat/">
                    <h4 id="headline-1618-74223"
                        class="ct-headline heading-megamenu">AHORA SAT</h4>
                    <div id="text_block-1619-74223" class="text-grey">App móvil de
                      asistencia técnica
                    </div>
                  </a>
                </v-col>
              </v-row>

              <!-- Tercer Elemento -->
              <v-row>
                <v-col>
                  <img
                      id="image-963-74223" alt="" src="https://www.ahora.es/wp-content/uploads/2023/08/este.webp"
                      width="50">
                  <a id="link-1621-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/ahora-tpv/">
                    <h4 id="headline-1622-74223"
                        class="ct-headline heading-megamenu">AHORA TPV</h4>
                    <div id="text_block-1623-74223" class="text-grey">Software Terminal
                      Punto de Venta
                    </div>
                  </a>
                </v-col>
              </v-row>
            </v-col>


            <!-- Tercera Columna -->
            <v-col cols="3" class="mt-5">

              <!-- Primer Elemento -->
              <v-row>
                <v-col>
                  <img
                      id="image-1890-74223" alt="" src="https://www.ahora.es/wp-content/uploads/2023/08/3333.webp"
                      width="50">
                  <a id="link-1906-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/bruno-gmao">
                    <h4 id="headline-1907-74223"
                        class="ct-headline heading-megamenu">BRUNO GMAO</h4>
                    <div id="text_block-1908-74223" class="text-grey">
                      Plataforma para mantenimiento<br> gestión de activos de la empresa
                    </div>
                  </a>
                </v-col>
              </v-row>

              <!-- Segundo Elemento -->
              <v-row>
                <v-col>
                  <img
                      id="image-1977-74223" alt=""
                      src="https://www.ahora.es/wp-content/uploads/2024/01/Icono-canal-denuncias-azul-claro.webp"
                      width="50">
                  <a id="link-1978-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/canal-de-denuncias-venta/">
                    <h4 id="headline-1979-74223"
                        class="ct-headline heading-megamenu"> Canal de Denuncias</h4>
                    <div id="text_block-1980-74223" class="text-grey">Alerta sobre las
                      malas prácticas en la empresa
                    </div>
                  </a>
                </v-col>
              </v-row>

              <!-- Tercer Elemento -->
              <v-row>
                <v-col>
                  <img id="image-1919-74223" alt=""
                       src="https://www.ahora.es/wp-content/uploads/2023/08/azul-ahora.webp"
                       width="50">
                  <a id="link-1911-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/ahora-business-hub/">
                    <h4 id="headline-1912-74223"
                        class="ct-headline heading-megamenu">AHORA Business Hub</h4>
                    <div id="text_block-1913-74223" class="text-grey">Marketplace de
                      servicios y módulos de gestión
                    </div>
                  </a>
                </v-col>
              </v-row>
            </v-col>

            <!-- Cuarta Columna -->
            <v-col cols="2" class="mt-5">

              <!-- Primer Elemento -->
              <v-row>
                <v-col>
                  <img
                      id="image-952-74223" alt="Kit digital"
                      src="https://www.ahora.es/wp-content/uploads/2022/03/kds.png" width="50">
                  <a id="link-1625-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/kit-digital/">
                    <h4 id="headline-1626-74223"
                        class="ct-headline heading-megamenu">Kit Digital</h4>
                    <div id="text_block-1627-74223" class="text-grey">Te acompañamos en
                      tu digitalización
                    </div>
                  </a>
                </v-col>
              </v-row>

              <!-- Segundo Elemento -->
              <v-row>
                <v-col>
                  <img
                      alt="Kit digital"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png"
                      width="50">
                  <a id="link-1629-74223" class="ct-link ah-menu-list-item-heading"
                     href="https://www.ahora.es/ticket-bai/">
                    <h4 id="headline-1630-74223"
                        class="ct-headline heading-megamenu">Ticket BAI
                    </h4>
                    <div id="text_block-1631-74223" class="text-grey">Somos fabricante
                      de software garante
                    </div>
                  </a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

      </v-navigation-drawer>
    </center>

    <!--
    ******************
    View que cambia los departamentos
    ******************
    -->
    <center>
      <v-navigation-drawer
          v-model="prueba"
          location="top"
          class=""
          style="margin-top: -5px; height: 300px"
          @mouseleave="prueba = !prueba">
        <v-list>

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
                    <p class="textCenter">Departamento Marítimo</p>
                    <br>
                    <v-btn>Descubre Anchor</v-btn>
                    <br>
                  </v-card-text>
                  <div class="text-center">
                    <img src="/src/Img/Logos/LogoAncla.png" alt="Anchor" width="74"/>
                  </div>
                </v-card>
              </v-col>
              <!--Nuixo-->
              <v-col>
                <v-card class="mx-auto" hover color="#ff8787">
                  <v-card-item>
                    <v-card-title>
                      Nuixó ERP
                    </v-card-title>
                  </v-card-item>

                  <v-card-text class="text-center">
                    <p class="textCenter">Departamento Ardiente</p>
                    <br>
                    <v-btn>Descubre Nuixó</v-btn>
                    <br>
                  </v-card-text>
                  <div class="text-center">
                    <img src="/src/Img/Logos/LogoNuixo-removedBackground.png" alt="Nuixo" width="258"/>
                  </div>
                </v-card>
              </v-col>
              <!--CodeCrafters-->
              <v-col>
                <v-card class="mx-auto" hover color="#0f5dab">
                  <v-card-item>
                    <v-card-title class="text-white">
                      CodeCrafters
                    </v-card-title>
                  </v-card-item>

                  <v-card-text class="text-center">
                    <p class="text-white">Departamento Herrero</p>
                    <br>
                    <v-btn>Descubre CodeCrafters</v-btn>
                    <br>
                  </v-card-text>
                  <div class="text-center">
                    <img src="/src/Img/Logos/LogoCodecrafters.png" width="100" alt="CodeCrafters">
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>


        </v-list>
      </v-navigation-drawer>
    </center>

    <RouterView/>
    <!--
    ******************
    Footer
    ******************
    -->
    <footer class="custom-footer">
      <v-container>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-btn icon="mdi-instagram" class="btn-margin" href="https://www.instagram.com/herpmes.enterprise/"></v-btn>
            <v-btn icon="mdi-twitter" class="btn-margin" href="https://twitter.com/H3RPmes"></v-btn>
            <v-btn icon="mdi-email" class="btn-margin" href="mailto:herpmes.entrerprise@gmail.com"></v-btn>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>
<style>.selected-home {
  color: #24afff;
}

.selected-about {
  color: #24afff;
}

.hover-anchor:hover {
  color: #24afff;
}

.selected-anchor {
  color: #24afff;
}

.hover-nuixo:hover {
  color: #ff8787;
}

.selected-nuixo {
  color: #ff8787;
}

.hover-codec:hover {
  color: #9489f5;
}

.selected-codec {
  color: #9489f5;
}

.custom-footer {
  background-color: #333; /* Color de fondo del footer */
  color: #fff; /* Color del texto del footer */
  padding: 10px; /* Espaciado interno del footer */
  text-align: center; /* Alineación del texto del footer */
  position: relative; /* Permite ajustar la posición con respecto a su contenedor */
  margin-top: 50px; /* Empuja el footer hacia abajo al final del contenedor */
}

.btn-margin {
  margin-right: 5px;
  margin-left: 5px;
}

.btn-margin:hover {
  color: #146CC4;
}</style>