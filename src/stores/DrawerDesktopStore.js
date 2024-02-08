import { defineStore } from 'pinia'

export const useDrawerDesktopStore = defineStore('drawerNavHome', {
  state:()=>({
    drawerProductos : false,
    drawerDepartamentos: false
  }),getters: {
    getDrawerProductos(){return this.drawerProductos},
    getDrawerDepartamentos(){return this.drawerDepartamentos}
  },actions:{
    openProductos(){
      this.drawerProductos=true;
      this.drawerDepartamentos=false;
    },
    openDepartamentos(){
      this.drawerProductos=false;
      this.drawerDepartamentos=true;
    },
    closeProductos(){
      this.drawerProductos=false;
    },closeDepartamentos(){
      this.drawerDepartamentos=false;
    },
    closeAll() {
      this.drawerDepartamentos=false;
      this.drawerProductos=false;
    }
  }
})