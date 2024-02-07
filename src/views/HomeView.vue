<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Banners from '/src/json/Banners.json'
import BannerDesktop from '@/components/Banner.vue'
import HomeDescAbout from '@/components/Home/HomeDescAbout.vue'
import ClientCasesDesktop from '@/components/Home/ClientCasesDesktop.vue'
export default {
  components: { ClientCasesDesktop, HomeDescAbout, BannerDesktop },
  data() {
    return {
      banner: Banners
    }
  }
}
</script>

<template>
  <main class="mt-15">
    <!--Banner-->
    <BannerDesktop :title="this.banner.home.title" :subtitle="this.banner.home.subtite" />
    <!--Mini Desc-->
    <HomeDescAbout />
    <!--Casos de Exito-->
    <ClientCasesDesktop/>
  </main>
</template>

<style>
.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.radialBG{
  background: radial-gradient(3339.49% 274.53% at 50% 50%, #146CC4 0%, #093866 100%);
}
.v-carousel__controls__item.v-btn.v-btn--icon {
  background-color: #858684;
}
.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active {
  background-color: #5a7cf6; /* Colour for active one */
}
</style>