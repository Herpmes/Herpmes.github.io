import { defineStore } from 'pinia'

export const useAppBarDesktopStore = defineStore('drawerNavHome', {
  state:()=>({
    drawerServicios : false,
    drawerProductos : false,
    drawerDepartamentos: false
  }),getters: {
    getDrawerProductos(){return this.drawerProductos},
    getDrawerServicios(){return this.drawerServicios},
    getDrawerDepartamentos(){return this.drawerDepartamentos}
  },actions:{
    swapProductos(){
      this.drawerProductos=!this.drawerProductos;
      if(this.drawerServicios){
        this.drawerServicios=!this.drawerServicios;
      }
      if(this.drawerDepartamentos){
        this.drawerDepartamentos=!this.drawerDepartamentos;
      }
    },
    swapServicios(){
      this.drawerServicios=!this.drawerServicios;
      if(this.drawerProductos){
        this.drawerProductos=!this.drawerProductos;
      }
      if(this.drawerDepartamentos){
        this.drawerDepartamentos=!this.drawerDepartamentos;
      }
    },
    swapDepartamentos(){
      this.drawerDepartamentos=!this.drawerDepartamentos;
      if(this.drawerServicios){
        this.drawerServicios=!this.drawerServicios;
      }
      if(this.drawerProductos){
        this.drawerProductos=!this.drawerProductos;
      }
    }
  }
})