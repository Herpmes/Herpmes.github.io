import { defineStore } from 'pinia'

export const useAppBarStoreDesktop = defineStore('selected', {
  state:()=>({
    selected:0
  }),getters: {
    getSelected(){return this.selected}
  },actions:{
    setSelectedTo(i){
      this.selected=i;
    }
  }
})