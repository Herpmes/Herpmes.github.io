import { defineStore } from 'pinia'

export const useAppBraDesktopStore = defineStore('drawerProduc', {
  state:()=>({
    drawerProductos : false,
    drawerDepartamentos: false
  }),getters: {
    getDrawer(){return this.drawerProductos},
    getDrawerDepartamentos(){return this.drawerDepartamentos}
  },actions:{
    swap(){
      this.drawerProductos=!this.drawerProductos;
    },
    swapDepartamentos(){
      this.drawerDepartamentos=!this.drawerDepartamentos;
    }
  }
})