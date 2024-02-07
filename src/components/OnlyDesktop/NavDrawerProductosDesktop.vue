<script setup>
import {useAppBarDesktopStore} from '@/stores/DrawerDesktopStore.js'
const drawerStore = useAppBarDesktopStore()
import ProductosJson from "/src/json/Productos.json"
const productos = ProductosJson
let cant=productos.length()
let cantRows =Math.ceil(cant/4)
</script>

<template>
  <v-navigation-drawer
    v-model="drawerStore.getDrawerProductos"
    location="top"
    style="max-height: none; height: fit-content"
    @mouseleave="drawerStore.swapProductos()" class="pa-9 mt-1">

      <h5 class="text-blue text-h5 text-center">Complementa tu Sistema de información</h5>

      <!--Container-->
      <v-row class="ma-3">
        <!--Bucle Columnas-->
        <v-col cols="3" class="mt-5" v-for="n in 4" >
          <!--Bucle Elementos-->
          <v-row v-for="i in cantRows">
            <v-col>
              <img id="image-934-74223" alt="AHORA CRM Software de Gestión Comercial"
                   :src="productos[(4)*(n-1)+i].image" width="50">
              <a id="link-1515-74223" class="" href="https://www.ahora.es/ahora-crm/">
                <h4 id="headline-1516-74223" class="">{{productos[(4)*(n-1)+i].titulo}}</h4>
                <div id="text_block-1517-74223" class="text-grey">{{productos[(4)*(n-1)+i].subtitulo}}</div>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!--Contenedor-->
      <v-row class="ma-3">

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
                <div id="text_block-1530-74223" class="text-grey">El Cuadro BI que se adapta a tu negocio
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
                <div id="text_block-1619-74223" class="text-grey">App móvil de asistencia técnica
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
        <v-col cols="3" class="mt-5">

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

  </v-navigation-drawer>
</template>

<style scoped>

</style>