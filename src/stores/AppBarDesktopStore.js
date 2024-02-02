import { defineStore } from 'pinia'

export const useAppBraDesktopStore = defineStore('drawerProduc', {
  state:()=>({
    drawerProductos : false
  }),getters: {
    getDrawer(){return this.drawerProductos}
  },actions:{
    swap(){
      this.drawerProductos=!this.drawerProductos;
    }
  }
})