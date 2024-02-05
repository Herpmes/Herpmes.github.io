import { defineStore } from 'pinia'

export const useAppBraDesktopStore = defineStore('drawerNavHome', {
  state:()=>({
    drawerServicios : false,
    drawerProductos : false
  }),getters: {
    getDrawerProductos(){return this.drawerProductos},
    getDrawerServicios(){return this.drawerServicios}
  },actions:{
    swapProductos(){
      this.drawerProductos=!this.drawerProductos;
      if(this.drawerServicios){
        this.drawerServicios=!this.drawerServicios;
      }
    },
    swapServicios(){
      this.drawerServicios=!this.drawerServicios;
      if(this.drawerProductos){
        this.drawerProductos=!this.drawerProductos;
      }
    }
  }
})