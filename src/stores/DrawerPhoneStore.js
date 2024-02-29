import { defineStore } from 'pinia'

export const useDrawerPhoneStore = defineStore('phoneNavStore', {
    state:()=>({
        open:false
    }),getters: {
        isOpen(){return this.open}
    },actions:{
        setOpen(){
            this.open=true
        },
        setClose(){
            this.open=false
        },
        switch(){
            this.open=!this.open
        }
    }
})